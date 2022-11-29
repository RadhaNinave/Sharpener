var form=document.getElementById('my-form');
//console.log(name);
form.addEventListener('submit',addItem );

function addItem(e)
{
    e.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
   var obj={
    name1:name,
    email1:email

   };
   let obj_serialized=[];
    obj_serialized=JSON.stringify(obj);
   localStorage.setItem('myObj',obj_serialized);
   
}