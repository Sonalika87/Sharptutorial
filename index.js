//console.dir(document);
//console.log(document.domain);
//console.log(document.url);
//console.log(document.title);
//document.title
//console.log(document.doctype);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textcontent
//console.log(document.forms);
//console.log(document.links);
// id selector
//console.log(document.getElementById("header-title"));
//headerTitle.textContent - "hello";
//console.log(headerTitle.innertext);
//headerTitle.innerHtml - <h3>Hello</h3>;
//headerTitle.style.borderbottom = "solid 3px red";
//by class name
var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent = "hello 2";
items[1].style.backgroundcolor = "yellow";
items[1].style.fontweight = "bold";
//items .style.background
for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundcolor = "#f4f4f4";
}
/*var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent = "hello 2";
items[1].style.backgroundcolor = "yellow";
items[1].style.fontweight = "bold";
//items .style.background
for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundcolor = "#f4f4f4";
}
// query selector
var header = document.querySelector("");
header.style.borderBottom = "solid 5px red";

var input = docume.querySelector("input");
input.value = "hello world";
var submit = document.querySelector("input[type=submit]");
submit.value = "SEND";
var item = document.querySelector(".list-group-item");
item.stye.color = "red";
var lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "blue";
// query selector all
var titles = document.querySelector(".title");
console.log(titles);
titles[0].textContent = "hello";

var add = document.querySelectorAll("li:nth-child(odd)");
for (var i = 0; i < onloadeddata.length; i++) {
  odd[i].style.backgroundcolor = "blue";
}
//traversing the DOM
var itemlist = document.querySelector("#item");
//parentnode
console.log(itemList.parentnode);
itemlist.parentnode.style.background = "#f4f4f4";
console.log(iteList.parentNode.parentNode);
//parentElement
console.log(itemList.parentElement);
itemlist.parentElement.style.background = "#f4f4f4";
console.log(iteList.parentElement.parentElement);
console.log(itemList.children);
console.log(itemlist
//ChildNode
var itemList = document.querySelector("#item");
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundcolor-"yellow";
//first child
console.log(itemList.firstChild);
//firstElementchild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent-'Hello 1';
//last child
console.log(itemList.lastChild)
//lastlementhild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello4';*/
//next sibling
var itemList = document.querySelector("#item");
console.log(itemList.nextSibling);
console.log(itemList.lastElementSibling);
//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";
