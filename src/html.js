import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}  lang="en" >
            <head>
                <title>Lincey Jerome</title>

                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1, maximum-scale=5" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Lincey Jerome" />
                <meta name="description" content="Website about me" />
                <meta content="text/html" httpEquiv="Content-Type" />

                {props.headComponents}

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"  />
                <link href="https://fonts.googleapis.com/css2?family=Fira+Code&amp;display=swap" rel="stylesheet"></link>

            </head>

            {/* <Header></Header> */}
            <body
                {...props.bodyAttributes}
            >
                {props.preBodyComponents}
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                    role="group" />
                {/* <Footer></Footer> */}
                {props.postBodyComponents}
            </body>
        </html>
    )
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
}