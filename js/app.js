///// Задача 27 /////

for (let i = 1; i <= 5; i++) {
  let square = i * i;
  console.log(`Квадрат ${i} : ${square}`);
}

////// Задача 28 //////

let num = 1;

while (num <= 100) {
  if (num % 5 === 0) {
    console.log(num);
  }
  num++;
}

////// Задача 29 ///////

for (let i = 1; i <= 10; i++) {
  let result = 3 * i;
  console.log(`${3} * ${i} = ${result}`);
}

////// Задача 30 ///////

let nom = 1;

while (nom <= 50) {
  if (nom % 3 === 0 || nom % 5 === 0) {
    console.log(nom);
  }
  nom++;
}

////// Задача 31 ///////

let sum = 0;

for (let i = 1; i <= 15; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
console.log(`Сумма нечетных чисел от 1-15 = ${sum}`);

////// Задача 32 ///////

let som = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    som += i;
  }
}
console.log(`Сумма чисел кратных 3 и 5 = ${som}`);

////// Задача 33 ///////

let tax = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0 && i % 5 !== 0) {
    console.log(
      `Числа которые делятся на 7 без остатка и не делятся на 5 = ${i}`
    );
  }
}

////// Задача 34 ///////

let tox = 0;

for (let i = 1; i <= 123456789; i++) {
  tox += i;
}
console.log(tox);

////// Задача 35 ///////

let fox = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 1 === 0) {
    console.log(fox);
  }
}

////// Задача 41 ///////

for (let i = 1; i <= 10; i++) {
  for (let b = 1; b <= 10; b++) {
    let otvet = b * i;
    console.log(`${i} * ${b} = ${otvet}`);
  }
}

////// Задача 42 ///////

let tex = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    tex += i;
  }
}
console.log(tex);
