## ES6
- 1. var let const  
  - let,const具有块级作用域，不具有变量提升    
    const 用于不能被重新赋值的变量
    ```
     let a=123;
     const b="1234";
     console.log(a);
     console.log(b); 
    ```
 - 2. 箭头函数   
   -  我们经常要给回调函数给一个父级的this   
     常用办法就是 var self = this 定义一个变量接住他  
     使用 箭头函数，this 将不会受到影响,可以直接用this调用父级的this
     ```
     var GetName=()=>{return "大海"}; //匿名函数
     console.log(GetName());
     ```

- 3. 字符串    
    ```
    includes:
        const string = 'food';
        const substring = 'foo';
        console.log(string.includes(substring));
    ```
    返回的是布尔值。
    string.repeat(str,count)
    如果 string.length < count 即插入str到count == string.length为止
- 4. 模板字符串       
  ```
   const name = 'Tiger'; 
   const age = 13;      
   console.log(`My cat is named ${name} and is ${age} years old.`);
  ```
 -  5.解构   
    -  结构数组：   
            ``` 
              let [a, b, c, d] = [1, 2, 3, 4];  
              console.log(a);     
              console.log(b);
            ``` 
-  结构对象：    
        ```
               //结构对象
                var luke = {occupation: 'jedi',father: 'anakin' };

               //可以有两种方式获取值
               // var occupation = luke.occupation;
               // var father = luke.father;
                let { occupation,father} = luke;
                console.log(occupation);
                console.log(father);
        ``` 
- 6.模块 
     暴露对象：      
     function sumThree(a, b, c) {return a + b + c;}   
        export { sumThree };   
     引入：        import { sumThree } from 'math/addition';
- 7.参数   
   es6支持设置默认值：  
   ```
      function sumXy(x=12,y=13){return x+y};
      console.log(sumXy());
      console.log(sumXy(5,6))
      console.log("--------------------------------------")
   ```
-  8.rest参数  
```
 //可变参数
function logAugunment(...arr){
    for(let a of arr){
        console.log(a);
    }
}
logAugunment(12,"a","b","大海");
```
- 9.展开操作 
     可以展示数组：       
```
//...可以展开数组
let maxNum=Math.max(...[-1, 100, 9001, -32]); 
console.log(maxNum);
console.log(...["北京","蚬岗",123,456,"上海"]);
```
- 10.类   

 创造类:    
  class Person {  
      constructor(name, age, gender) {  
         this.name   = name;          
         this.age    = age;    
         this.gender = gender;    
              }  
       incrementAge() {     
                this.age += 1;      
                }   
            }
- 11.Maps    可以理解成键值对  
        let map = new Map();   
       map.set('name', 'david');   
        map.get('name');    
        map.has('name');
- 12.Promises    远离回调地狱，可以转换成垂直代码 
-        func1(value1)         .then(func2)         .then(func3)         .then(func4)         .then(func5, value5 => {         });13.Generators     用同步的代码风格来写异步代码    function* genFunc() {        // (A)        console.log('First');        yield; //(B)        console.log('Second'); //(C)    }

---------------------

本文来自 蔡俊锋 的CSDN 博客 ，全文地址请点击：https://blog.csdn.net/caijunfen/article/details/81001752?utm_source=copy 