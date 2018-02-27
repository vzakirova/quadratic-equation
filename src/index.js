module.exports = function solveEquation(equation) {
  // your implementation

  eqParts = equation.split(/\s\*\s(x)\^?2?\s/); // разделение уравнения на составляющие

  // выделение чисел
  var A = +eqParts[0];
  var B = eqParts[2];
  B = B.split(/ /);
  B = +B.join('');
  var C = eqParts[4];
  C = C.split(/ /);
  C = +C.join('');

  // решение уравнения
  var solution = [];
  const D = Math.sqrt(B*B - 4*A*C);
  var x1 = (-B + D)/(2*A);
  var x2 = (-B - D)/(2*A);
  solution = [Math.round(x1), Math.round(x2)];

  

  solution.sort( function compare(a, b) { return a - b; } );

  return solution;
}
