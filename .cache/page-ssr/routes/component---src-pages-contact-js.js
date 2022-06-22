"use strict";
exports.id = "component---src-pages-contact-js";
exports.ids = ["component---src-pages-contact-js"];
exports.modules = {

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2576887591_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/2576887591.json */ "./public/page-data/sq/d/2576887591.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Contact() {
  const query = "2576887591";
  const data = _public_page_data_sq_d_2576887591_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const contactList = data.allContentfulContact.nodes;
  const contactItem = contactList.map(item => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
      className: "tech-list",
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
      key: item.id,
      className: "on-hover-40 text-color-purple",
      href: item.link,
      target: "_blank",
      rel: "noopener noreferrer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
      className: "mr-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", {
      className: item.icon
    })), item.title)));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "max-width"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "top-bottom-margin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "float-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "label-name on-hover-40 text-color-white"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "hide-text-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", {
    className: "text-color-white animate"
  }, "Let's make something great!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "max-width-70 text-color-white animate delay02"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h4", null, "Contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "I'm seeking out opportunities to work for companies."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Feel free to reach out through any platforms bellow:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "links"
  }, contactItem))));
}

/***/ }),

/***/ "./public/page-data/sq/d/2576887591.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2576887591.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"allContentfulContact":{"nodes":[{"id":"69b25109-43ba-559c-a6be-b2749f74a396","link":"https://dev.to/jijii03","title":"Dev.To","icon":"fa-brands fa-dev text-color-white"},{"id":"1d625a55-196c-51d7-825d-e816a469d34e","link":"mailto:linceyjerome@proton.me","title":"Email","icon":"fa-solid fa-envelope text-color-white"},{"id":"468a2418-9289-598c-a4dc-d94f47152632","link":"https://twitter.com/jijii03","title":"Twitter","icon":"fa-brands fa-twitter text-color-white"}]}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-contact-js.js.map