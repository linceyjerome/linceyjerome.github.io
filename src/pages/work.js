import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";

export default function Work() {

    const query = graphql`
  {
    allContentfulWork(filter: {title: {}}, sort: {fields: title, order: ASC}) {
        nodes {
          githubLink
          id
          rel
          target
          title
          description
        }
      }
  }
`;
    const data = useStaticQuery(query);
    const projectList = data.allContentfulWork.nodes;
    const projectItem =

        projectList.map((item) => {
            return (
                <a key={item.id} href={item.githubLink} target={item.target} rel={item.rel}>
                    <div className="on-hover-40 hide-text-block">
                        <h3 className="text-color-white mb-0 font-bold mb-2">{item.title}</h3>
                        <p className="size-large text-color-purple ">{item.description}</p>
                    </div>
                </a>
            )
        })

    return (
        <div className="max-width">
            <div className="top-bottom-margin">
                <div className="max-width-70 text-color-white animate delay02">

                    <div className="float-right">
                        <a href="/">
                            <div className="label-name on-hover-40 text-color-white"></div>
                        </a>
                    </div>

                    <div className="max-width">
                        <div className="top-bottom-margin animate">
                            {projectItem}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}