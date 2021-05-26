function display(element) {
  var value = document.getElementById("input").value;
  document.getElementById("input").value = value + element;
  console.log(document.getElementById("input").value);
}

function showAns() {
  var exp = document.getElementById("input").value;
  var answer = eval(exp);
  document.getElementById("input").value = answer;
}

function clearAns() {
  document.getElementById("input").value = "";
}
