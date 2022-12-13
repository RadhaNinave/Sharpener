
        
        function saveToLocalStorage(event){
          event.preventDefault();
          const amount = event.target.amount.value;
          const des = event.target.des.value;
          const category = event.target.category.value;

        const my_object = {
          amount,
          des,
          category
        }
         
        axios.post("https://crudcrud.com/api/ba79a78e93234c79915ff2899bb63eae/ExpenseData",my_object)
          .then((res) =>{
             showOnScreen(res.data)
            console.log(res)
          } )
          .catch((err) => console.log(err));

        //localStorage.setItem(my_object.email, JSON.stringify(my_object))
        //showOnScreen(my_object);
       }

       window.addEventListener("DOMContentLoaded", () => {

                axios.get("https://crudcrud.com/api/ba79a78e93234c79915ff2899bb63eae/ExpenseData")
                .then((res) => {
                    console.log(res);
                    for(let i=0; i<res.data.length; i++){
                       showOnScreen(res.data[i]);
                    }
                }) 
            })

             function showOnScreen(user){
                document.getElementById('amount').value = '';
                document.getElementById('des').value = '';
                document.getElementById('category').value ='';
                // console.log(localStorage.getItem(user.emailId))
                if(localStorage.getItem(user.category) !== null){
                    removeUserFromScreen(user.category)
                }
           
       
        var parentNode = document.getElementById('items');
        var child = `<li id=${user._id}> ${user.amount} - ${user.des} - ${user.category}  <br> <button onclick=deleteUser('${user._id}') > Delete User </button>
            <button onclick=editUserDetails('${user.des}','${user.amount}','${user.category}','${user._id}')>Edit User </button></li>`
       
        parentNode.innerHTML = parentNode.innerHTML + child;
       }

       axios.put(`https://crudcrud.com/api/ba79a78e93234c79915ff2899bb63eae/ExpenseData/${userId}`)
           .then((res) => {
               editUserDetails(des, amount, category, userId);
           })
           .catch((err) => {
            console.log(err);
           } )

       function editUserDetails(des, amount, category, userId){
        
        document.getElementById('des').value = des;
        document.getElementById('amount').value = amount;
        document.getElementById('category').value =category;

          deleteUser(userId);
       }   

       function deleteUser(userId){
           axios.delete(`https://crudcrud.com/api/ba79a78e93234c79915ff2899bb63eae/ExpenseData/${userId}`)
           .then((res) => {
               removeUserFromScreen(userId);
           })
           .catch((err) => {
               console.log(err);
           })
        // console.log(emailId);
        // localStorage.removeItem(emailId);
        // removeUserFromScreen(emailId);
       }
       

       function removeUserFromScreen(userId){
           const parentNode = document.getElementById('items');
           const childNodeToBeDelete = document.getElementById(userId);

           if(childNodeToBeDelete){
            parentNode.removeChild(childNodeToBeDelete);

           }
           
       }
       
   
