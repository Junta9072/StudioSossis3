import { useState, useEffect } from "react";

import urls from "./paths.json";

import "./reset.css";
import "./App.css";

import Loader from "./components/Loader.jsx";
import Menu from "./components/Menu";
import ShowCase from "./components/ShowCase";
import TagCase from "./components/TagCase";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [showCaseData, setShowCaseData] = useState("");
  const [projectData, setProjectData] = useState([]);
  const [tagData, setTagData] = useState("");
  const [loaderDisplay, setLoaderDisplay] = useState("");
  const [currentFilter, setCurrentFilter] = useState("");

  const getProjects = async () => {
    console.log(urls);
    const response = await fetch(
      urls.live +
        "wp-json/wp/v2/project?acf_format=standard&_fields=id,slug,title,acf&per_page=20",
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
    setShowCaseData(apiRes.find((item, i) => item.slug === "studio-sossis"));
    setProjectData(apiRes);
  };

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
    const apiTags = await response.json(); //extract JSON from the http response
    // do something with myJson
    setTagData(apiTags);
    setTimeout(() => {
      setLoaderDisplay("loader__hidden");
    }, 500);
  };

  const filterProjects = (filter) => {
    setCurrentFilter(filter.name);
  };

  useEffect(() => {
    getProjects();
    getTags();
  }, []);

  return (
    <>
      <ShowCase data={showCaseData} />
      <TagCase tags={tagData} filter={filterProjects} data={projectData} />
      <Projects data={projectData} tags={tagData} filter={currentFilter} />
      <Footer />

      <Menu color="#fff" />
      <Loader display={loaderDisplay} />
    </>
  );
}

export default App;
