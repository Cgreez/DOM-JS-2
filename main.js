
//1
let myBody = document.getElementsByTagName('body')[0]
console.log(myBody);

//2
console.log(myBody.firstElementChild);

//3
console.log(myBody.lastElementChild);

//4

let exo4 = document.getElementsByTagName('div')[0]

console.log(exo4.childNodes);
// children montre les élements dans JS, childNodes permet de voir les nodes, text et element


//5
/* let li = document.getElementsByTagName('li')[0]
console.log(li);
console.log(li.nextElementSibling);
 */


 //6
let li = document.getElementsByTagName('li')[1]
console.log(li);
console.log(li.previousElementSibling);