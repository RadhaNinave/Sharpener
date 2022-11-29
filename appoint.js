var form=document.getElementById('add-form');
//console.log(name);
form.addEventListener('submit',addItem );

function addItem(e)
{
    e.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('mail').value;
    console.log(name);
    console.log(email);
    var multiUser=[];
    var user = {
        name: name,
        email: email
        
      };
      multiUser.push(user);
      multiUser.push(JSON.parse(localStorage.getItem('multiUser')));
      console.log(multiUser);
    
    
      localStorage.setItem(user.email, JSON.stringify(multiUser));
      Object.keys(localStorage).forEach((key) => {



        stringifiedDetailsOfPeople = localStorage.getItem(user.email);
        
        detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
        
        
        
        addNewLineElement(detailsOfPeople);
        
        });


      

}
