import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";

export default function Contact() {

    const query = graphql`
  {
    allContentfulContact(sort: {fields: title, order: ASC}) {
        nodes {
          id
          link
          title
          icon
        }
      } 
  }
`;
    const data = useStaticQuery(query);
    const contactList = data.allContentfulContact.nodes;
    const contactItem =
        contactList.map((item) => {
            return (
                <ul className="tech-list" key={item.id}>
                    <li>
                        <a
                            key={item.id}
                            className="on-hover-40 text-color-purple"
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                         <span className="mr-1"><i className={item.icon}/></span>{item.title}
                        </a>
                    </li>
                </ul>
            )
        })

    return (
        <div className="max-width">
            <div className="top-bottom-margin">

                {/* mettre dans un components ? */}
                <div className="float-right">
                    <a href="/">
                        <div className="label-name on-hover-40 text-color-white"></div>
                    </a>
                </div>


                <div className="hide-text-block">
                    <h3 className="text-color-white animate">Let's make something great!</h3>
                </div>

                <div className="max-width-70 text-color-white animate delay02">
                    <h4>Contact</h4>
                    <p>I'm seeking out opportunities to work for companies.</p>
                    <p>Feel free to reach out through any platforms bellow:</p>

                    <div className="links">

                        {contactItem}

                    </div>
                </div>
            </div>
        </div>
    )
}