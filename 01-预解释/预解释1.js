/*
当浏览器开始解析js代码的时候，首先看当前运行环境(作用域)内带var和function，
带var的变量会提前声明(预解释)但是不会赋值，带function的会提前声明并赋值。
带var变量提前声明的时候并不会被赋值，但是有一个默认的nudefined值。当代码执行过后才会赋值。
堆栈内存：代码运行的环境在栈内存，基本数据类型都存在栈内存里, 引用类型(对象和function)在
堆里。
*/

console.log(num);
console.log(obj);
console.log(a);
console.log(sum);
var num = 12;
console.log(num);
var obj = {'name':'tianxi', age:30}; //对象类型
console.log(obj);
console.log(haha);
var a=function(){};
function sum(num1, num2){
    function haha(){

    };
    var total = 0;
    total = num1 + num2;
}

/*
上述代码在运行至console.log(haha);时会崩溃。
因为预解释(变量提升)将num,obj,以及a的声明都提升到代码最上层，所以打印num,obj,a都是undefined
预解释只关注等号左边的变量，并不关心右边是什么值,所以打印a也是undefined
sum是函数，预解释会提前声明sum，并为sum赋值，比如将sum赋值为0xfffcc2d，而0xfffcc2d地址内存储的
就是sum函数体的内容。所以打印sum会输出"Function sum"
而第二次打印num会输出12，因为此时num被赋值了
打印obj会输出obj内容，sum函数内部定义的函数haha以及变量total等只有在sum运行时才会做预解释，如果
sum不运行，则haha等不会被预解释，所以打印haha会出现 "haha is not defined"的异常。
*/