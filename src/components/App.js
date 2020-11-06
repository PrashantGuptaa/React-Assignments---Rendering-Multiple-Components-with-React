import React, { Component, useState } from "react";
import "../styles/App.css";
import ProjectName from "./ProjectName";
import ProjectDescription from "./ProjectDesription";

const App = () => {
  return (
    <>
      <ProjectName data-ns-test="project-name" />
      <ProjectDescription data-ns-test="project-description" />
    </>
  );
};

export default App;
