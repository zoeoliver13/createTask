/*ADD A CLASS*/

function addClass(table) {

  var table = document.getElementById("table");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var x = document.getElementById("table").rows.length - 1;
  var classNumber = document.createTextNode("Class " + x + " ");
  cell1.appendChild(classNumber);
  var cell2 = row.insertCell(1);
  var grades = document.createElement("INPUT");
  grades.setAttribute("type","text");
  grades.setAttribute("size", "2");
  grades.placeholder = "A";
  grades.style.margin = "30px 10px 10px 10px";
  cell2.appendChild(grades);
  var cell3 = row.insertCell(2);
  var weight = document.createElement("INPUT");
  weight.setAttribute("type","text");
  weight.setAttribute("size", "20");
  weight.style.margin = "30px 10px 10px 10px";
  weight.placeholder = "Regular";
  cell3.appendChild(weight);
  /*DELETE BUTTON*/
  var cell4 = row.insertCell(3);
  var img = document.createElement("img");
  img.src = "garbage.jpg";
  img.width = "50";
  cell4.appendChild(img);
  /*REMOVING A ROW*/

}
