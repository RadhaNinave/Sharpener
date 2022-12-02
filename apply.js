var obj={
    num:10
};
var add=function(a,b,c)
{
    return this.num+a+b+c;
}
var arr=[1,2,3];

console.log(add.apply(obj,arr));
