"use strict";
var _a, _b, _c, _d;
var getById = function (id) { return document.getElementById(id); };
//<HTMLElement>
var getByClass = function (name) { return document.getElementsByClassName(name)[0]; };
var logFormData = function () {
    var name = getById('name');
    var email = getById('email');
    var message = getById('message');
    console.log("\n        user name: " + name + "\n        user email: " + email + "\n        user message: " + message + "\n   ");
};
(_a = getById("submit")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', logFormData);
(_b = getById("nav-open")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () { return getById("mobile-nav").style.display = 'block'; });
(_c = getById("nav-close")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { return getById("mobile-nav").style.display = 'none'; });
(_d = getById("contact-us")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () { return getById("mobile-nav").style.display = 'none'; });
