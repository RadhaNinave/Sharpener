const form = document.querySelector('#addForm');
let itemList = document.querySelector('#items');
form.addEventListener('submit',saveToLocal);

       
    function saveToLocal(e){
        e.preventDefault();
        const Amount = document.querySelector('#amount').value;
        const description = document.querySelector('#des').value;
        const category = document.querySelector('#category').value;
        
        const obj = {
            Amount,
            description,
            category
        }
        localStorage.setItem(obj.category,JSON.stringify(obj));
        showNewUserOnScreen(obj);
    }
    window.addEventListener('DOMContentLoaded',() => {
        const localStorageObj = localStorage;
        const localStorageKeys = Object.keys(localStorageObj);
        for(let i=0;i<localStorageKeys.length;i++){
            const key = localStorageKeys[i];
            const userDetailsString = localStorageObj[key];
            const userDetailsObj = JSON.parse(userDetailsString);
            showNewUserOnScreen(userDetailsObj);
        }
    });

    function showNewUserOnScreen(user){
        document.querySelector('#amount').value = '';
        document.querySelector('#des').value = '';
        document.querySelector('#category').value = '';
        if(localStorage.getItem(user.category) !== null){
            removeUserFromScreen(user.category);
        }
        const ul = document.querySelector('#items');
        const childHTTML = `<li class="list-group-item" id=${user.category}> Amount: ${user.Amount}<br> Description : ${user.description} <br> Category : ${user.category}                            <span id=${user.description} hidden>${user.description}</span>
                            <button class="btn btn-danger btn-sm float-right delete" onclick=deleteUser('${user.category}')>Delete</button>
                            <button class="btn btn-danger btn-sm float-right delete" style="background-color:#f4f4f4; color:black" onclick=editUserDetails('${user.category}','${user.description}','${user.Amount}')>Edit</button>
                            </li>`;
        // console.log(user.email);
        // console.log(user.userName);
        // console.log(user.newItem);
        ul.innerHTML = ul.innerHTML+childHTTML;
    }
    function removeUserFromScreen(category){
        const parentNode = document.querySelector('#items');
        const childNodeToBeDeleted = document.getElementById(category); //Unable to user querySelector
        if(childNodeToBeDeleted != null){
            parentNode.removeChild(childNodeToBeDeleted)
        }
    }
    
    function deleteUser(cat){
        // console.log(emailId)
        localStorage.removeItem(category);
        removeUserFromScreen(cat);
    }
    
    function editUserDetails(cat, des, amt){
        document.querySelector('#category').value = cat;
        document.querySelector('#des').value = des;
        document.querySelector('#amount').value = amt;
        deleteUser(cat)
     }