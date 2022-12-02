let multiply=function(x)
{
    return function(y)
    {
        console.log(x*y);
    }
}
let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(3);