var form=document.getElementById('my-form');
//console.log(name);
form.addEventListener('submit',addItem );

function addItem(e)
{
    e.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    console.log(name);
    console.log(email);
    localStorage.setItem('name',name);
localStorage.setItem('email',email);
   
}
