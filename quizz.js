const questions = [
    {
        question: "What is the full form of html?",
        options: [
            {text: "hyper text markup language", correct: "true"},
            {text: "high text markup language", correct: "false"},
                {text: "hyper transform markup language", correct: "false"},
            {text: "hyper text make language", correct: "false"},
        ]  
    }, 

    {
        question: "What is the full form of CPU?",
        options: [
            {text: "central processing unit", correct: "true"},
            {text: "center project unit", correct: "false"},
                {text: "central power unit", correct: "false"},
            {text: "common processing unit", correct: "false"},
        ]  
    }, 

    {
        question: "What is the full form of css?",
        options: [
            {text: "cascading style  sheet", correct: "true"},
            {text: "common style sheet", correct: "false"},
                {text: "center style sheet", correct: "false"},
            {text: "cascading sheet style", correct: "false"},
        ]  
    }, 
 
]

const question = document.getElementById("question");
const options = document.getElementById("options");
const next = document.getElementById("next");
let currentQuestionIndex = 0;
let optionsIndex = 0;
let score = 0;

function show(){
    restate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionno = currentQuestionIndex + 1 ;
    question.innerHTML = questionno + "." + currentQuestion.question;


    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerHTML = option.text;
        button.classList.add("btn");
        options.appendChild(button);
        if(option.correct){
            button.dataset.correct = option.correct;
        }
        button.addEventListener("click", check);
        next.style.display = "block";
        
        
    });




}
function restate(){
    while(options.firstChild){
        options.removeChild(options.firstChild);
    }


}
next.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length-1){
        Handle();
    }
    else{
        Scored();
    }
});
function Scored(){
    restate();
    question.innerHTML = `your score is ${score} / ${questions.length}`;
    next.style.display = "none";
}


function Handle(){
    currentQuestionIndex++;
    optionsIndex++;
    show();


}


function check(e){
    const select = e.target;
    const right = select.dataset.correct === "true";
    
    if(right){
        select.classList.add("correct");
        score++;
    }
    else{
        select.classList.add("wrong");
    }

    Array.from(options.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    
}
show();

