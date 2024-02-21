
var htmlContent = document.getElementById('text').innerHTML;
htmlContent = htmlContent.trim();
var lines = htmlContent.split('\n');
var questionsAndAnswers = [];
for (var i = 0; i < lines.length; i++) {

    var line = lines[i].trim();

    if (line.startsWith('Q')) {
        var question = line.substring(2).trim();
        var questionObject = {
            question: question,
            options: [],
            answer: '',
          
        };
    } else if (line.startsWith('A')) {
        questionObject.answer = line.substring(2).trim()
        questionsAndAnswers.push(questionObject);
    }  else if(line ===""){
         
    }
    else {
        questionObject.options.push(line);
    }
}


console.log(questionsAndAnswers);


