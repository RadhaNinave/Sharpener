class Student
{
    static count=0;
    constructor(name , age , phone_number, board_marks)
    {
        this.name=name;
        this.age=age;
        this.phone_number=phone_number;
        this.board_marks=board_marks;
        Student.count++;
    }
    Eligible()
    {
        if(this.board_marks>40)
        {
            console.log("Eligible")
        }
        else{
            console.log("not eligible")
        }
    }
    counting()
    {
        console.log("total student created "+Student.count);
    }
}
const st=new Student('radha','21','54321674','76');
const st2=new Student('pintu','23','5987621674','70');
const st6=new Student('radhika','20','54321674','76');
const st4=new Student('priya','23','5987621674','80');
const st5=new Student('sheetal','18','989880604','38');
console.log(st);
st.Eligible();
st.counting();