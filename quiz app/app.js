var container = document.getElementById("container")
var password = document.getElementById("password")
var email = document.getElementById("email")
var portion = document.getElementById("portion")
var quizes = document.getElementById("quizes")
var user_welcome = document.getElementById("user-welcome")
var header = document.getElementById("header")



//   Html

function submitForm() {
  var userPass = password.value;
  var userEmail = email.value;
  if (userPass == '123456' && userEmail == "rao@") {
    container.className += "authenticated"
    portion.style.display = "block"
  } else {
    password.style.border = "1px solid red ";
    email.style.border = '1px solid red'
  }
  // You can do whatever you want with the retrieved values here
}

let htmlQuestion = [
  {
    question: "Q1: What is the full form of 'HTML'?",
    a: "Hyper Text Markup Language",
    b: "Hyperlinks and Text Markup Language",
    c: "Home Tool Markup Language",
    d: "Hyperlinks and Text Markup Level",
    answer: "ans1"
  },
  {
    question: "Q2: Which of the following tags are all HTML tags?",
    a: "<head>, <title>, <style>",
    b: "<title>, <style>, <body>",
    c: "<title>, <body>, <center>",
    d: "<html>, <head>, <title>",
    answer: "ans4"
  },
  {
    question: "Q3: What is the purpose of the 'alt' attribute in an <img> tag?",
    a: "Defines the alternative text for the image",
    b: "Defines the alignment of the image",
    c: "Defines the size of the image",
    d: "Defines the source of the image",
    answer: "ans1"
  },
  {
    question: "Q4: Which of the following is NOT an HTML5 tag?",
    a: "<header>",
    b: "<footer>",
    c: "<section>",
    d: "<article>",
    answer: "ans3"
  },
  {
    question: "Q5: Which tag is used to define an unordered list?",
    a: "<ul>",
    b: "<ol>",
    c: "<li>",
    d: "<list>",
    answer: "ans1"
  },
  {
    question: "Q6: What is the purpose of the 'href' attribute in an <a> tag?",
    a: "Defines the alternative text for the link",
    b: "Defines the alignment of the link",
    c: "Defines the size of the link",
    d: "Defines the destination of the link",
    answer: "ans4"
  },
  {
    question: "Q7: Which tag is used to define a table in HTML?",
    a: "<table>",
    b: "<tr>",
    c: "<td>",
    d: "<th>",
    answer: "ans1"
  },
  {
    question: "Q8: What is the purpose of the 'type' attribute in a <script> tag?",
    a: "Defines the alternative text for the script",
    b: "Defines the alignment of the script",
    c: "Defines the size of the script",
    d: "Defines the scripting language of the script",
    answer: "ans4"
  },
  {
    question: "Q9: Which tag is used to define a paragraph in HTML?",
    a: "<p>",
    b: "<paragraph>",
    c: "<para>",
    d: "<line>",
    answer: "ans1"
  },
  {
    question: "Q10: What is the purpose of the 'src' attribute in an <img> tag?",
    a: "Defines the alternative text for the image",
    b: "Defines the alignment of the image",
    c: "Defines the size of the image",
    d: "Defines the source of the image",
    answer: "ans4"
  }
];
var counthtml = 0;
const questionPrint = document.querySelector('.question');
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
var submitButton = document.querySelector('#submit')
const answers = document.querySelectorAll('.answer')
let htmlScore = 0
let cssScore = 0


function questionload() {
  htmlques = htmlQuestion[counthtml]
  questionPrint.innerText = htmlques.question;
  option1.innerText = htmlques.a
  option2.innerText = htmlques.b
  option3.innerText = htmlques.c
  option4.innerText = htmlques.d


}
questionload();

const getCatchAnswerHtml = () => {
  let htmlanswer;
  answers.forEach((curAnsElement) => {
    if (curAnsElement.checked) {
      htmlanswer = curAnsElement.id
    }
  })
  return htmlanswer;
}
const deSelectAllHtml = () => {
  answers.forEach((curAnsElemen) => curAnsElemen.checked = false)

}
var intervalId;

function startTimeHtml() {
  var timer = document.getElementById("timeHtml");
  var time = 15;
  timer.innerHTML = `${time}s`;

  // Clear the previous interval if it exists
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    time--;
    if (time <= 0) {
      clearInterval(intervalId);
      timer.innerHTML = "Time's up!";
      counthtml++;
      questionload();
      startTimeHtml()
      

    } else {
      timer.innerHTML = `${time}s`;
    }
  }, 1000);
}
startTimeHtml()

submitButton.addEventListener('click', () => {
  let checkAns = getCatchAnswerHtml();
  deSelectAllHtml();
  if (checkAns === htmlQuestion[counthtml].answer) {
    htmlScore+=10;
    console.log('Correct answer!');
  }
  counthtml++;
  if (counthtml < htmlQuestion.length) {
    questionload();
    startTimeHtml();
  } else {
    clearInterval(intervalId);

    let circularProgess = document.querySelector('.circular-progress')
    let ProgessValue = document.querySelector('.progress-value');
    let progressStartValue = 0, progressEndValue = htmlScore, speed = 100;
    let progress = setInterval(() => {
      progressStartValue++;
    
      ProgessValue.textContent = `${progressStartValue}%`;
      circularProgess.style.background = `conic-gradient(red ${progressStartValue * 3.6}deg,wheat 0deg)`;
      if (progressStartValue >= progressEndValue) { // Modified condition
        clearInterval(progress);
      }
    }, speed);
    
    document.getElementById('showscore').style.display="flex"
    console.log("Quiz completed. Score displayed.");
    document.getElementById('cssQues').style.display = 'none';
  }
});




function htmlQestion() {
  var htmlques = document.getElementById('htmlques')
  htmlques.style.display = "block"
  quizes.style.display = "none"
  user_welcome.style.display = "none"
  header.style.display = "none"
  startTime()
  

}






// css question 
let cssQuestions = [
  {
    question: "Q1: What does CSS stand for?",
    a: "Cascading Style Sheets",
    b: "Computer Style Sheets",
    c: "Creative Style Sheets",
    d: "Content Style Sheets",
    answer: "ans1"
  },
  {
    question: "Q2: Which property in CSS is used to change the background color of an element?",
    a: "background-color",
    b: "color",
    c: "background",
    d: "bgcolor",
    answer: "ans1"
  },
  {
    question: "Q3: In CSS, what does the 'px' unit measure?",
    a: "Pixels",
    b: "Percentage",
    c: "Points",
    d: "Picas",
    answer: "ans1"
  },
  {
    question: "Q4: Which of the following is NOT a valid value for the 'display' property in CSS?",
    a: "inline",
    b: "block",
    c: "hidden",
    d: "none",
    answer: "ans3"
  },
  {
    question: "Q5: What is the purpose of the 'z-index' property in CSS?",
    a: "It defines the order of elements in a stack",
    b: "It defines the background color of an element",
    c: "It defines the size of an element",
    d: "It defines the position of an element",
    answer: "ans1"
  },
  {
    question: "Q6: Which of the following is a pseudo-class in CSS?",
    a: "hover",
    b: "bold",
    c: "italic",
    d: "underline",
    answer: "ans1"
  },
  {
    question: "Q7: What is the default value of the 'position' property in CSS?",
    a: "relative",
    b: "absolute",
    c: "fixed",
    d: "static",
    answer: "ans4"
  },
  {
    question: "Q8: Which CSS property is used to control the transparency of an element?",
    a: "opacity",
    b: "visibility",
    c: "display",
    d: "transparent",
    answer: "ans1"
  },
  {
    question: "Q9: In CSS, which property is used to change the size of the text?",
    a: "font-size",
    b: "text-size",
    c: "size",
    d: "font",
    answer: "ans1"
  },
  {
    question: "Q10: Which CSS property is used to add shadows to elements?",
    a: "box-shadow",
    b: "shadow",
    c: "text-shadow",
    d: "element-shadow",
    answer: "ans1"
  }
];
var counthtml = 0;
const QuestionPrint = document.querySelector('.csquestion');
const Option1 = document.querySelector('#Cs1')
const Option2 = document.querySelector('#Cs2')
const Option3 = document.querySelector('#Cs3')
const Option4 = document.querySelector('#Cs4')
var submitButton = document.querySelector('#submitbtn')
const Answers = document.querySelectorAll('.answer')

function questioncssload() {
  cssques = cssQuestions[counthtml]
  QuestionPrint.innerText = cssques.question;
  Option1.innerText = cssques.a
  Option2.innerText = cssques.b
  Option3.innerText = cssques.c
  Option4.innerText = cssques.d

}
questioncssload();
var intervalId; 
function startTime() {
  var timer = document.getElementById("timers");
  var time = 15;
  timer.innerHTML = `${time}s`;
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    time--;
    if (time <= 0) {
      clearInterval(intervalId);
      counthtml++;
      startTime()
      questioncssload();
    } else {
      timer.innerHTML = `${time}s`;
    }
  }, 1000);
}
startTime()

const getCatchAnswerCss = () => {
  let cssAnswer;
  Answers.forEach((curAnsElement) => {
    if (curAnsElement.checked) {
      cssAnswer = curAnsElement.id
    }
  })
  return cssAnswer;
}
const deSelectAllCss = () => {
  Answers.forEach((curAnsElemen) => curAnsElemen.checked = false)

}

submitButton.addEventListener('click', () => {
 
  let checkAns = getCatchAnswerCss();
  deSelectAllCss();
  if (checkAns === cssQuestions[counthtml].answer) {
    cssScore+=10;
    console.log('Correct answer!');
  }
  counthtml++;
  if (counthtml < cssQuestions.length) {
    questioncssload();
    startTime()  
  } else {
    clearInterval(intervalId);

    let circularProgess = document.querySelector('.circular-progress')
    let ProgessValue = document.querySelector('.progress-value');
    let progressStartValue = 0, progressEndValue = cssScore, speed = 100;
    let progress = setInterval(() => {
      progressStartValue++;
    
      ProgessValue.textContent = `${progressStartValue}%`;
      circularProgess.style.background = `conic-gradient(red ${progressStartValue * 3.6}deg,wheat 0deg)`;
      if (progressStartValue >= progressEndValue) { // Modified condition
        clearInterval(progress);
      }
    }, speed);
    
    document.getElementById('showscore').style.display="flex"
    console.log("Quiz completed. Score displayed.");
    document.getElementById('htmlques').style.display = 'none';
  }
});




function cssQestion() {
  var cssQues = document.getElementById('cssQues')
  cssQues.style.display = "block"
  quizes.style.display = "none"
  user_welcome.style.display = "none"
  header.style.display = "none"
  startTimeHtml();

}






/////////    python question part  /////////////////

//   python
let pythonQuestion = [
  {
    question: "Q1: What does the acronym 'IDE' stand for in Python?",
    a: "Integrated Development Environment",
    b: "Interactive Development Environment",
    c: "Intelligent Development Environment",
    d: "Integrated Debugging Environment",
    answer: "ans1"
  },
  {
    question: "Q2: In Python, which function is used to print something on the console?",
    a: "print()",
    b: "log()",
    c: "console.print()",
    d: "display()",
    answer: "ans1"
  },
  {
    question: "Q3: Which symbol is used for single-line comments in Python?",
    a: "#",
    b: "//",
    c: "--",
    d: "##",
    answer: "ans1"
  },
  {
    question: "Q4: What type of language is Python?",
    a: "Markup language",
    b: "Programming language",
    c: "Database language",
    d: "Scripting language",
    answer: "ans4"
  },
  {
    question: "Q5: What is the purpose of the 'input' function in Python?",
    a: "Accept user input",
    b: "Display a message box with a message",
    c: "Run a loop",
    d: "Define a variable",
    answer: "ans1"
  },
  {
    question: "Q6: Which keyword is used to declare a variable in Python?",
    a: "var",
    b: "int",
    c: "string",
    d: "variable",
    answer: "ans1"
  },
  {
    question: "Q7: What does the acronym 'API' stand for in Python?",
    a: "Application Programming Interface",
    b: "Application Program Interface",
    c: "Application Programming Interface",
    d: "Application Program Interface",
    answer: "ans1"
  },
  {
    question: "Q8: How do you comment out multiple lines in Python?",
    a: "/* */",
    b: "//",
    c: "''' '''",
    d: "<!-- -->",
    answer: "ans3"
  },
  {
    question: "Q9: Which operator is used for strict equality in Python?",
    a: "==",
    b: "===",
    c: "=",
    d: "!=",
    answer: "ans1"
  },
  {
    question: "Q10: What does the 'this' keyword refer to in Python?",
    a: "Current object",
    b: "Previous object",
    c: "Next object",
    d: "Global object",
    answer: "ans1"
  }
];

var countPython = 0;
const pythonQues = document.querySelector('.pyquestion');
const pythonOption1 = document.querySelector('#py1')
const pythonOption2 = document.querySelector('#py2')
const pythonOption3 = document.querySelector('#py3')
const pythonOption4 = document.querySelector('#py4')
var submitButtonOfPython = document.querySelector('#submitbtnPy')
const pythonAnswer = document.querySelectorAll('.answer')
let pythonScore = 0

function questionPythonLoad() {
  python = pythonQuestion[countPython]
  pythonQues.innerText = python.question;
  pythonOption1.innerText = python.a
  pythonOption2.innerText = python.b
  pythonOption3.innerText = python.c
  pythonOption4.innerText = python.d

}


questionPythonLoad();

var intervalId; // Global variable to hold the interval ID

function startTimerForPython() {
  var timer = document.getElementById("timerOfPython");
  var time = 15;
  timer.innerHTML = `${time}s`;

  // Clear the previous interval if it exists
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    time--;
    if (time <= 0) {
      clearInterval(intervalId);
      timer.innerHTML = "Time's up!";
      countPython++;
      startTimerForPython()
      questionPythonLoad();
    } else {
      timer.innerHTML = `${time}s`;
    }
  }, 1000);
}


startTimerForPython()

const getCatchAnswerPython = () => {
  let pythonAnswers;
  pythonAnswer.forEach((curAnsElement) => {
    if (curAnsElement.checked) {
      pythonAnswers = curAnsElement.id
    }
  })
  return pythonAnswers;
}
const deSelectAllPython = () => {
  pythonAnswer.forEach((curAnsElemen) => curAnsElemen.checked = false)

}


submitButtonOfPython.addEventListener('click', () => {
  let checkAns = getCatchAnswerPython();
  deSelectAllPython();
  if (checkAns === pythonQuestion[countPython].answer) {
    pythonScore+=10;
    console.log('Correct answer!');
  }
  countPython++;
  if (countPython < htmlQuestion.length) {
    questionPythonLoad();
    startTimerForPython();
  } else {
    clearInterval(intervalId);

    let circularProgess = document.querySelector('.circular-progress')
    let ProgessValue = document.querySelector('.progress-value');
    let progressStartValue = 0, progressEndValue = pythonScore, speed = 100;
    let progress = setInterval(() => {
      progressStartValue++;
    
      ProgessValue.textContent = `${progressStartValue}%`;
      circularProgess.style.background = `conic-gradient(red ${progressStartValue * 3.6}deg,wheat 0deg)`;
      if (progressStartValue >= progressEndValue) { // Modified condition
        clearInterval(progress);
      }
    }, speed);
    
    document.getElementById('showscore').style.display="flex"
    console.log("Quiz completed. Score displayed.");
    document.getElementById('pythonques').style.display = 'none';
  }
});




function pythonQestion() {
  var pythonques = document.getElementById('pythonques')
  pythonques.style.display = "block"
  quizes.style.display = "none"
  user_welcome.style.display = "none"
  header.style.display = "none"
  startTimerForPython();

}

/////////typescript //////////////////////



let typescriptQuestion = [
  {
    question: "Q1: What is TypeScript?",
    a: "Superset of JavaScript",
    b: "A JavaScript library",
    c: "A JavaScript framework",
    d: "A JavaScript interpreter",
    answer: "ans1"
  },
  {
    question: "Q2: In TypeScript, what function is used to print something on the console?",
    a: "print()",
    b: "log()",
    c: "console.print()",
    d: "display()",
    answer: "ans2"
  },
  {
    question: "Q3: Which symbol is used for single-line comments in TypeScript?",
    a: "//",
    b: "/*",
    c: "--",
    d: "##",
    answer: "ans1"
  },
  {
    question: "Q4: What type of language is TypeScript?",
    a: "Markup language",
    b: "Programming language",
    c: "Database language",
    d: "Scripting language",
    answer: "ans4"
  },
  {
    question: "Q5: What is the purpose of the 'alert' function in TypeScript?",
    a: "Display an image",
    b: "Display a message box with a message",
    c: "Run a loop",
    d: "Define a variable",
    answer: "ans2"
  },
  {
    question: "Q6: Which keyword is used to declare a variable in TypeScript?",
    a: "var",
    b: "int",
    c: "string",
    d: "variable",
    answer: "ans1"
  },
  {
    question: "Q7: What does the acronym 'DOM' stand for in TypeScript?",
    a: "Data Object Model",
    b: "Document Object Model",
    c: "Dynamic Object Model",
    d: "Digital Output Mode",
    answer: "ans2"
  },
  {
    question: "Q8: How do you comment out multiple lines in TypeScript?",
    a: "/* */",
    b: "//",
    c: "<!-- -->",
    d: "''' '''",
    answer: "ans1"
  },
  {
    question: "Q9: Which operator is used for strict equality in TypeScript?",
    a: "==",
    b: "===",
    c: "=",
    d: "!=",
    answer: "ans2"
  },
  {
    question: "Q10: What does the 'this' keyword refer to in TypeScript?",
    a: "Current object",
    b: "Previous object",
    c: "Next object",
    d: "Global object",
    answer: "ans1"
  }
];

var counttypescript = 0;
const typescriptQues = document.querySelector('.typescriptquestion');
const typescriptOption1 = document.querySelector('#ty1')
const typescriptOption2 = document.querySelector('#ty2')
const typescriptOption3 = document.querySelector('#ty3')
const typescriptOption4 = document.querySelector('#ty4')
var submitButtonOftypescript = document.querySelector('#submitbtnty')
const typescriptAnswer = document.querySelectorAll('.answer')
let typescriptScore = 0

function questiontypescriptLoad() {
  typescript = typescriptQuestion[counttypescript]
  typescriptQues.innerText = typescript.question;
  typescriptOption1.innerText = typescript.a
  typescriptOption2.innerText = typescript.b
  typescriptOption3.innerText = typescript.c
  typescriptOption4.innerText = typescript.d

}

questiontypescriptLoad();

var intervalId; // Global variable to hold the interval ID

function startTimerFortypescript() {
  var timer = document.getElementById("timerOftypescript");
  var time = 15;
  timer.innerHTML = `${time}s`;

  // Clear the previous interval if it exists
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    time--;
    if (time <= 0) {
      clearInterval(intervalId);
      timer.innerHTML = "Time's up!";
      counttypescript++;
      startTimerFortypescript()
      questiontypescriptLoad();
    } else {
      timer.innerHTML = `${time}s`;
    }
  }, 1000);
}


startTimerFortypescript()
const getCatchAnswertypescript = () => {
  let typescriptAnswers;
  typescriptAnswer.forEach((curAnsElement) => {
    if (curAnsElement.checked) {
      typescriptAnswers = curAnsElement.id
    }
  })
  return typescriptAnswers;
}
const deSelectAlltypescript = () => {
  typescriptAnswer.forEach((curAnsElemen) => curAnsElemen.checked = false)

}


submitButtonOftypescript.addEventListener('click', () => {
  let checkAns = getCatchAnswertypescript();
  deSelectAlltypescript();
  if (checkAns === typescriptQuestion[counttypescript].answer) {
    typescriptScore+=10;
    console.log('Correct answer!');
  }
  counttypescript++;
  if (counttypescript < htmlQuestion.length) {
    questiontypescriptLoad();
    startTimerFortypescript();
  } else {
    clearInterval(intervalId);

    let circularProgess = document.querySelector('.circular-progress')
    let ProgessValue = document.querySelector('.progress-value');
    let progressStartValue = 0, progressEndValue = typescriptScore, speed = 100;
    let progress = setInterval(() => {
      progressStartValue++;
    
      ProgessValue.textContent = `${progressStartValue}%`;
      circularProgess.style.background = `conic-gradient(red ${progressStartValue * 3.6}deg,wheat 0deg)`;
      if (progressStartValue >= progressEndValue) { // Modified condition
        clearInterval(progress);
      }
    }, speed);
    
    document.getElementById('showscore').style.display="flex"
    console.log("Quiz completed. Score displayed.");
    document.getElementById('typescriptques').style.display = 'none';
  }
});




function typescriptQestion() {
  var typescriptques = document.getElementById('typescriptques')
  typescriptques.style.display = "block"
  quizes.style.display = "none"
  user_welcome.style.display = "none"
  header.style.display = "none"
  startTimerFortypescript();

}


////////// javascript part ////////////////////

let javascriptQuestions = [
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

var countJavaScript = 0;
const JavaScriptQues = document.querySelector('.Javascriptquestion');
const JavaScriptOption1 = document.querySelector('#Js1')
const JavaScriptOption2 = document.querySelector('#Js2')
const JavaScriptOption3 = document.querySelector('#Js3')
const JavaScriptOption4 = document.querySelector('#Js3')
var submitButtonOfJavaScript = document.querySelector('#submitbtnJs')
const JavaScriptAnswer = document.querySelectorAll('.answer')
let javascriptScore = 0

function questionJavaScriptLoad() {
  JavaScript = javascriptQuestions[countJavaScript]
  JavaScriptQues.innerText = JavaScript.question;
  JavaScriptOption1.innerText = JavaScript.a
  JavaScriptOption2.innerText = JavaScript.b
  JavaScriptOption3.innerText = JavaScript.c
  JavaScriptOption4.innerText = JavaScript.d

}

questionJavaScriptLoad();

var intervalId; // Global variable to hold the interval ID

function startTimerForJavascript() {
  var timer = document.getElementById("timerOfJavascript");
  var time = 15;
  timer.innerHTML = `${time}s`;

  // Clear the previous interval if it exists
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    time--;
    if (time <= 0) {
      clearInterval(intervalId);
      timer.innerHTML = "Time's up!";
      countJavaScript++;
      startTimerForJavascript()
      questionJavaScriptLoad();
    } else {
      timer.innerHTML = `${time}s`;
    }
  }, 1000);
}


startTimerForJavascript()

const getCatchAnswerJavascript = () => {
  let JavascriptAnswers;
  JavaScriptAnswer.forEach((curAnsElement) => {
    if (curAnsElement.checked) {
      JavascriptAnswers = curAnsElement.id
    }
  })
  return JavascriptAnswers;
}
const deSelectAllJavascript = () => {
  JavaScriptAnswer.forEach((curAnsElemen) => curAnsElemen.checked = false)

}


submitButtonOfJavaScript.addEventListener('click', () => {
  let checkAns = getCatchAnswerJavascript();
  deSelectAllJavascript();
  if (checkAns === javascriptQuestions[countJavaScript].answer) {
    javascriptScore+=10;
    console.log('Correct answer!');
  }
  countJavaScript++;
  if (countJavaScript < javascriptQuestions.length) {
    questionJavaScriptLoad();
    startTimerForJavascript()
  } else {
    clearInterval(intervalId);

    let circularProgess = document.querySelector('.circular-progress')
    let ProgessValue = document.querySelector('.progress-value');
    let progressStartValue = 0, progressEndValue = javascriptScore, speed = 100;
    let progress = setInterval(() => {
      progressStartValue++;
    
      ProgessValue.textContent = `${progressStartValue}%`;
      circularProgess.style.background = `conic-gradient(red ${progressStartValue * 3.6}deg,wheat 0deg)`;
      if (progressStartValue >= progressEndValue) { // Modified condition
        clearInterval(progress);
      }
    }, speed);
    
    document.getElementById('showscore').style.display="flex"
    console.log("Quiz completed. Score displayed.");
    document.getElementById('Javascriptques').style.display = 'none';
  }
});




function javascriptQestion() {
  var Javascriptques = document.getElementById('Javascriptques')
  Javascriptques.style.display = "block"
  quizes.style.display = "none"
  user_welcome.style.display = "none"
  header.style.display = "none"
  startTimerForJavascript()

}

////////// c++ ////////////// 

// C++
let CPlusQuestions = [
  {
    question: "Q1: What does the acronym 'C++' stand for?",
    a: "C Plus",
    b: "C Plus Plus",
    c: "C Plus Programming",
    d: "C Plus Pointers",
    answer: "ans2"
  },
  {
    question: "Q2: In C++, which library function is used to allocate memory dynamically?",
    a: "malloc()",
    b: "alloc()",
    c: "calloc()",
    d: "new()",
    answer: "ans4"
  },
  {
    question: "Q3: Which of the following is NOT a valid data type in C++?",
    a: "int",
    b: "float",
    c: "char",
    d: "byte",
    answer: "ans4"
  },
  {
    question: "Q4: What is the purpose of the 'cin' object in C++?",
    a: "To input data from the console",
    b: "To output data to the console",
    c: "To define a variable",
    d: "To define a function",
    answer: "ans1"
  },
  {
    question: "Q5: Which operator is used to access the address of a variable in C++?",
    a: "&",
    b: "*",
    c: "&&",
    d: "||",
    answer: "ans1"
  },
  {
    question: "Q6: Which keyword is used to declare a variable in C++?",
    a: "var",
    b: "int",
    c: "string",
    d: "variable",
    answer: "ans2"
  },
  {
    question: "Q7: What does the acronym 'OOP' stand for in C++?",
    a: "Object Oriented Programming",
    b: "Object Oriented Pointers",
    c: "Object Oriented Process",
    d: "Object Oriented Point",
    answer: "ans1"
  },
  {
    question: "Q8: How do you comment out multiple lines in C++?",
    a: "/* */",
    b: "//",
    c: "<!-- -->",
    d: "''' '''",
    answer: "ans1"
  },
  {
    question: "Q9: Which operator is used for strict equality in C++?",
    a: "==",
    b: "===",
    c: "=",
    d: "!=",
    answer: "ans1"
  },
  {
    question: "Q10: What does the 'this' keyword refer to in C++?",
    a: "Current object",
    b: "Previous object",
    c: "Next object",
    d: "Global object",
    answer: "ans1"
  }
];
var countC = 0;
const CQues = document.querySelector('.cppQuestion');
const COption1 = document.querySelector('#Cpp1')
const COption2 = document.querySelector('#Cpp2')
const COption3 = document.querySelector('#Cpp3')
const COption4 = document.querySelector('#Cpp4')
var submitButtonOfC = document.querySelector('#submitbtnCpp')
const CAnswer = document.querySelectorAll('.answer')
let CppScore = 0

function questionCLoad() {
  C = CPlusQuestions[countC]
  CQues.innerText = C.question;
  COption1.innerText = C.a
  COption2.innerText = C.b
  COption3.innerText = C.c
  COption4.innerText = C.d

}

questionCLoad();


var intervalId; // Global variable to hold the interval ID

function startTimerForCpp() {
  var timer = document.getElementById("timerOfCpp");
  var time = 15;
  timer.innerHTML = `${time}s`;

  // Clear the previous interval if it exists
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    time--;
    if (time <= 0) {
      clearInterval(intervalId);
      timer.innerHTML = "Time's up!";
      countC++;
      startTimerForCpp()
      questionCLoad();
    } else {
      timer.innerHTML = `${time}s`;
    }
  }, 1000);
}

startTimerForCpp()

const getCatchAnswerCpp = () => {
  let CppAnswers;
  CAnswer.forEach((curAnsElement) => {
    if (curAnsElement.checked) {
      CppAnswers = curAnsElement.id
    }
  })
  return CppAnswers;
}
const deSelectAllCpp = () => {
  CAnswer.forEach((curAnsElemen) => curAnsElemen.checked = false)

}


submitButtonOfC.addEventListener('click', () => {
  let checkAns = getCatchAnswerCpp();
  deSelectAllCpp();
  if (checkAns === CPlusQuestions[countC].answer) {
    CppScore+=10;
    console.log('Correct answer!');
  }
  countC++;
  if (countC < CPlusQuestions.length) {
    questionCLoad();
    startTimerForCpp()
  } else {
    clearInterval(intervalId);

    let circularProgess = document.querySelector('.circular-progress')
    let ProgessValue = document.querySelector('.progress-value');
    let progressStartValue = 0, progressEndValue = CppScore, speed = 100;
    let progress = setInterval(() => {
      progressStartValue++;
    
      ProgessValue.textContent = `${progressStartValue}%`;
      circularProgess.style.background = `conic-gradient(red ${progressStartValue * 3.6}deg,wheat 0deg)`;
      if (progressStartValue >= progressEndValue) { // Modified condition
        clearInterval(progress);
      }
    }, speed);
    
    document.getElementById('showscore').style.display="flex"
    console.log("Quiz completed. Score displayed.");
    document.getElementById('CppQues').style.display = 'none';
  }
});





function cppQestion() {
  var CppQues = document.getElementById('CppQues')
  CppQues.style.display = "block"
  quizes.style.display = "none"
  user_welcome.style.display = "none"
  header.style.display = "none"
  startTimerForCpp()

}

function reload(){
  location.reload()
}



