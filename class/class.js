class Student{
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log("name is ", this.name)
    }
}

var s1 = new Student("World")
s1.hello()

class PrimaryStudent extends Student{
    constructor(name, grade){
        super(name);
        this.grade = grade;
    }

    myGrade(){
        console.log("I am at grade ", this.grade)
    }
}

var ps2 = new PrimaryStudent('Lilei', 2)
ps2.myGrade()