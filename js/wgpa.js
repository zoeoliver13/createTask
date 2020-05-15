const grade = [];
const credit = [];
const weight = [];

var grade1;
var grade2;
var grade3;
var grade4;
var grade5;
var grade6;
var grade7;
var grade8;
var credit1;
var credit2;
var credit3;
var credit4;
var credit5;
var credit6;
var credit7;
var credit8;
var weight1;
var weight2;
var weight3;
var weight4;
var weight5;
var weight6;
var weight7;
var weight8;
var average = 0;

function submit(){
  grade1 = document.getElementById('grade1').value;
  grade.push(grade1);

  grade2 = document.getElementById('grade2').value;
  grade.push(grade2);

  grade3 = document.getElementById('grade3').value;
  grade.push(grade3);

  grade4 = document.getElementById('grade4').value;
  grade.push(grade4);

  grade5 = document.getElementById('grade5').value;
  grade.push(grade5);

  grade6 = document.getElementById('grade6').value;
  grade.push(grade6);

  grade7 = document.getElementById('grade7').value;
  grade.push(grade7);

  grade8 = document.getElementById('grade8').value;
  grade.push(grade8);

  credit1 = document.getElementById('credit1').value;
  credit.push(credit1);

  credit2 = document.getElementById('credit2').value;
  credit.push(credit2);

  credit3 = document.getElementById('credit3').value;
  credit.push(credit3);

  credit4 = document.getElementById('credit4').value;
  credit.push(credit4);

  credit5 = document.getElementById('credit5').value;
  credit.push(credit5);

  credit6 = document.getElementById('credit6').value;
  credit.push(credit6);

  credit7 = document.getElementById('credit7').value;
  credit.push(credit7);

  credit8 = document.getElementById('credit8').value;
  credit.push(credit8);

  weight1 = document.getElementById('weight1').value;
  weight.push(weight1);

  weight2 = document.getElementById('weight2').value;
  weight.push(weight2);

  weight3 = document.getElementById('weight3').value;
  weight.push(weight3);

  weight4 = document.getElementById('weight4').value;
  weight.push(weight4);

  weight5 = document.getElementById('weight5').value;
  weight.push(weight5);

  weight6 = document.getElementById('weight6').value;
  weight.push(weight6);

  weight7 = document.getElementById('weight7').value;
  weight.push(weight7);

  weight8 = document.getElementById('weight8').value;
  weight.push(weight8);

  calculateGpa();



};

function calculateGpa(){
let sum = 0;
let sumCredit = 0;
let gpa = document.getElementById("gpa");
let message = document.getElementById("message")

  for (let i = 0; i < 8; i++) {
    credit[i] = parseInt(credit[i]);
      sum += grade[i] * credit[i] * weight[i];
  }
  for (let y = 0; y < 8; y++){
      sumCredit += credit[y];
  }

  average = sum/sumCredit;
  average = average.toLocaleString ('en', {minimumFractionDigits : 3 , maximimFractionDigits: 3});
  gpa.innerHTML = average;
  }

  function reload(){
    window.location.reload();
  }
