const form = document.querySelector('#addForm');
let itemList = document.querySelector('#items');
form.addEventListener('submit',saveToLocal);

function saveToLocal(e){
    e.preventDefault();
    //const newItem = document.querySelector('#item').value;
    const userName = document.querySelector('#user').value;
    const email = document.querySelector('#email').value;
    const obj = {
       // newItem,
       userName,
        email
    }
   // localStorage.setItem(obj.email,JSON.stringify(obj));
   axios.post("https://crudcrud.com/api/db6816ee0baa49d2b4217acf4c1c6f84/appointmentData",obj)
   .then(resolve =>{
    console.log(resolve)
   })
   .catch(err =>
    {
      console.log(err)
    })
    showNewUserOnScreen(obj);
}

/*window.addEventListener('DOMContentLoaded',() => {
    const localStorageObj = localStorage;
    const localStorageKeys = Object.keys(localStorageObj);
    for(let i=0;i<localStorageKeys.length;i++){
        const key = localStorageKeys[i];
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj);
    }
});*/

function showNewUserOnScreen(user){
    //document.querySelector('#item').value = '';
    document.querySelector('#user').value = '';
    document.querySelector('#email').value = '';
    if(localStorage.getItem(user.email) !== null){
        removeUserFromScreen(user.email);
    }
    const ul = document.querySelector('#items');
    const childHTTML = `<li class="list-group-item" id=${user.email}> <br>User: ${user.userName} email id :${user.email}
                        <span id=${user.userName} hidden>${user.use}</span>
                        <span id=${user.email} hidden>${user.email}</span>
                        <button class="btn btn-danger btn-sm float-right delete" onclick=deleteUser('${user.email}')>Delete</button>                        
                        <button class="btn btn-danger btn-sm float-right delete" style="background-color:#f4f4f4; color:black" onclick=editUserDetails('${user.email}','${user.userName}')>Edit</button>
                        </li>`;
    // console.log(user.email);
    // console.log(user.userName);
    // console.log(user.newItem);
    ul.innerHTML = ul.innerHTML+childHTTML;
}

function removeUserFromScreen(emailId){
    const parentNode = document.querySelector('#items');
    const childNodeToBeDeleted = document.getElementById(emailId); //Unable to user querySelector
    if(childNodeToBeDeleted != null){
        parentNode.removeChild(childNodeToBeDeleted)
    }
}

function deleteUser(emailId){
    // console.log(emailId)
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);
}

function editUserDetails(emailId, name, newItem){
    document.querySelector('#email').value = emailId;
    document.querySelector('#user').value = name;
   // document.querySelector('#item').value = newItem;
    deleteUser(emailId)
 }



// document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('user').addEventListener('click', saveToLocal);
document.getElementById('email').addEventListener('click', saveToLocal);
//document.getElementById('update').addEventListener('click', updateTodo);
//document.getElementById('delete').addEventListener('click', removeTodo);