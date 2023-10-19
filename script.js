
function returnBefore(){
    let currentGrade = document.getElementById("curGrade").value;
    let examPercent = document.getElementById("percentGrade").value;
    let desiredGrade = document.getElementById("wantedGrade").value;

    let adjustedExamPercent = parseFloat(examPercent) / 100;

    let neededGrade = (parseFloat(desiredGrade) - ((1 - adjustedExamPercent) * parseFloat(currentGrade))) / adjustedExamPercent;
    
    neededGrade = neededGrade.toFixed(2);
    let resultElement = document.createElement("p");
    if (isNaN(neededGrade)) {
        resultElement.textContent = "Please enter valid input.";
    } else if (neededGrade <= 0) {
        resultElement.textContent = "That score is guaranteed :)";
    }
    else {
        resultElement.textContent = "You need to score at least a " + neededGrade + "% on your final to get your desired grade.";
    }
    resultElement.id = "result";
    document.body.appendChild(resultElement);
}

// Does calc for Final Grade After Exam
function returnAfter(){
    let currentGrade = document.getElementById("curGrade").value;
    let examPercent = document.getElementById("percentGrade").value;
    let examGradeGot = document.getElementById("examGrade").value;

    let adjustedExamPercent = parseFloat(examPercent) / 100;

    let finalGrade = (parseFloat(currentGrade) * (1 - adjustedExamPercent)) + (parseFloat(examGradeGot) * adjustedExamPercent)
    
    finalGrade = finalGrade.toFixed(2);
    let resultElement = document.createElement("p");
    if (isNaN(finalGrade)) {
        resultElement.textContent = "Please enter valid input.";
    }
    else {
        resultElement.textContent = "You scored a " + finalGrade + "% in the class.";
    }
    resultElement.id = "result";
    document.body.appendChild(resultElement);
}