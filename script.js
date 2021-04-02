var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");

var pages = [
  {
    title:"Home",
    content:"Home",
  },
  {
    title:"About",
    content:"About",
  },
  {
    title:"Interact",
    content:"Interact",
  }
  
]

var num=0;

function counterAdd(clicked){
  num= num +1;
};

for (i=0; i<pages.length; i++){
  createPage(pages[i]);
}

function createPage(pg){
  var button = document.createElement("button")
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.title);
  })
  button.innerHTML=pg.title;
  nav.appendChild(button);
}

function pageTitle(titles){
    display.innerHTML="";
    var headers = document.createElement("h1");
    headers.innerHTML=titles;
    display.appendChild(headers);
}

function countButton(){
  var buttons = document.createElement("button")
  buttons.innerHTML="Click to add 1";
  var counter = document.createElement("div");
  counter.innerHTML="Counter: 0";
  display.appendChild(counter);
  buttons.addEventListener("click", function(){
      counterAdd(true);
      counter.innerHTML="Counter: " + num;
  }) 
  display.appendChild(buttons);
}
 
function contentWrite(stuff, pg){
  if(pg=="About"){
    pageTitle(pages[1].content);
    var name = document.createElement("h3");
    name.innerHTML="Ian Lotts";
    display.appendChild(name);
  }else if(pg!=="Interact"){
    pageTitle(pages[0].content);
  }else{
    pageTitle(pages[2].content);
    countButton(true);
  }
}

contentWrite(pages[0].content);