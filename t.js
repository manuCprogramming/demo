// console.log("hi");

// const my="manu t ".trim()
// console.log(my);

// const url="https://manu.com/manu%20com";
// console.log(url.replace('%20','-'));

// console.log( url.includes('manu'));

// const s="manu-mari-jyoti-ravi-komal-pratiksha";
// console.log(s.split('-'));

// const addTwo=(num1,num2)=> num1+num2
// console.log(addTwo(5,7));

//Immediately invloked function expression (IIFE)

// solution to the global pollution 
// (function connecting()

// {
//     console.log("hello from iife");
// })
// ();
// //ending the function

// (function connecting()

// {
//     console.log("hello from iife");
// })
// ();
// //above is the named iifi

// ((name)=>{
//     console.log("hi manuu "+name);
    
// })('manu');

//immeadiately invloked function expressions;
//simple iife

// 60>50 ?console.log("lesss than"):console.log("hi");
// let t;
// for( t=0;t<6;t++)
// {
//     console.log(t);
// }
// // console.log(t);
// const map=new Map()
// map.set("manu","manu");
// map.set("jyoti","jyoti");
// map.set("ravi","ravi");
// console.log(map);
// for(const [k,v] of map)
// {
//     console.log(v);
    
// }
// const obj={
//     js:"javascript",
//     rb:"ruby",
//     cpp:"C++"

// }
// for (const key in obj) {
   
//     console.log(`value of ${key} is ${obj[key]}`);
    
   
// }

// const coding=["js","ruby","java","python","cpp"];

// // coding.forEach(function (item)
// // {})
// // coding.forEach(function (val){
// //     console.log(val);
    
// // })

// coding.forEach( (val)=>{
//     console.log(val);
    
// })
// function print(item)
// {
//     console.log(item);
// }
// coding.forEach(print)

// const oblist=[{name:"manu"},
//     {name:"mari"},
//     {name:"pratiksha"},
//     {name:"trimo"}
// ]

// oblist.forEach((ob)=>

// {
//     console.log(ob.name);


// }
// )
// const mynum=[1,2,3,4,5,6,7,8,9];
// const newvalue=mynum.filter((n)=> n>4);
// console.log(newvalue);


// const myarr=[]

// mynum.forEach((n)=>
// {
// if(n>4)
// {
//     myarr.push(n);
// }
// }
// )
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
const newbooks=books.filter((bk)=>
{
    return bk.genre==="Non-Fiction" && bk.edition>2005;
})
console.log(newbooks);

const arr2=[1,2,3,4,5,6,78,9]
const added_10_array=arr2.map((n)=> n+10)
console.log(arr2);