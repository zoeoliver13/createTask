//VARIABLES//
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

//FUNCTIONS//

const grade = [];
const credit = [];


//Assigning variables to all spots in each row//
function submit(){
  grade1 = document.getElementById('grade1').value;
    grade.push(grade1);
    if(grade1 = null){
      alert("no");
    }
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
  credit2 = document.getElementById('credit2').value;
  credit3 = document.getElementById('credit3').value;
  credit4 = document.getElementById('credit4').value;
  credit5 = document.getElementById('credit5').value;
  credit6 = document.getElementById('credit6').value;
  credit7 = document.getElementById('credit7').value;
  credit8 = document.getElementById('credit8').value;

    if(credit1 == "" || isNaN(credit1) || credit2 == "" || isNaN(credit2)|| credit3 == "" || isNaN(credit3)|| credit4 == "" || isNaN(credit4)|| credit5 == "" || isNaN(credit5)|| credit6 == "" || isNaN(credit6)|| credit7 == "" || isNaN(credit7)|| credit8 == ""|| isNaN(credit8)){
      alert("You left a credit cell empty or did not input a number. Make sure they're all filled out and are numbers")
      return false;
    } else {
      credit.push(credit1);
      credit.push(credit2);
      credit.push(credit3);
      credit.push(credit4);
      credit.push(credit5);
      credit.push(credit6);
      credit.push(credit7);
      credit.push(credit8);
    }
  getGPA();


};
//Calculates GPA//
function getGPA(){
var sum = 0;
var credits = 0;
var gpa = document.getElementById("gpa");
grade1 = document.getElementById('grade1').value;
for (var x = 0; x < 8; x++) {
  credit[x] = parseInt(credit[x]);
    sum += grade[x] * credit[x];
}
for (var y = 0; y < 8; y++){
    credits += credit[y];

}

average = sum/credits;
//Prints under the button//
averagePrint = average.toLocaleString ('en', {minimumFractionDigits : 1 , maximimFractionDigits: 1});
gpa.innerHTML = averagePrint;
}
 function reload(){
   var yes = confirm("Are you sure you want to clear your inputs to make a new one? ");
   if(yes == true){
     window.location.reload();
   }
 }
