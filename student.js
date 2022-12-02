var Student={
    age:20
};
var printAge=function()
{
    return this.age;
}
var bound=printAge.bind(Student);
console.log(bound(this.age));