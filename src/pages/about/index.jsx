import { useState, useEffect, useRef } from "react";

import urls from "../../paths.json";

import "../../styles/about.css";
import dayjs from "dayjs";

import Menu from "../../components/Menu";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";

import SectionWrapper from "./components/SectionWrapper";
import SectionChapter from "./components/SectionChapter";
import Graph from "./components/Graph";

import timeTableData from "./components/timeTableData.json";
import TimelineItem from "./components/TimelineItem";
import TimelineCover from "./components/TimelineCover";

export default function About() {
  const [graphVisibility, setGraphVisibility] = useState("");
  const graph = useRef(null);

  let emptyTimelineContent = {
    name: "",
    full_name: "",
    timestamp: "",
    colors: [""],
    grid_area: "",
    description: "",
    image_urls: [""],
  };
  const [timelineContent, setTimelineContent] = useState(emptyTimelineContent);
  const [timelineToggle, setTimelineToggle] = useState(false);

  let date = dayjs("2002-09-27");
  let now = dayjs();

  let years = now.diff(date, "year");
  let months = now.diff(date.add(years, "year"), "month");
  let days = now.diff(date.add(years, "year").add(months, "month"), "day");

  let age = years + "y " + months + "m " + days + "d";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setGraphVisibility(
          entry.isIntersecting ? "graph__visible" : "graph__hidden"
        );
        console.log(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (graph.current) {
      observer.observe(graph.current);
    }

    return () => {
      if (graph.current) {
        observer.unobserve(graph.current);
      }
    };
  }, []);

  const setTimelineTopic = (id) => {
    console.log(id);
    console.log(timeTableData.timetable_items[id]);
    setTimelineContent(timeTableData.timetable_items[id]);
    setTimelineToggle(true);
  };

  const toggleTimeline = () => {
    setTimelineToggle(false);
    setTimeout(() => {
      setTimelineContent(emptyTimelineContent);
    }, 500);
  };

  return (
    <>
      <div className="about__page">
        <div className="about__slide">
          <div className="profile__img">
            <div className="profile__img__container">
              <img
                src={
                  urls.live + "wp-content/uploads/2024/11/ezgif.com-resize.gif"
                }
                className="profile__img__profile"
              />
            </div>
            <div className="profile__img__container">
              <img
                src={
                  urls.live + "/wp-content/uploads/2024/11/stickerstacker.gif"
                }
                className="profile__img__stickers"
              />
            </div>
          </div>
          <div className="about__title">
            <h1 className="about__title__name">
              <div className="about__title__word">Yarne</div>
              <div className="about__title__word">Brangers</div>
            </h1>
            <SectionWrapper>
              <SectionChapter
                title="tl;dr"
                text={
                  <>
                    I'm a UI/UX designer from Antwerp.
                    <br /> With a love for web & graphic design, <br />
                    and a passion for illustration & 3D
                  </>
                }
              />
              <SectionChapter title="T+" text={age} />
              <SectionChapter title="region" text={"Antwerp BE"} />
              <SectionChapter title="location" text={"51°12'N 4°25'E"} />
            </SectionWrapper>
          </div>
        </div>

        <div className="about__slide">
          <div
            className="about__titleFrame"
            style={{
              backgroundImage:
                "url(" +
                urls.live +
                "wp-content/uploads/2024/11/schroefje.png)",
            }}
          >
            <h2 className="about__title__name">
              <div className="about__title__word">KNOWING</div>
              <div className="about__title__word">& DOING</div>
            </h2>
            <SectionWrapper>
              <SectionChapter
                title="what's cooking"
                text={
                  <>
                    There's something fun about learning new things, but honing
                    a craft is not only essential in things like React. They can
                    open new possibilities and inspire new ideas when something
                    like blender get's an update.
                  </>
                }
              />
            </SectionWrapper>
          </div>

          <div className={"graph__wrapper " + graphVisibility} ref={graph}>
            <SectionWrapper>
              <Graph />
            </SectionWrapper>
          </div>
        </div>
        <div
          className="about__slide about__timeline"
          style={{
            backgroundImage:
              "url(" + urls.live + "wp-content/uploads/2024/11/calendar.png)",
          }}
        >
          <h2 className="about__title__name">
            <div className="about__title__word">READY FOR</div>
            <div className="about__title__word">MORE</div>
          </h2>
          <TimelineCover
            data={timelineContent}
            active={timelineToggle}
            toggle={() => {
              toggleTimeline();
            }}
          />
          <div className="about__timeline__content">
            <SectionWrapper>
              <div className="timeline__grid__container">
                <div className="timeline__grid">
                  <span className="timeline__date timeline__date--double">
                    '20
                  </span>
                  <span className="timeline__date">'21</span>
                  <span className="timeline__date">'22</span>
                  <span className="timeline__date timeline__date--double">
                    '23
                  </span>
                  <span className="timeline__date">'24</span>
                  <span className="timeline__date">now</span>
                  <span className="timeline__title timeline__title--internship">
                    Intership
                  </span>
                  <span className="timeline__title timeline__title--studies">
                    Studies
                  </span>
                  <span className="timeline__title timeline__title--hobbies">
                    Hobbies
                  </span>
                  {timeTableData.timetable_items.map((item, i) => {
                    return (
                      <TimelineItem
                        id={i}
                        data={item}
                        setTimelineTopic={setTimelineTopic}
                      />
                    );
                  })}
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </div>

      <Footer />
      <Menu color="#0c0715" />
      {/* <Loader display={loaderDisplay} color={["#0c0715", "#e7dfcd"]} /> */}
    </>
  );
}
