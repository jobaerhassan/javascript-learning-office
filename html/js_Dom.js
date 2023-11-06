// //Dom == document object model
// const p = document.getElementById("demo")
// p.innerHTML = "hi"
// console.dir(p)
// const title = document.getElementById("title");
// title.innerHTML = "jobaer"
// console.dir(title)
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length ;i++) {
  console.log(x.elements[i].value)
}
document.getElementById("demo").innerHTML = text;