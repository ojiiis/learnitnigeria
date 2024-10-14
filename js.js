function get(key){
const url = window.location.search;
const params = new URLSearchParams(url);
const paramValue = params.get(key);
return paramValue;
}


const female = [
    "Abiola",          // Born in wealth
    "Ayomide",         // My joy has come
    "Bola",            // To be wealthy
    "Folake",          // To be pampered with wealth
    "Toluwa",          // To God be the glory
    "Olamide",         // My wealth has come
    "Funke",           // To take care of or to pamper
    "Adaeze",          // Daughter of a king
    "Chiamaka",        // God is beautiful
    "Uchechi",         // God's will
    "Ifeyinwa",       // Nothing is impossible
    "Ngozi",           // Blessing
    "Ifeoma",         // Good thing
    "Chinonso",       // God is near
    "Amina",           // Trustworthy
    "Fatima",          // Captivating
    "Zainab",          // Father's precious jewel
    "Sadiya",          // Lucky
    "Maryam",          // Beloved
    "Halima",          // Gentle or mild
    "Rukayya",         // A name of a wife of the Prophet Muhammad
    "Yetunde",         // Mother has returned (after rebirth)
    "Olufunke",        // God has given me a caring person
    "Damilola",        // God has given me wealth
    "Chinwendu",       // God’s spirit is with me
    "Efe",             // Wealth or prosperity
    "Nkechi",          // What God has given
    "Temitope",        // Mine is gratitude
    "Jumoke",          // One who is pampered
    "Opeoluwa",        // God's blessing
    "Fiyinfoluwa",     // Help me to appreciate God
    "Toyin",           // To be joyful
    "Temiloluwa"       // My wealth belongs to God
];

const male = [
    "Adeola",          // Crown of wealth
    "Chijioke",        // God gives talent
    "Emeka",           // Great deeds
    "Ifeanyi",         // Nothing is impossible with God
    "Obinna",          // Father's heart
    "Nnamdi",          // My father is alive
    "Tunde",           // Returns again
    "Oluwaseun",       // God has done well
    "Chukwudi",        // God is alive
    "Ugochukwu",       // God's glory
    "Ayodele",         // Joy has come home
    "Ikenna",          // The power of the father
    "Oghenekevwe",     // The world knows
    "Damilare",        // God has redeemed me
    "Chinonso",        // God is near
    "Ifechukwu",       // God's light
    "Kelechi",         // Thank God
    "Uchechukwu",      // God's will
    "Obi",             // Heart
    "Nedum",           // The good one
    "Onyeka",          // Who is greater than God?
    "Temitope",        // Mine is gratitude
    "Okechukwu",       // God's strength
    "Chima",           // God knows
    "Chukwuemeka",     // God has done well
    "Emmanuel",        // God is with us
    "Tope",            // To God be the glory
    "Olumide",         // My wealth has come
    "Ayomide"          // My joy has come
];

function randnames(){
    var choose = [female,male];
    choose = choose[Math.floor(Math.random() * ((1) - 0 + 1)) + 0];
    var firstName = choose[Math.floor(Math.random() * ((choose.length - 1) - 0 + 1)) + 0]       
    return firstName+" "+ male[Math.floor(Math.random() * ((male.length - 1) - 0 + 1)) + 0];
}
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




