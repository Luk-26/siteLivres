function addRow() {
  var table = document.getElementById("myTable");
  var row = table.insertRow();
  row.insertCell(0).innerHTML = document.getElementById("titre").value;
  row.insertCell(1).innerHTML = document.getElementById("auteur").value;
  row.insertCell(2).innerHTML = document.getElementById("statut").value;
}
