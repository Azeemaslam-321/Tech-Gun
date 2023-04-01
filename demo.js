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

function add(){
    if(arguments.length==0){
console.log(arguments);
}
else{
    let sum=0;
    for(let i =0;i<arguments.length;i++){
      sum=sum+arguments[i];
    }
    console.log(sum);
}
}
add(4,5,6)





