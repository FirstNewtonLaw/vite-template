import arrowRightUp from "../data/arrow-right-up.svg";
import projects from "../data/projects";
import Head from "../components/Head";
import "../styles/pages/landing.css";
import tools from "../data/tools";

export default () => {
  return (
    <>
      <Head />
      <div className="about">
        <p>
          <span className="title op-40">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </p>
      </div>
      <div className="projects" id="projects">
        <h1 className="title op-30">Projects</h1>
        <div className="list">
          {projects.map((project) => {
            return (
              <div className="item">
                <span>
                  <a href={project.href}>{project.name}</a>
                  <img src={arrowRightUp} alt="" />
                </span>
                <p>{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="tools" id="tools" style={{marginTop: "2rem"}}>
        <h1 className="title op-30">Tools</h1>
        <div className="list">
          {tools.map((tool) => {
            return <div className="item">
              <a href={tool.href} style={{marginBottom: ".25rem"}}>{tool.name}</a>
              <p className="op-30">{tool.bref}</p>
            </div>
          })}
        </div>
      </div>
    </>
  );
};