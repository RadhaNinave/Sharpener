
var li=document.getElementsByTagName('li');
console.log(li);

//by applying classname
var items=document.getElementsByClassName('li');
console.log(items);
//Make the 3 rd element in the list have green background color

items[1].style.backgroundColor='green';

//Make all the elements in the list have bold color font
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold';
}
