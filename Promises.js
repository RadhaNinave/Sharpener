var date=new Date();
var date=date.getSeconds();
const posts=[
    {
        title: 'Post One', body:'This is Post One',createdAt : date
    },
    {
        title: 'Post Two', body:'This is Post two',createdAt : date
    }
];
function getPosts()
{
    setTimeout( () =>{
        let output='';
        posts.forEach((post,index) =>
        {
            output+=`<li>${post.title}  created ${post.createdAt} seconds ago</li>`;
        });
        
        document.body.innerHTML=output;
       
       
    },1000);
}
function createPost(post)
{
    return new Promise((resolve,reject)=>
    {
    setTimeout( ()=> 
    {
        posts.push(post);
        const error=true;
        if(!error)
        {
            console.log("post created")
            resolve();
        }
        else{
            reject('Array is empty now');
        }
    },2000);
});
}

function deletePost()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
           

            if(posts.length>0)
            {
                const lastElement =posts.pop();
                resolve(lastElement);
            }
            else{
                reject('Array is empty now');
            }
        },1000);
    });
}
/*const promise1=Promise.resolve('hello world');
const promise2=10;
const promise3= new Promise((resolve,reject)=>

    setTimeout(resolve,1000,'goodbye')
);
Promise.all([promise1,promise2,promise3],getPosts)*/
/*.then(values=>
    console.log(values));*/
createPost({ title : 'Post Three', body : 'this is Post Three',createdAt :date},getPosts)
 .then(() => {
    getPosts()
    deletePost().then((deletedElement)=>{
        console.log(deletedElement)
        getPosts();
        deletePost().then(()=>{
            getPosts();
            deletePost().then(()=>{
                getPosts();
                deletePost().then(()=>{})
                .catch((err)=>{
                    console.log("inside catch block",err)
                })
            }).catch((err)=>{})
        }).catch((err)=>{})
    })
 })
         .catch(err=>console.log(err));

//createPost({ title : 'Post Three', body : 'this is Post Three',createdAt :date},deletePost);