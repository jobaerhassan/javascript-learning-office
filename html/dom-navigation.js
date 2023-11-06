const p = document.getElementById('demo')
const way1 = p.innerHTML;
console.log(`way 1 is ${way1}`)
const way2 = p.childNodes[0].nodeValue;
console.log(way2)
const way3 = p.firstChild.nodeValue
console.log(way3)