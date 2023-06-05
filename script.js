window.promises = [new Promise(setTimeout((resolve,reject)=>{
	resolve("a");
},3000)),new Promise(setTimeout((resolve,reject)=>{
	resolve("b");
},1000)),new Promise(setTimeout((resolve,reject)=>{
	resolve("c");
},5000)),new Promise(setTimeout((resolve,reject)=>{
	resolve("d");
},4000)),new Promise(setTimeout((resolve,reject)=>{
	resolve("e");
},2000))];
let div=document.getElementById("output")
div.innerText=Promise.any(promises);
// Do not change the code above this
// add your promises to the array `promises`
