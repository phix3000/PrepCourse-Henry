function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  return num%3===0 && num%5===0?"fizzbuzz": num%3===0?"fizz":num%5===0?"buzz":false;
}

module.exports = fizzBuzz;
