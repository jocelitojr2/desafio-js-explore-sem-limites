function exerciseOne() {
  alert("Hello World!")
}


function exerciseTwo() {
  const a = 2;
  const b = 2;

  alert(a+b)
}

function exerciseThree() {
  const a = 2;

  if (typeof(a) === "number") {
    alert('É um número')
  } else {
    alert('Não é um número')
  }
}

function exerciseFour() {
  const a = "2";

  if (typeof(a) === "string") {
    alert('É uma string')
  } else {
    alert('Não é uma string')
  }
}

function exerciseFive() {
  const a = true;

  if (typeof(a) === "boolean") {
    alert("É um booleano")
  } else {
    alert("Não é um booleano")
  }
  
}

function exerciseSix() {
  const a = 10;
  const b = 5;

  alert(a - b)
}


function exerciseSeven() {
  const a = 5;
  const b = 10;

  alert(a * b)
}

function exerciseEight() {
  const a = 20;
  const b = 4;

  alert(a / b)
}

function exerciseNineAndTen() {
  const a = prompt("Digite um numero");
  const result = a % 2;

  if (result == 0) {
    alert(`${a} É um número par`)
  } else {
    alert(`${a} É um número ímpar`)
  }
}