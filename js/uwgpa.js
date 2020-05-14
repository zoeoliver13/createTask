const grade = [];
const credit = [];

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
var average = 0;

function submit(){
  grade1 = document.getElementById('grade1');
  grade.push(grade1);
  console.log(grade1);

  grade2 = document.getElementById('grade2');
  grade.push(grade2);

  grade3 = document.getElementById('grade3');
  grade.push(grade4);

  grade4 = document.getElementById('grade4');
  grade.push(grade4);

  grade5 = document.getElementById('grade5');
  grade.push(grade5);

  grade6 = document.getElementById('grade6');
  grade.push(grade6);

  grade7 = document.getElementById('grade7');
  grade.push(grade7);

  grade8 = document.getElementById('grade8');
  grade.push(grade8);

  credit1 = document.getElementById('credit1');
  credit.push(credit1);

  credit2 = document.getElementById('credit2');
  credit.push(credit2);

  credit3 = document.getElementById('credit3');
  credit.push(credit3);

  credit4 = document.getElementById('credit4');
  credit.push(credit4);

  credit5 = document.getElementById('credit5');
  credit.push(credit5);

  credit6 = document.getElementById('credit6');
  credit.push(credit6);

  credit7 = document.getElementById('credit7');
  credit.push(credit7);

  credit8 = document.getElementById('credit8');
  credit.push(credit8);

  calculateGpa();
};

function calculateGpa(){
let sum = 0;
let sumCredit = 0;
  for (let i = 0; i < 8; i++) {
      sum += grade[i] * credit[i];
  }
  for (let y = 0; y < 8; y++){
      sumCredit += credit[y];
  }
  average = sum/sumCredit;
  console.log(average);
}
