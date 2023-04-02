// alert("hello mam")
// document.getElementById("h").innerHTML="azeem";

// document.write("hello")
// console.log("hello");
// let age=15;
// let hasvoter='no';
// if(age>=14 && hasvoter=='yes'){
//     console.log("you can vote");
// }else{
//     console.log("you can not vote");
// }
// let input='';
// switch(input){
//     case 1: {
//         console.log("continue....");
//         break;
//     }
//     case "y": {
//         console.log("continue....");
//         break;
//     }
//     case "yes": {
//         console.log("continue....");
//         break;
//     }
//     case 0: {
//         console.log("end....");
//         break;
//     }  case "n": {
//         console.log("end....");
//         break;
//     }  case "no": {
//         console.log("end....");
//         break;
       
//     }
//     default:
//         console.log("wrong choice");
// }

// let count=1;
// while(count<=10){
//     console.log("tech");
//     count++;
// }
// let count=1;
// let sum=0;
// while(count<=100){
//     if(count%2==0){
//         sum=sum+count;
        
//     }
//     count++;
// }
// console.log(sum);

// let count=1;
// do{
//     console.log('tech');
//     count++;
// }while(count<=10);
// let count=1;
// for(count=1;count<=10;count++){
//     console.log("tech");
// }
//break ,continue,and nested loop

// let count=1;
// for(count=1;count<=10;count++){
//     if(count==5){
//         break; //is condition ke baad aage nhi jayega
        //   continue;  is condition ke baad ise nhi print krega baaki sb ko krega


    // }
    // document.write("tech");   //br are working
    // document.write('<br>');
    // console.log("tech");   // br are not working
    // console.log('<br>');
// }
// let count=1;
//  outer:for(count=1;count<=10;count++){
//     document.write(count);   //br are working
//     document.write('<br>');
// for(let count2=1;count2<3;count2++){
//     if(count==3){
//         break outer;
//     }
//     document.write("tech");   //br are working
//     document.write('<br>');
// }

// }

// let age=prompt("enter your age");
// if(age != null){
//     document.write(`your Age is ${age}`);
// }else{
//     document.write('plz fill it');
// }
// let response=confirm('your file is deleted,your file is not deleted');
// if(response){
// document.write('your file is deleted');}

// else{
// document.write('your file is not deleted');}

// let type=1;
// console.log(typeof type);

// let newtype=Boolean(type);
// console.log(newtype);
// console.log(typeof newtype);

// let str="ring";
// let str1="ring";
// // let greet= "namaste"+str;
// // console.log(str.length);
// if(str==str1){
//     console.log("equal");
// }else{
// console.log("not equal");
// }
// console.log(str+str1);

// let str="ring";
// let str1="ring";
// str3=str.concat(" " ,str1);

// console.log(str3);
 let str="i am learning javascript";


//  str1=str.indexOf("am");
// str1=str.lastIndexOf("ing");
// str1=str.substring(2,6)
// str1=str.substr(2,6)
// let str1=str.trim();//trimStart //trimEnd;
//  console.log(str);
//  console.log(str1)

// str1=str.toLowerCase();
// str2=str.toUpperCase();
// str3=str.replace('learning','completing');
// str4=str.includes('learning');

// console.log(str4)
// console.log(str2)
// console.log(str1)
// console.log(str3)

// let book=["maths","phy","bio","chem"];
// let book="tum";
// book.push("hindi");
// book.unshift("hindi");
// book.pop("bio")
// book.shift("maths");

// console.log(book.length);
// book.splice(1,2);
// let book2=book.indexOf("bio")

// console.log(Array.isArray(book));

// let text= "this is a random text";
// let word= text.split('s');      //split(" ");
// console.log(word);

// let book=["maths","phy","bio","chem"];
// let words=book.join('-');
// console.log(words);

// let book=["maths","phy","bio","chem"];
// let book2=["hindi","js"];
// let book3=["history","urdu"];
// let cat=book.concat(book2,book3);
// console.log(cat);

// let mart=[["math",500],["bio",["chem",900]],["phy",400]];
// let mart1=mart[1][1][0];
// console.log(mart1);

//  let book=["maths","phy","bio","chem"];

// for(let i=0;i<book.length;i++){
//     console.log(`element ${i} is ${book[i]} \n` )
// }

// book.forEach(fav);

// function fav(value){
//     console.log(value);
// }
// function multiply(num){
// for(let i=1;i<=10;i++){
//     console.log(`${num} X ${i}= ${num*i}`)
// }
// }
// multiply(5);
// console.log("hello")
// multiply(3);

// function add(num1,num2){
//     console.log(num1+num2)
// }

// add(8,9);

// function add(){
//     if(arguments.length==0){
// console.log(arguments);
// }
// else{
//     let sum=0;
//     for(let i = 0;i<arguments.length;i++){
//       sum=sum+arguments[i];
//     }
//     console.log(sum);
// }
// }
// add(4,5,6)

//return function
// function add(a,b){
//     let d=a+b;           //multiple value [2,4,5]
//     return d;
// }
// let c =add(5,6);
// console.log(c);

// function compare(a,b){
//     if(a>b){
//         return 1;
//     }
//     else if(b>a){
//         return -1;
//     }
//     else{
//         return 0 
//     }
// }
// let d =compare(5,7)
// console.log(d)

//local or global variable

// let a=10;  // global variable
// function show(){
//     let b=10;      // local variable
//     console.log(b)
// }

// Anonymous function  jis function ka naam nhi hota hai

// let show=function(){
//     console.log("hello");
// }
// show();

// setTimeout(function(){
//     console.log("hello");
// },3000);

//invoved function // jao function turant banke turant assiquite ho jate hai
//wahi banega aur assicute bhi hoga

// (function(){
//     console.log("hello");
//     alert("hello world")
// })();

// object method

// let person={
// firstName: "azeem",
// lastName:"aslam"
// };
// person.age=21;   /// one more add krna
// delete person.lastName;    // delete krna
// console.log(person['firstName']);
// console.log(person);
// console.log('height' in person);   //true or false
// for(let vat in person){    //loop chlana
//     console.log(vat+" :"+person[vat]);
// }
 
// let person={
//     firstName: "azeem",
//     lastName:"aslam",
//     sayHello
//    // :function//method 3
//     (){     
//             console.log("hello may");
//          }
//     };
//     person.age=21;
//     person.sayHello();
//method 1
    // person.sayHello=function(){
    //     console.log("hello");
    // }
    // person.sayHello();

    //method 2
    // function greet(){
    //     console.log("hello it");
    // }
    // person.sayHello=greet;
    // person.sayHello();

// use of this in object

// let person={
//     firstName:"wahid",
//     lastName:"abdul",
//     sayHello(){
//         console.log( "i am "+this.firstName +" AND I HAVE A "+car.brand+ "car")
//     }
// };
// let car={
//     brand :'tata',
//     model:'safari'
// }
// person.sayHello();

//random number

// let x =Math.floor(Math.random() * 10) + 1;
// console.log(x);

// function get(min,max){
//     let x =Math.floor(Math.random() * (max-min +1)+min);
//     return x;
// }
// console.log(get(10,20));

// date management

// let x= new Date(2024,11,14,10,23,33,7);
// let x= new Date();
// let y=x.setFullYear(2020);
// let y =new Date();
// y.setDate(x.getDate()+50);
// console.log(x);
// console.log(y);
// if(x>y){
// console.log("it is past date")
// }
// else if(y>x){
// console.log("it is future")
// }
// else{
//     console.log("it is equal")
// }

// console.log(y);

// new keyword

//  var person= new Object();   
//getter setter

// let person ={
// firstName : "tech",
// lastName:"ajit", 
// get getname(){
//    return this.firstName.toUpperCase();
// },
// set setname(n){
//  return this.firstName=n.toUpperCase();
// }


// }
// person.setname="little";
// console.log(person);

//constructor

// function Student(first,last,age){
//     this.firstName=first;
//     this.LastName=last;
//     this.age=age;

// }
//prototype-it is use to add one or many element in constructor

// Student.prototype.nationality="indian";
// var Student1=new Student("ajit","vishwas",24);
// Student1.nationality="indian";
// Student1.name = function(){
//    return this.firstName+" "+this.LastName;
// }
// console.log(Student1);
// console.log(Student1.name);

//api or json may use hota hai
//its use for object to object
//nested object

// var user={
//     id:101,
//     email:"email@gmail.com",
//     personalInfo:{
//         name:"ajit",
//         last:"yash"
//     ,
//     address:{
//         street:"hdsjhbdhjbd",
//         city:"uttar pradesh",
//         country:"india"

//     }
// }}
// console.log(user.personalInfo.address.country);

//hoisting
//lift or pull
//only it can lift declaration part
//it can study all cod then it can check wether all the declaration are call correct way 
// ,in other case we can move to on the top of that....


// hello(); //declaration or call
// function hello(){
//     console.log("hello");
// }


var x;
// x=7;
console.log(x);
//var x;            //lift to top of declaration
