const quizDB=[
    {
        question:"Q1:What is the full form of HTML",
        a:"HyperText Markup Language",
        b:"HyperText Makeup Language",
        c:"Hey Markup Language",
        d:"None of the above",
        ans:"ans1"
    },
    {
        question:"Q2:What is the full form of CSS",
        a:"Cascads Style Sheets",
        b:"Cascading Style Scripts",
        c:"Cascading Style Sheets",
        d:"none of the above",
        ans:"ans3"
    },
    {
        question:"Q3:What is the full form pf HTTP?",
        a:"Hypertext Transfer Protocol",
        b:"Hypertext Test Protocol",
        c:"Hey Transfer Protocol",
        d:"None of the above",
        ans:"ans1"
    },
    {
        question:"Q4:What is the full form of JS",
        a:"Javascript",
        b:"javasuper",
        c:"justscript",
        d:"none of the above",
        ans:"ans1"
    },
]
const  question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showscore=document.querySelector('#showscore');
let questionCount=0;
let score=0;
const loadQuestion=()=>
{
    question.innerText=quizDB[questionCount].question;
    option1.innerText=quizDB[questionCount].a;
    option2.innerText=quizDB[questionCount].b;
    option3.innerText=quizDB[questionCount].c;
    option4.innerText=quizDB[questionCount].d;
}


loadQuestion();
const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
          if(curAnsElem.checked)
          {
          answer=curAnsElem.id;   
          }    
    })
    return answer;
}
const deselectAll=()=>
{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}
submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    // console.log(checkedAnswer);
    if(checkedAnswer ===quizDB[questionCount].ans)
    {
        score++;
    };
    questionCount++;
    deselectAll();
   if(questionCount<quizDB.length)
   {
     loadQuestion();
   }
   else
   {
     showscore.innerHTML= `
     <h3> you scored ${score}/${quizDB.length}</h3>
     <button class="btn" onclick="location.reload()">Play Again</button>
     `;
     showscore.classList.remove('scoreArea');
   }
})