const numa = document.querySelector(".numa");
const numb = document.querySelector(".numb");
const numc = document.querySelector(".numc");
const numd = document.querySelector(".numd");
const nume = document.querySelector(".nume");
const numf = document.querySelector(".numf");
const numg = document.querySelector(".numg");
const numh = document.querySelector(".numh");
const button1 = document.querySelector(".btn1")
const numi = document.querySelector(".numi");
const numj = document.querySelector(".numj");
const numk = document.querySelector(".numk");
const numl = document.querySelector(".numl");
const numm = document.querySelector(".numm");
const numn = document.querySelector(".numn");
const numo = document.querySelector(".numo");
const nump = document.querySelector(".nump");
const button2 = document.querySelector(".btn2");
const h2 = document.querySelector("h2");


function setArr() {
let arr1 = [];
let arr2 = [];
 let i = 0;
 while ( i < 8 ) {
 let number = Math.floor(Math.random() * 10);
 arr1.push(number); 
 i++;
 }
numa.innerText = arr1[0];
numb.innerText = arr1[1]; 
numc.innerText = arr1[2]; 
numd.innerText = arr1[3]; 
nume.innerText = arr1[4]; 
numf.innerText = arr1[5]; 
numg.innerText = arr1[6]; 
numh.innerText = arr1[7];  

let a = 0;
while ( a < 8 ) {
    let number2 = Math.floor(Math.random() * 10);
    arr2.push(number2); 
    a++;
    }
   numi.innerText = arr2[0];
   numj.innerText = arr2[1]; 
   numk.innerText = arr2[2]; 
   numl.innerText = arr2[3]; 
   numm.innerText = arr2[4]; 
   numn.innerText = arr2[5]; 
   numo.innerText = arr2[6]; 
   nump.innerText = arr2[7];  


let newArr1 = arr1.filter(x => arr2.includes(x));
h2.innerText = `공통되는 숫자 개수 ${newArr1.length}`;

}





button1.addEventListener("click" , setArr);
