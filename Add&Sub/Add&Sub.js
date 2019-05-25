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

function join_nums(numbers){
  var new_string = "";
  new_string += numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      new_string += "+" + numbers[i];
    } else {
      new_string += numbers[i];
    }
  }
  return new_string;
}

function main() {
  numbers = [];
  numbers_length = 5;
  for(var i=0;i<numbers_length;i++){
    number = getRandomInt(-100, 100);
    numbers[i] = number;
  }

  document.getElementById("numbers").innerHTML = join_nums(numbers) + "=...";
  document.getElementById("answer").innerHTML = "";
  document.getElementById("refresh_span").innerHTML = "";
}

main()
