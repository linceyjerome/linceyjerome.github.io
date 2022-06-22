"use strict";
exports.id = "component---src-pages-about-js";
exports.ids = ["component---src-pages-about-js"];
exports.modules = {

/***/ "./src/components/cv.js":
/*!******************************!*\
  !*** ./src/components/cv.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CV)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_750378467_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/750378467.json */ "./public/page-data/sq/d/750378467.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function CV() {
  const query = "750378467";
  const data = _public_page_data_sq_d_750378467_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const cvList = data.allContentfulCv.nodes;
  const cvItem = cvList.map(item => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
      key: item.id,
      className: item.classname,
      href: item.href,
      target: item.target,
      rel: item.rel
    }, item.description);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "links"
  }, cvItem);
}

/***/ }),

/***/ "./src/components/tech.js":
/*!********************************!*\
  !*** ./src/components/tech.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tech)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2881309496_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/2881309496.json */ "./public/page-data/sq/d/2881309496.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Tech() {
  const query = "2881309496";
  const data = _public_page_data_sq_d_2881309496_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const techList = data.allContentfulTech.nodes;
  const techItem = techList.map(item => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", {
      className: item.icon
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
      className: "ml-1"
    }, item.title));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
    className: "tech-list"
  }, techItem);
}

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_1491778521_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/1491778521.json */ "./public/page-data/sq/d/1491778521.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_tech__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/tech */ "./src/components/tech.js");
/* harmony import */ var _components_cv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cv */ "./src/components/cv.js");




function About() {
  const query = "1491778521";
  const data = _public_page_data_sq_d_1491778521_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const about = data.contentfulAbout;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "max-width"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "top-bottom-margin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "max-width-70 text-color-white animate delay02"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "float-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "label-name on-hover-40 text-color-white"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", {
    className: "text-color-white"
  }, about.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h5", null, about.schoolDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "align-text"
  }, about.meDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h5", null, "Skills"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
    className: "tech-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_tech__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_cv__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
}

/***/ }),

/***/ "./public/page-data/sq/d/1491778521.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1491778521.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"contentfulAbout":{"meDescription":"I am passionate about front-end and back-end software development and web programming. I am a very persevering, autonomous, vigorous and full of energy person.","schoolDescription":"Hi, i\'m Lincey Jérôme a Javascript and .Net developer. I graduated from College Maisonneuve in software development.","title":"About"}}}');

/***/ }),

/***/ "./public/page-data/sq/d/2881309496.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2881309496.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"allContentfulTech":{"nodes":[{"id":"eb081efb-f3e8-5854-9f30-377a47c178f3","title":".Net Core","icon":"devicon-dotnetcore-plain"},{"id":"bfe9cb27-4ce4-5ee8-9c11-b3e88491bef4","title":"C#","icon":"devicon-csharp-plain"},{"id":"7ca8c146-32e8-5712-b3dd-7ba63346a8c3","title":"CSS3","icon":"devicon-css3-plain"},{"id":"b6def069-5f49-5ea0-b1df-5868622c2a6a","title":"Docker","icon":"devicon-docker-plain"},{"id":"bcf2d5fc-3e34-5eda-ba79-a46db44464dd","title":"Gatsby","icon":"devicon-gatsby-plain"},{"id":"55086b5b-5951-5420-aa96-1419ac61f3e6","title":"Git","icon":"devicon-git-plain"},{"id":"3391c887-0860-5bb6-bbee-1c8561e99a58","title":"HTML-5","icon":"devicon-html5-plain"},{"id":"e7e66d3b-db43-5ac6-abd8-4321e30e5f94","title":"Java","icon":"devicon-java-plain"},{"id":"75a4868e-9c58-52d5-9403-61efe61e8fbc","title":"Javascript","icon":"devicon-javascript-plain"},{"id":"f4911103-19ff-56fa-9304-e3b54038ab69","title":"SCSS","icon":"devicon-sass-original"},{"id":"f0a093cb-6c58-51fa-b980-dca9eef92460","title":"Sql Server","icon":"devicon-microsoftsqlserver-plain"}]}}}');

/***/ }),

/***/ "./public/page-data/sq/d/750378467.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/750378467.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"allContentfulCv":{"nodes":[{"classname":"on-hover-40 text-color-purple","id":"8758e50e-b353-5a84-a6a1-7bee8406fd82","href":"https://www.linkedin.com/in/lincey-j%C3%A9r%C3%B4me/","description":"My Linkedin","rel":"noopener noreferrer","target":"_blank"},{"classname":"on-hover-40 text-color-purple linkedinLinks","id":"3333c6dc-5d12-53e9-b3e3-5b412c790631","href":"https://www.linkedin.com/in/lincey-j%C3%A9r%C3%B4me/?locale=fr_FR","description":"Mon Linkedin","rel":"noopener noreferrer","target":"_blank"}]}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-about-js.js.map