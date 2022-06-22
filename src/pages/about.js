import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";
import TechList from "../components/tech";
import Cv from "../components/cv";

export default function About() {

    const query = graphql`
  {
    contentfulAbout {
      meDescription
      schoolDescription
      title
    },
  }
`;
    const data = useStaticQuery(query);
    const about = data.contentfulAbout;

    return (
        <div className="max-width">
            <div className="top-bottom-margin">
                <div className="max-width-70 text-color-white animate delay02">
                    <div className="float-right">
                        <a href="/">
                            <div className="label-name on-hover-40 text-color-white"></div>
                        </a>
                    </div>

                    <h3 className="text-color-white">{about.title}</h3>

                    <h5 >
                        {about.schoolDescription}
                    </h5>

                    <p className="align-text">
                        {about.meDescription}
                    </p>

                    <h5>Skills</h5>

                    <ul className="tech-list">
                        <TechList></TechList>
                    </ul>

                    <Cv></Cv>

                </div>
            </div>
        </div>
    )
}