let selectArimetic = "";
let num;
function sElement() {
  let rangeNum = document.getElementById("range-num").value;
  selectArimetic = document.getElementById("arithmetic").value;
  localStorage.setItem("selectedRangeNum", rangeNum);

  if (rangeNum == "1 - 10") {
    num = Math.floor(Math.random() * 11);
    document.getElementById("demo").innerHTML = num;
    num = Math.floor(Math.random() * 11);
    document.getElementById("demo1").innerHTML = num;
  } else if (rangeNum == "1 - 100") {
    num = Math.floor(Math.random() * 101);
    document.getElementById("demo").innerHTML = num;
    num = Math.floor(Math.random() * 101);
    document.getElementById("demo1").innerHTML = num;
  } else {
    num = Math.floor(Math.random() * 1001);
    document.getElementById("demo").innerHTML = num;
    num = Math.floor(Math.random() * 1001);
    document.getElementById("demo1").innerHTML = num;
  }
  if (selectArimetic == "פלוס +") {
    selectArimetic = "+";
  }
  if (selectArimetic == "מינוס -") {
    selectArimetic = "-";
  }
  if (selectArimetic == "כפל *") {
    selectArimetic = "*";
  }
  if (selectArimetic == "חילוק /") {
    selectArimetic = "/";
  }
  document.getElementById("demo2").innerHTML = selectArimetic;
}

document.getElementById("range-num").addEventListener("change", sElement);
document
  .getElementById("arithmetic")
  .addEventListener("change", sElement);

window.addEventListener("load", function () {
  let savedResults = JSON.parse(localStorage.getItem("results")) || [];
  let resultsTable = document.getElementById("results");
  savedResults.forEach((result) => {
    let newRow = resultsTable.insertRow();
    newRow.insertCell(0).innerText = result.correctAnswer;
    newRow.insertCell(1).innerText = result.yourAnswer;
    newRow.insertCell(2).innerText = result.points;
    newRow.insertCell(3).innerText = result.exercise;
  });
});

function myFunction() {
  let correctAnswer;

  let r = parseInt(document.getElementById("demo").innerHTML);

  let r1 = parseInt(document.getElementById("demo1").innerHTML);

  let operation = document.getElementById("demo2").innerHTML;

  if (operation == "+") {
    correctAnswer = r + r1;
  } else if (operation == "-") {
    correctAnswer = r - r1;
  } else if (operation == "*") {
    correctAnswer = r * r1;
  } else if (operation == "/") {
    correctAnswer = r / r1;
  }

  let userAnswer = document.getElementById("result").value;
  userAnswer = userAnswer === "" ? "???" : parseFloat(userAnswer);
  let points = userAnswer === correctAnswer ? 10 : 0;
  let exercise = `${r} ${operation} ${r1}`;

  let resultsTable = document.getElementById("results");
  let newRow = resultsTable.insertRow();
  newRow.insertCell(0).innerText = correctAnswer;
  newRow.insertCell(1).innerText = userAnswer;
  newRow.insertCell(2).innerText = points;
  newRow.insertCell(3).innerText = exercise;

  let savedResults = JSON.parse(localStorage.getItem("results")) || [];
  savedResults.push({
    correctAnswer,
    yourAnswer: userAnswer,
    points,
    exercise,
  });
  localStorage.setItem("results", JSON.stringify(savedResults));
}
function clearTable() {
  document.getElementById("results").innerHTML = "";
  localStorage.removeItem("results");
}