import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";

export default function Tech() {

    const query = graphql`
  {
    allContentfulTech(sort: {fields: title}) {
        nodes {
            id
          title
          icon
        }
      }
  }
`;
    const data = useStaticQuery(query);
    const techList = data.allContentfulTech.nodes;
    const techItem =
        techList.map((item) => {
            return (
                <li key={item.id}>
                    <i className={item.icon}></i>
                    <span className="ml-1">{item.title}</span>
                </li>
            )
        })

    return (
        <ul className="tech-list">
            {techItem}
        </ul>
    )
}