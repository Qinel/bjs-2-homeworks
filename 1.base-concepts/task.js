"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let rootFirst;
  // let rootSecond;
  let d = Math.pow(b, 2) - 4 * a * c;

    if (d === 0) {
      rootFirst = -b / (2 * a);
      arr.push(rootFirst);
      console.log(arr);
    } else if (d > 0) {
      rootFirst = (-b + Math.sqrt(d) ) / (2 * a);
      let rootSecond = (-b - Math.sqrt(d) ) / (2 * a);
      arr.push(rootFirst);
      arr.push(rootSecond);
      console.log('Первый корень = ' + arr[0] + 'Второй корень = ' + arr[1]);
    } else {
      console.log('Корней нет');
    }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let bodyCredit;
  let monthPayment;
  let totalAmount;

  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths) 
  ) {
      console.log('Один из параметров сожержит неверное значение');
      return false;
    }

    percent = percent / 100 / 12;
    bodyCredit = amount - contribution;
    monthPayment = (bodyCredit * percent + (percent /  ((Math.pow((1 + percent), countMonths)) - 1)));
    totalAmount = parseFloat((monthPayment * countMonths).toFixed(2));

    return totalAmount;
}