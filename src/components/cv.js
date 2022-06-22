import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";

export default function CV() {

    const query = graphql`
  {
    allContentfulCv(
        filter: {description: {}}
        sort: {fields: description, order: DESC}
      ) {
        nodes {
          classname
          id
          href
          description
          rel
          target
        }
      }
  }
`;
    const data = useStaticQuery(query);
    const cvList = data.allContentfulCv.nodes;
    const cvItem =
        cvList.map((item) => {
            return (
                <a
                    key={item.id}
                    className={item.classname}
                    href={item.href}
                    target={item.target}
                    rel={item.rel}
                >
                    {item.description}
                </a>
            )
        })

    return (
        <div className="links">
            { cvItem}
        </div>
    )
}