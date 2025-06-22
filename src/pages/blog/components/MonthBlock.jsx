import MonthHeader from "./MonthHeader.jsx";
import BlogPost from "./BlogPost.jsx";

import { useState, useEffect, useCallback } from "react";

export default function MonthBlock(props) {
  const [windowSize, setWindowSize] = useState(1080);
  const handleWindowResize = useCallback((event) => {
    setWindowSize(window.innerWidth);
  }, []);
  const [blockMonth, setBlockMonth] = useState("");
  const [blockSeason, setBlockseason] = useState("");

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  const [colCount, setColCount] = useState(3);
  let postColumns = [];

  const [monthBlockContent, setMonthBlockContent] = useState("");

  //bg color handler
  const seasons = ["winter", "spring", "summer", "autumn"];

  function getSeason(monthInt) {
    return seasons[Math.floor(((monthInt + 1) % 12) / 3)];
  }

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

  function getMonthString(monthInt) {
    return months[monthInt % 12];
  }

  useEffect(() => {
    if (windowSize < 770) {
      setColCount(1);
    } else if (windowSize < 970) {
      setColCount(2);
    } else {
      setColCount(3);
    }
  }, [windowSize]);

  useEffect(() => {
    postColumns = [];
    for (let i = 0; i < colCount; i++) {
      postColumns.push([]);
    }
    console.log(postColumns);

    // props.data.map((item, i) => {
    //   let arrayIndex = i % colCount;
    //   blogPostArray.push();
    // });

    // console.log(props.data);
    props.data.forEach((item, i) => {
      postColumns[i % colCount].push({ id: item.id, data: item });
    });
    // console.log(postColumns);

    setBlockMonth(getMonthString(new Date(props.data[0].date).getMonth()));

    setBlockseason(getSeason(new Date(props.data[0].date).getMonth()));

    setMonthBlockContent(
      postColumns.map((column, c) => {
        return (
          <div className="monthBlock__column" key={c}>
            {column.map((post, p) => {
              return (
                <BlogPost
                  key={p}
                  data={post.data}
                  tags={props.tags}
                  preview={props.preview}
                />
              );
            })}
          </div>
        );
      })
    );
  }, [colCount]);

  //

  // let postColumns = [[], [], []];

  return (
    <div className="monthBlock" key={props.index}>
      <MonthHeader season={blockSeason} title={blockMonth} />
      {monthBlockContent}
    </div>
  );
}
