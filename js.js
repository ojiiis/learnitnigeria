const typeAni = (elem,wait) =>{
    var content = elem.innerText;
    //elem.innerHTML = "";
    var start = 0;
    elem.innerHTML = content[start++];
    addCursor(elem);
    const typing = ()=>{
       if(start == content.length){
       start = 0
       elem.innerText = "";
       addCursor(elem);
       }
       
       elem.innerText = elem.innerText + content[start++];   
       addCursor(elem);
    }
    
    
    var run = setInterval(typing,200);
    var cursorOn = false;
    setInterval(function(){
        if(cursorOn == false){
            clearInterval(run);
            cursorOn = true;
        }else{
           run = setInterval(typing,200);
           cursorOn = false;
        }
    },wait);
}



    
 function addCursor(elem){
    let cursor = document.createElement("div");
    cursor.style.display = "inline-block";
    cursor.style.width = "2px";
    cursor.style.height= (elem.offsetHeight*0.52)+"px";
    cursor.style.background = "black";
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