

let aa = 123;
const bb = "1234";
console.log(aa);
console.log(bb);
console.log("------------------------------------")
var GetName = () => {
    return "大海"
}; //匿名函数
console.log(GetName());
console.log("------------------------------------")

const str = 'sfoodssss';
const subStr = 'foo';
console.log(str.includes(subStr)); //返回True 包含了 截取的字段
console.log("--------------------------------------")

const name = "tom";
const age = 28;
//模板字符串 注意符号`
console.log(`My cat is named ${name} and is ${age} years old.`);
console.log("--------------------------------------")
//结构数组
let [a, b, c, d] = [1, 2, 3, 4];
console.log(a);
console.log(b);
//结构对象
var luke = {
    occupation: 'jedi',
    father: 'anakin'
};
//可以有两种方式获取值
// var occupation = luke.occupation;
// var father = luke.father;
let {
    occupation,
    father
} = luke;
console.log(occupation);
console.log(father);

//方法可以有默认值 
function sumXy(x=12,y=13){return x+y};
console.log(sumXy());
console.log(sumXy(5,6))
console.log("--------------------------------------")

//可变参数
function logAugunment(...arr){
    for(let a of arr){
        console.log(a);
    }
}
logAugunment(12,"a","b","大海");
console.log("------------------------------------")

//...可以展开数组
let maxNum=Math.max(...[-1, 100, 9001, -32]); 
console.log(maxNum);
console.log(...["北京","蚬岗",123,456,"上海"]);