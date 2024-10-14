const typeAni = (elem,set ={}) =>{
    var content = elem.innerText;
    var start = 0;
    elem.innerHTML = content[start++];
    addCursor(elem,set);
    const typing = ()=>{

       if(start == content.length){
     clearInterval(run);
      clearInterval(main);
     return;
       }
       
       elem.innerText = elem.innerText + content[start++];   
       addCursor(elem,set);
    }
    

    var run = setInterval(typing,200);
    var cursorOn = false;
    var main = setInterval(function(){
        if(cursorOn == false){
            clearInterval(run);
            cursorOn = true;
        }else{
           run = setInterval(typing,200);
           cursorOn = false;
        }
    },set.delay);
}



    
 function addCursor(elem,set){
    let cursor = document.createElement("div");
    cursor.style.display = "inline-block";
    cursor.style.width = "2px";
    cursor.style.height= (elem.offsetHeight*0.52)+"px";
    cursor.style.background = set.cursorColor;
    cursor.style.lineHeight = "0.01";
    
    elem.appendChild(cursor);
    setInterval(function(){
        if(cursor.style.display == "inline-block"){
            cursor.style.display = "none";
        }else{
            cursor.style.display = "inline-block";
        }
    },500);
 }
 
 
const showCourse =()=>{
    document.getElementById("single-course-details").style.display ="flex";
}

const hideCourse =()=>{
    document.getElementById("single-course-details").style.display ="none";
}


var appliedList = [
    {
        name:"Aliu Jamiu",
        pic:""
    },
     {
        name:"Gbadamosi Joshua",
        pic:""
    },
    {
        name:"Gabrel Musa",
        pic:""
    }
];

var cIndex = 0;
setInterval(function(){
 if(cIndex == appliedList.length){
cIndex = 0;
 }
 var text = `<div id="applied-img" style="background-image:url(${appliedList[cIndex].pic})"></div>
         <div id="applied-details">
            <b>${appliedList[cIndex].name}</b>
            <div>Just applied for web development course.</div>
         </div>`;

 if(document.getElementById("applied-alert")){
document.getElementById("applied-alert").style.animation = "toRight 3s;"
    setTimeout(function(){
        document.getElementById("applied-alert").remove();
    },2000);
 }
 let a = document.createElement('div');
a.id = "applied-alert";
a.innerHTML = text;
document.body.appendChild(a);
a.style.animation = "fromBottom 4s;";
cIndex++;
},4000);