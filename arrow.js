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
   
      setPlacementAge(minAge)
      {
        console.log(this);
        return (minMarks)=>
        {
            console.log('inside',this)
            {
                if(this.board_marks>minMarks && this.age>minAge)
                {
                    console.log(this.name+" Ready for placement");
                }
                else
                {
                    console.log("not ready");
                }
            }
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
st.setPlacementAge(40);
st.counting();