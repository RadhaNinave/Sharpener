var itemList=document.querySelector('#items');
//parentNode
console.log(itemList.parentNode);
//parentElement
console.log(itemList.parentElement);
//childElements
console.log(itemList.childNodes);
//children
console.log(itemList.children);
//to access specific child in a items
console.log(itemList.children[1]);
//firstChild
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstChild)
itemList.firstElementChild.textContent='Hello item 1';
//lastChild
console.log(itemList.lastChild);
//lastElementchild
console.log(itemList.lastElementChild);
//siblings
console.log(itemList.nextSibling);
//nextelementSibling
console.log(itemList.nextElementSibling);
//previoussibling
console.log(itemList.previousSibling);
//previouselemnetsibling]
console.log(itemList.previousElementSibling);
//createElements
//create a div
var Div=document.createElement('div');
Div.className='hello';
//add id
Div.id='hello1';
//create textNodse
var newDivtext=document.createTextNode('Hello');
//append
Div.appendChild(newDivtext);

//set attribute
Div.setAttribute('title','hello World');


var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(Div);

container.insertBefore(Div,h1);




