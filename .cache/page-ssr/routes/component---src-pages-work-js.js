"use strict";
exports.id = "component---src-pages-work-js";
exports.ids = ["component---src-pages-work-js"];
exports.modules = {

/***/ "./src/pages/work.js":
/*!***************************!*\
  !*** ./src/pages/work.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Work)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2979058709_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/2979058709.json */ "./public/page-data/sq/d/2979058709.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Work() {
  const query = "2979058709";
  const data = _public_page_data_sq_d_2979058709_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const projectList = data.allContentfulWork.nodes;
  const projectItem = projectList.map(item => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
      key: item.id,
      href: item.githubLink,
      target: item.target,
      rel: item.rel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "on-hover-40 hide-text-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", {
      className: "text-color-white mb-0 font-bold mb-2"
    }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      className: "size-large text-color-purple "
    }, item.description)));
  });
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "max-width"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "top-bottom-margin animate"
  }, projectItem)))));
}

/***/ }),

/***/ "./public/page-data/sq/d/2979058709.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2979058709.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"allContentfulWork":{"nodes":[{"githubLink":"https://github.com/jijii26/Podcast","id":"aabdcab2-0574-516c-913c-f9e467d101fc","rel":"noopener noreferrer","target":"_blank","title":"Apple Podcast","description":"Podcast Android application in Kotlin"},{"githubLink":"https://github.com/jijii26/ColorGame","id":"dc0abf45-38e0-5783-be8f-9aa2512a3fd0","rel":"noopener noreferrer","target":"_blank","title":"Color Game","description":"Little game to guess the color in hexadecimal in javascript"},{"githubLink":"https://github.com/linceyjerome/Java-Api-User","id":"ed45f31f-6e53-50a7-8114-e5df9a6521b4","rel":"noopener noreferrer","target":"_blank","title":"Java API Users","description":"Simple Spring Framework API requests"},{"githubLink":"https://github.com/jijii26/JDBC-SQL-Library","id":"84c3c937-6785-5537-b5f7-e693ebcca47e","rel":"noopener noreferrer","target":"_blank","title":"Java librairy","description":"Book librairy using Java JDBC"},{"githubLink":"https://github.com/jijii26/Chuck-Norris-Joke-Generator","id":"171fdaba-2940-5bfc-9769-7f01f8a69d0f","rel":"noopener noreferrer","target":"_blank","title":"Joke Generator","description":"Chuck norris joke generator in Javascript"}]}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-work-js.js.map