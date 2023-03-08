function parseCount(quantityOfGoods) {
    const result = Number.parseFloat(quantityOfGoods);
    if (!result) {
      throw new Error('Невалидное значение');
    }
    return result;
  }

  function validateCount(count) {
    try {
        return parseCount(count);
    } catch(error) {
        return error;
    }
}

//Задание 2

class Triangle {
    constructor(a, b, c) {
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        const perimeter = this.a + this.b + this.c;
        return perimeter;
    }

    get area() {
        const semiPerimeter = this.perimeter / 2;
        const square = parseFloat(Math.sqrt((semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c))).toFixed(3));
        return square;
    }
}

function getTriangle(a, b, c) {

    try {

        return new Triangle(a, b, c);

    } catch(error) {

        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует"; 
            }

        }

    }

}