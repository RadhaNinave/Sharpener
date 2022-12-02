var obj={
    num:3
};

var addToThis=function(a)
{
    return this.num+a;
};
console.log(addToThis.call(obj,3));