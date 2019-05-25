function nl(){
  document.write("</br>");
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sum(numbers) {
  var total = 0;
  for(var i = 0;i<numbers.length;i++){
    total += numbers[i];
  }
  return total;
}

function show_answer(answer) {
  document.getElementById("answer").innerHTML = answer;
  document.getElementById("refresh_span").innerHTML = '<button type="button" name="refresh_button" onclick="refresh()">Refresh.</button>';
}

function refresh() {
  main();
}

function main() {
  numbers = [];
  for(var i=0;i<10;i++){
    number = getRandomInt(1, 100);
    numbers[i] = number;
  }

  document.getElementById("numbers").innerHTML = numbers.join("+") + "=...";
  document.getElementById("answer").innerHTML = "";
  document.getElementById("refresh_span").innerHTML = "";
}

main()
