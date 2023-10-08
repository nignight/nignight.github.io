//let myHeading = document.querySelector("p");  //变量------ let 或 var
// myHeading.textContent = "Hello world!";

// document.querySelector("html").addEventListener("click", function () {
//     alert("别戳我，我怕疼。");
//   });

let myImage=document.querySelector("img");   //图像切换1
// myImage.onclick=function(){
//   let mySrc=myImage.getAttribute("src");
//   if(mySrc==="images/zhuge.jpg"){
//     myImage.setAttribute("src","images/zhuge2.jpg");
//   }else{
//     myImage.setAttribute("src","images/zhuge.jpg");
//   }
// }
myImage.addEventListener("click",()=>{       //图像切换2
  let mySrc=myImage.getAttribute("src");
  if(mySrc==="images/zhuge.jpg"){
    myImage.setAttribute("src","images/zhuge2.jpg");
  }else{
    myImage.setAttribute("src","images/zhuge.jpg");
  }
})

let myButton=document.querySelector("button");
let myParagram=document.querySelector("p");

function serUserName(){
  let myName=prompt("请输入你的用户名:");
  localStorage.setItem("name",myName);
  myParagram.textContent="你好，用户"+myName;
}

if(!localStorage.getItem("name")){
  serUserName();
}else{
  let storeName=localStorage.getItem("name");
  myParagram.textContent="你好，用户"+storeName;
}

myButton.onclick=function(){
  serUserName();
}
