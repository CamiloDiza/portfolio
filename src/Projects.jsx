import PropTypes from "prop-types";
import Icon from "./Icon";

export default function Projects() {
  return (
    <section className="bg-slate-100 pb-20 max-lg:pb-10 mt-10" id="projects">
      <div className="container px-18 mx-auto ">
        <h1 className="text-violet-700 font-black text-center text-2xl underline underline-offset-8">
          My Projects
        </h1>
        <div className="bg-slate-50 rounded-lg shadow-lg p-4 mt-5 mx-auto max-lg:mx-5 lg:w-2/3">
          <ProjectCard
            title={"Dr. Claudia Alzate's Portfolio of Services"}
            description={
              "Website of the dentist Claudia Alzate, offers accessible information about her dental services in a modern and friendly way."
            }
            img={"/images/projects/claudia-alzate.png"}
            techs={[
              <Icon key="html5" img={"html5"} />,
              <Icon key="css3" img={"css3"} />,
              <Icon key="javascript" img={"javascript"} />,
            ]}
            github={"https://github.com/CamiloDiza"}
            url={"http://claudia-alzate.com/"}
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, img, techs, github, url }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 justify-items-center items-center">
      <div className="col-auto text-center space-y-4">
        <div>
          <h2 className="font-black text-2xl text-slate-800">{title}</h2>
        </div>
        <div>
          <p className="font-medium text-left">{description}</p>
        </div>
        <div className="content-end">
          <span className="font-black text-xl text-slate-800">Tech used</span>
          <div className="flex gap-x-8 justify-center">{techs}</div>
        </div>
      </div>

      <div className="col-auto">
        <a href={url} className="" target="_blank" rel="noreferrer">
          <img
            className="w-80 h-52 rounded-lg shadow-lg transition ease-in-out delay-150 hover:scale-105 duration-300"
            src={img}
          />
        </a>

        <div className="mt-2 space-x-4">
          <span>See the project on:</span>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-700"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-700"
          >
            <i className="bi bi-globe"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  techs: PropTypes.array.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
