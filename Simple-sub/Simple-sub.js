function nl(){
  document.write("</br>");
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sub(numbers) {
  return numbers[0] - numbers[1];
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
  numbers[0] = getRandomInt(1, 1000);
  numbers[1] = getRandomInt(1, numbers[0]);

  document.getElementById("numbers").innerHTML = numbers[0] + "-" + numbers[1] ;
  document.getElementById("answer").innerHTML = "";
  document.getElementById("refresh_span").innerHTML = "";
}

main()
