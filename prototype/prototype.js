
function Student(name ){
    this.name = name
    this.Output = function (){
        console.log("name is ", this.name)
    }
}
 
s1 = new Student("小明")

console.log("name is ", s1.name)
s1.Output()
var s2 = new Student("Han")
//创建了两个对象
console.log(  "s1 ==== s2", s1 === s2)
console.log(  "s1.Output ==== s2.Output", s1.Output === s2.Output)

//采用原型定义
function Boy(name){
    this.name = name
}

Boy.prototype.Output = function() {
    alert('name is ', this.name)
}

b1 = new Boy("b1")
b2 = new Boy("b2")
console.log("b1 === b2", b1 === b2)
console.log("b1.Output === b2.Output", b1.Output === b2.Output)

//原型继承
function PrimaryStudent (pros) {
    Student.call(this, pros)
    this.grade = pros.grade || 1
}

//定义一个空函数
function F(){

}

//将F的原型指向student的原型
F.prototype = Student.prototype
//将primarystudent的原型只指向新生成的F实例
PrimaryStudent.prototype = new F()
//将primarystudent的constructer回复为自己
PrimaryStudent.prototype.constructor = PrimaryStudent
// 继续在PrimaryStudent原型（就是new F()对象）上定义方法：
PrimaryStudent.prototype.getGrade = function(){
    return this.grade
}

//创建PrimaryStudent对象
var xiaoming = new PrimaryStudent(
    {
        name : '小明',
        grade : 2
    }
);

console.log("xiaoming nam is ", xiaoming.name)
console.log("xiaoming grade is ", xiaoming.grade)
//验证原型
console.log("xiaoming.__proto__ === PrimaryStudent.prototype ",xiaoming.__proto__ === PrimaryStudent.prototype)
console.log("xiaoming.__proto__.__proto__ === Student.prototype ",xiaoming.__proto__.__proto__ === Student.prototype)

//或者如下
console.log("Object.getPrototypeOf(xiaoming) === PrimaryStudent.prototype ",Object.getPrototypeOf(xiaoming) === PrimaryStudent.prototype)
console.log("Object.getPrototypeOf(xiaoming.__proto__) === Student.prototype ",Object.getPrototypeOf(xiaoming.__proto__) === Student.prototype)

// 验证继承关系:
console.log("xiaoming instanceof PrimaryStudent ",xiaoming instanceof PrimaryStudent); // true
console.log("xiaoming instanceof Student ", xiaoming instanceof Student); // true