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


const courses = [
  {
    "course_name": "Web Development",
    "course_image": "asset/course/webdevelopment.png",
    "course_description": "Learn how to build modern, responsive websites and web applications using HTML, CSS, JavaScript, and frameworks like React and Vue.",
    "what_to_learn": [
      "HTML & CSS basics",
      "JavaScript programming",
      "Responsive web design",
      "Frontend frameworks (React, Vue)",
      "Backend development (Node.js, Express)"
    ]
  },
  {
    "course_name": "Data Science",
    "course_image": "https://www.linkpicture.com/q/data-science.jpg",
    "course_description": "Master the skills to analyze data, create machine learning models, and use data visualization techniques to derive insights.",
    "what_to_learn": [
      "Python programming for data analysis",
      "Statistics and probability",
      "Data visualization (Matplotlib, Seaborn)",
      "Machine learning (scikit-learn, TensorFlow)",
      "Data handling with Pandas and NumPy"
    ]
  },
  {
    "course_name": "Cybersecurity",
    "course_image": "https://www.linkpicture.com/q/cybersecurity.jpg",
    "course_description": "Learn the essential techniques for securing systems, preventing cyber attacks, and ensuring the integrity of data.",
    "what_to_learn": [
      "Network security fundamentals",
      "Ethical hacking",
      "Incident response and forensics",
      "Cryptography",
      "Security policies and governance"
    ]
  },
  {
    "course_name": "Cloud Computing",
    "course_image": "https://www.linkpicture.com/q/cloud-computing.jpg",
    "course_description": "Gain expertise in managing and deploying applications and services in the cloud using platforms like AWS, Azure, and Google Cloud.",
    "what_to_learn": [
      "Cloud architecture and deployment",
      "AWS and Azure services",
      "Serverless computing",
      "DevOps and CI/CD",
      "Cloud security"
    ]
  },
  {
    "course_name": "Mobile App Development",
    "course_image": "https://www.linkpicture.com/q/mobile-app-development.jpg",
    "course_description": "Learn to build mobile apps for Android and iOS platforms using programming languages like Kotlin, Swift, and frameworks like Flutter.",
    "what_to_learn": [
      "Android development with Kotlin",
      "iOS development with Swift",
      "Cross-platform development (Flutter, React Native)",
      "UI/UX design for mobile apps",
      "Mobile app deployment and testing"
    ]
  },
  {
    "course_name": "Artificial Intelligence (AI)",
    "course_image": "https://www.linkpicture.com/q/artificial-intelligence.jpg",
    "course_description": "Explore the world of AI, machine learning, and deep learning to create intelligent systems capable of solving complex problems.",
    "what_to_learn": [
      "Introduction to AI and ML",
      "Deep learning with neural networks",
      "Natural Language Processing (NLP)",
      "Computer vision and image recognition",
      "AI ethics and applications"
    ]
  },
   {
    "course_name": "Blockchain Development",
    "course_image": "https://your-image-hosting-service.com/blockchain-development.jpg",
    "course_description": "Learn how to build decentralized applications and smart contracts on blockchain platforms like Ethereum and Solana.",
    "what_to_learn": [
      "Blockchain fundamentals",
      "Smart contract development (Solidity)",
      "Decentralized app (DApp) development",
      "Ethereum, Hyperledger, and Solana",
      "Cryptography and consensus mechanisms"
    ]
  },
  {
    "course_name": "Frontend Development",
    "course_image": "https://your-image-hosting-service.com/frontend-development.jpg",
    "course_description": "Learn to build the visual and interactive parts of websites and web applications using HTML, CSS, JavaScript, and modern frameworks.",
    "what_to_learn": [
      "HTML & CSS for webpage structure and styling",
      "JavaScript programming for interactivity",
      "Responsive design with Bootstrap or Tailwind CSS",
      "Frontend frameworks like React, Vue.js, or Angular",
      "Version control with Git and GitHub"
    ]
  },
  {
    "course_name": "Backend Development",
    "course_image": "https://your-image-hosting-service.com/backend-development.jpg",
    "course_description": "Master server-side development to create APIs, handle databases, and implement logic for web applications.",
    "what_to_learn": [
      "Server-side languages (Node.js, Python, PHP)",
      "Working with databases (MySQL, MongoDB)",
      "API development (REST, GraphQL)",
      "Authentication and authorization",
      "Cloud deployment and server management"
    ]
  },
   {
    "course_name": "Python Programming",
    "course_image": "https://your-image-hosting-service.com/python-programming.jpg",
    "course_description": "Learn Python, one of the most versatile programming languages, widely used in web development, data science, machine learning, and more.",
    "what_to_learn": [
      "Python syntax and basic programming concepts",
      "Object-oriented programming (OOP)",
      "Data structures (lists, dictionaries, sets)",
      "Working with libraries like Pandas, NumPy, Matplotlib",
      "File handling, exceptions, and modules"
    ]
  },
  {
    "course_name": "Java Programming",
    "course_image": "https://your-image-hosting-service.com/java-programming.jpg",
    "course_description": "Master Java, a powerful object-oriented programming language used for building large-scale applications, Android apps, and more.",
    "what_to_learn": [
      "Java syntax and object-oriented programming (OOP)",
      "Data structures and algorithms in Java",
      "Multithreading and concurrency",
      "Building Java applications with JavaFX or Spring",
      "File I/O, networking, and database connections"
    ]
  },
  {
    "course_name": "JavaScript Programming",
    "course_image": "https://your-image-hosting-service.com/javascript-programming.jpg",
    "course_description": "Learn JavaScript, the most popular language for web development, to add interactivity and functionality to web pages and applications.",
    "what_to_learn": [
      "JavaScript syntax and basic programming concepts",
      "DOM manipulation for web interactions",
      "ES6+ features (Arrow functions, Promises, Async/Await)",
      "Event handling and API integration",
      "JavaScript frameworks like React, Vue, or Angular"
    ]
  },
  {
    "course_name": "C++ Programming",
    "course_image": "https://your-image-hosting-service.com/cplusplus-programming.jpg",
    "course_description": "Learn C++, a powerful and efficient programming language widely used in system/software development, game development, and competitive programming.",
    "what_to_learn": [
      "C++ syntax and programming basics",
      "Object-oriented programming with C++",
      "Memory management and pointers",
      "Data structures and algorithms",
      "Building software applications with C++"
    ]
  },
   {
    "course_name": "PHP Programming",
    "course_image": "https://your-image-hosting-service.com/php-programming.jpg",
    "course_description": "Learn PHP, a popular server-side scripting language used for developing dynamic websites and web applications.",
    "what_to_learn": [
      "PHP syntax and basic programming concepts",
      "Working with forms and user input",
      "Session management and cookies",
      "Database interaction with MySQL using PHP",
      "Building dynamic websites and web applications"
    ]
  },
  {
    "course_name": "Node.js Programming",
    "course_image": "https://your-image-hosting-service.com/nodejs-programming.jpg",
    "course_description": "Learn Node.js, a powerful JavaScript runtime environment that allows you to build fast and scalable server-side applications.",
    "what_to_learn": [
      "Node.js basics and asynchronous programming",
      "Building RESTful APIs with Express",
      "File system and streams in Node.js",
      "Database interaction with MongoDB and MySQL",
      "Authentication and session management",
      "Deploying Node.js applications to the cloud"
    ]
  },
  {
    "course_name": "Ruby on Rails Programming",
    "course_image": "https://your-image-hosting-service.com/ruby-on-rails-programming.jpg",
    "course_description": "Learn Ruby on Rails, a powerful and beginner-friendly framework for building modern, scalable web applications quickly.",
    "what_to_learn": [
      "Ruby programming language basics",
      "Rails framework fundamentals",
      "Model-View-Controller (MVC) architecture",
      "Database interaction with ActiveRecord",
      "Building RESTful APIs",
      "Testing and deploying Rails applications"
    ]
  }
]

function randnames(){
    var choose = [female,male];
    choose = choose[Math.floor(Math.random() * ((1) - 0 + 1)) + 0];
    var firstName = choose[Math.floor(Math.random() * ((choose.length - 1) - 0 + 1)) + 0]       
    return firstName+" "+ male[Math.floor(Math.random() * ((male.length - 1) - 0 + 1)) + 0];
}

const typeAni = (elem,set ={},ch) =>{
    var content = elem.innerText;
    var start = 0;
    elem.innerHTML = content[start++];
    
    addCursor(elem,set,ch);
    const typing = ()=>{

       if(start == content.length){
     clearInterval(run);
      clearInterval(main);
     return;
       }
       
       elem.innerText = elem.innerText + content[start++];   
       addCursor(elem,set,ch);
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


 function addCursor(elem,set,ch){
    let cursor = document.createElement("div");
    cursor.style.display = "inline-block";
    cursor.style.width = "2px";
    //cursor.style.height= (elem.offsetHeight*0.30)+"px";
   cursor.style.height= ch+"px";

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
 
 
const showCourse =(x)=>{
    let mc = ` <div id="single-course-image" style="background-image:url(${courses[x].course_image})"></div>
                        <h2>${courses[x].course_name}</h2>
                        <div id="details">
                      ${courses[x].course_description}
                        </div>
             <ul id="whattolearn">
                        `;
        courses[x].what_to_learn.forEach(item=>{
mc += `<li>${item}</li>`;
        }); 
                       
      mc +=  `</ul>
                        <a class="btn" style="width:150px" href="apply.html?course=${courses[x].course_name}">Apply now</a>
                        
        `;
    document.getElementById("modal-content").innerHTML =  mc;
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


var forms=document.getElementsByTagName('form');
for(let i = 0; i < forms.length; i++){
forms[i].onsubmit = async function(event){
event.preventDefault();
this.disabled = true;
const send = await fetch(this.action,{
    method:"POST",
    body: new FormData(this)
});
const res = await send.json();
this.disabled = false;
document.getElementById('error').scrollIntoView({ behavior: "smooth" });
if(!res.status){
    var err = "";
res.error.forEach((item)=>{
err += `<div class="error-msg">${item}</div>`;
});
document.getElementById('error').innerHTML = err;
}else{
   document.getElementById('error').innerHTML = `<div class="success-msg">${res.message}</div>`; 
}

console.log(res);
}

//
};
