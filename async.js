console.log('person1 : show ticket');
console.log('person2 : show ticket');

const preMovie = async () =>{
    const promiseWifeBringingTickets=new Promise((resolve,reject) =>
    {
        setTimeout(() => resolve('ticket'),3000)
    });

let ticket= await promiseWifeBringingTickets;
const getPopcorn = new Promise((resolve,reject)=>resolve('popcorn'));

const getButter= new Promise((resolve,reject)=>resolve('butter'));

const getColdDricks = new Promise((resolve,reject)=>resolve('coldDrick'));

console.log('wife : i have the tickets');
console.log('husband : we should go in');
console.log('wife : no i am hungry');

let popcorn = await getPopcorn;
console.log('husband: i got dome popcorn');
console.log('husband: should we go in');
console.log('wife : i need butter on my popcorn');

let butter = await getButter;

console.log('husband: i got some butter');
console.log('husband: anything else darlong');
console.log('wife : yes i want colddrink also ');
console.log('husband : okk');

let coldDrink = await getColdDricks;

console.log('husband: lets go now i brought cold Drink')
console.log('wife : ohh thankyou my darling');
return ticket;
}

preMovie().then((m) => console.log(`person 3 : show ${m}`));

console.log('person4 : show ticket');
console.log('person 5 : show tickets');



