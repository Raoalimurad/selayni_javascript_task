let questions = [
    {
      question: "Q1: What is the full form of 'JS'?",
      a: "just script",
      b: "Javascript languag",
      c: "JavaScript",
      d: "None",
      answer: "ans3"
    },
    {
      question: "Q2: In JavaScript, what function is used to print something on the console?",
      a: "print()",
      b: "log()",
      c: "console.print()",
      d: "display()",
      answer: "ans2"
    },
    {
      question: "Q3: Which symbol is used for single-line comments in JavaScript?",
      a: "//",
      b: "/*",
      c: "--",
      d: "##",
      answer: "ans1"
    },
    {
      question: "Q4: What type of language is JavaScript?",
      a: "Markup language",
      b: "Programming language",
      c: "Database language",
      d: "Scripting language",
      answer: "ans4"
    },
    {
      question: "Q5: What is the purpose of the 'alert' function in JavaScript?",
      a: "Display an image",
      b: "Display a message box with a message",
      c: "Run a loop",
      d: "Define a variable",
      answer: "ans2"
    },
    {
      question: "Q6: Which keyword is used to declare a variable in JavaScript?",
      a: "var",
      b: "int",
      c: "string",
      d: "variable",
      answer: "ans1"
    },
    {
      question: "Q7: What does the acronym 'DOM' stand for in JavaScript?",
      a: "Data Object Model",
      b: "Document Object Model",
      c: "Dynamic Object Model",
      d: "Digital Output Mode",
      answer: "ans2"
    },
    {
      question: "Q8: How do you comment out multiple lines in JavaScript?",
      a: "/* */",
      b: "//",
      c: "<!-- -->",
      d: "''' '''",
      answer: "ans1"
    },
    {
      question: "Q9: Which operator is used for strict equality in JavaScript?",
      a: "==",
      b: "===",
      c: "=",
      d: "!=",
      answer: "ans2"
    },
    {
      question: "Q10: What does the 'this' keyword refer to in JavaScript?",
      a: "Current object",
      b: "Previous object",
      c: "Next object",
      d: "Global object",
      answer: "ans1"
    }
  ];
  
 
  ///taking reference
  const question = document.querySelector('.question');
  const option1 = document.querySelector('#option1')
  const option2 = document.querySelector('#option2')
  const option3 = document.querySelector('#option3')
  const option4 = document.querySelector('#option4')
  const submit = document.querySelector('#submit')
  const answers = document.querySelectorAll('.answer')
  const showscore = document.querySelector('#showscore')
  let questionCount = 0;
  let score = 0;

  const questionLoad = ()=>{
    let questionList = questions[questionCount]

   question.innerText  =questionList.question
   option1.innerText = questionList.a
   option2.innerText = questionList.b
   option3.innerText = questionList.c
   option4.innerText = questionList.d

  }
  questionLoad()
  const getCatchAnswer = ()=>{
    let answer;
    answers.forEach((curAnsElement) => {
        if(curAnsElement.checked){
            answer = curAnsElement.id;
        }
    });
    return answer
  };
  const deSelectAll = ()=>{
    answers.forEach((curAnsElemen)=>curAnsElemen.checked = false)

    }
  
  submit.addEventListener('click',()=>{
    const checkAnswers = getCatchAnswer()
    console.log(checkAnswers);
    if(checkAnswers == questions[questionCount].answer ){
        score++;
    }
    questionCount++;
    deSelectAll()
    if(questionCount < questions.length){
        questionLoad();
    }else{
        showscore.innerHTML = `<h3>You scored ${score}/${questions.length} ✌</h3>
        <button class="btn" onclick="location.reload()"> Play again </button>`;
    showscore.classList.remove('score');
    
    }

  })

