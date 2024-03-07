"use strict";

const link = document.querySelector("a");
const hrefAttribute = link.getAttribute("href");
console.log("hrefAttribute", hrefAttribute);
console.log("href", link.href);

console.log(link.attributes);
console.log(link.attributes.href);

link.setAttribute("class", "link");

//

const progressBar = document.querySelector(".progress");
console.log(progressBar.dataset);
console.log(progressBar.dataset.value);

console.log("nodeName: ", progressBar.nodeName);
console.log("tagName: ", progressBar.tagName);

//

const outerDiv = document.getElementById("outer");
console.log(outerDiv.outerHTML);
console.log(outerDiv.innerHTML);

outerDiv.outerHTML = "<section>HELLO</section>";

// hidden
const box = document.querySelector(".box");
box.hidden = true;

// disabled
const button = document.querySelector("button");

button.disabled = true;
// button.setAttribute("disabled", "");
