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
