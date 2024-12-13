import "../../styles/blog.css";
import dayjs from "dayjs";
import urls from "../../paths.json";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

import MonthBlock from "./components/MonthBlock.jsx";
import MonthBlockPlaceholder from "./components/MonthBlockPlaceholder.jsx";

import { useEffect, useState } from "react";

export default function Blog() {
  const [bgGradients, setBgGradients] = useState(null);
  const [time, setTime] = useState(new Date());
  const [blogPosts, setBlogPosts] = useState(<MonthBlockPlaceholder />);
  const [blogPostTags, setBlogPostTags] = useState("");
  const [newPostVisible, setNewPostVisible] = useState("blog__newPost--hidden");
  const [newPostCounter, setNewPostCounter] = useState(0);

  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const [seasonData, setSeasonData] = useState({
    season_name: "winter",
    season_month: months[dayjs().month()],
  });

  function getSeasonData(monthInt) {
    let seasonIndex = Math.floor(((monthInt + 1) % 12) / 3); // Adjust month index to fit the seasons
    let seasonNames = ["winter", "spring", "summer", "fall"];
    console.log(months[dayjs().month()]);
    return {
      season_name: seasonNames[seasonIndex],
      season_month: months[dayjs().month()],
    };
  }

  const gridOffsetY = [];
  // let bgSeason = "winter";
  let gradientColumnActive = false;
  let gridCols = 30;

  function renderGradientColumns() {
    if (gradientColumnActive === false) {
      setBgGradients(
        gridOffsetY.map((item, i) => {
          let delay = -(item / 10);
          // if (i >= gridCols / 2) {
          //   delay = delay + 15;
          // }

          return (
            <div
              className={"bg__gradient bg__" + seasonData.season_name}
              style={{ animationDelay: delay + "s" }}
              key={i}
            ></div>
          );
        })
      );
      gradientColumnActive = true;
    }
  }

  const getTags = async () => {
    const response = await fetch(
      urls.live +
        "wp-json/wp/v2/project-tags?acf_format=standard&_fields=id,name",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const apiTags = await response.json();
    getBlogPosts(apiTags);
  };

  const getBlogPosts = async (tags) => {
    const currentMonthStart = dayjs()
      .startOf("month")
      .format("YYYY-MM-DDTHH:mm:ss");
    const currentMonthEnd = dayjs()
      .endOf("month")
      .format("YYYY-MM-DDTHH:mm:ss");
    const response = await fetch(
      urls.live +
        `wp-json/wp/v2/blogpost?acf_format=standard&_fields=id,date,slug,title,acf&per_page=20&after=${currentMonthStart}&before=${currentMonthEnd}`,
      // &after=2024-12-12T00:00:00&before=2024-12-12T23:59:59
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const apiRes = await response.json(); //extract JSON from the http response
    // do something with myJson

    console.log(apiRes);

    //check if new posts have been made
    if (localStorage.getItem("lastBlogVisit") != null) {
      let newPosts = 0;
      let lastBlogVisit = dayjs(localStorage.getItem("lastBlogVisit"));
      apiRes.forEach((item, i) => {
        if (dayjs(item.date).isAfter(lastBlogVisit)) {
          newPosts++;
        }
      });
      setNewPostCounter(newPosts);
    }
    localStorage.setItem("lastBlogVisit", JSON.stringify(dayjs()));
    newPostCounter == 0
      ? setNewPostVisible("blog__newPost--hidden")
      : setNewPostVisible("blog__newPost--active");

    //get current month
    let currMonth = seasonData.season_month;
    let perMonthApiRes = [[]];
    let perMonthIndex = 0;
    apiRes.reduce((prev, curr) => {
      const prevMonth = dayjs(prev.date).month();
      const currMonth = dayjs(curr.date).month();

      if (prevMonth === currMonth) {
        perMonthApiRes[perMonthIndex].push(curr);
      } else {
        perMonthIndex++;
        perMonthApiRes.push([curr]);
      }

      return curr;
    }, apiRes[0]);

    console.log(perMonthApiRes);

    setBlogPosts(
      perMonthApiRes.map((item, i) => {
        return (
          <MonthBlock
            key={i}
            index={i}
            data={item}
            season={seasonData.season_name}
            title={seasonData.season_month}
            tags={tags}
          />
        );
      })
    );
  };

  useEffect(() => {
    setSeasonData(getSeasonData(dayjs().month()));

    for (let i = 0; i < gridCols; i++) {
      gridOffsetY.push(i);
    }

    renderGradientColumns();
    gradientColumnActive = true;

    getTags();
  }, []);

  return (
    <>
      <div className="blog__page">
        <div className="blog__bg">{bgGradients}</div>
        <div className="blog__header">
          <h1 className="blog__title">Blog</h1>
          <p className="blog__description">
            Things that don't make it into a project, are too small for even a
            micro-project, <br /> or are waiting and wanting to get cast and
            moulded in a new project.
          </p>
        </div>

        <div className="blog__season">{blogPosts}</div>
      </div>
      <div className={"blog__newPost__button " + newPostVisible}>
        <div className="blog__newPost__bgGradients">
          <div
            className={"blog__newPost__bg bg__" + seasonData.season_name}
          ></div>
          <div
            className={"blog__newPost__bg bg__" + seasonData.season_name}
          ></div>
          <div
            className={"blog__newPost__bg bg__" + seasonData.season_name}
          ></div>
          <div
            className={"blog__newPost__bg bg__" + seasonData.season_name}
          ></div>
        </div>

        <div className={"blog__newPost__content "}>
          <div className="blog__newPost__arrow">↓</div>
          {newPostCounter} new posts{" "}
          <div className="blog__newPost__arrow">↓</div>
        </div>
      </div>
      <Footer />

      <Menu color="#fff" />
    </>
  );
}
