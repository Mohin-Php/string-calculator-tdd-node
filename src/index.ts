import StringCalculatorKata from './string-calculator-kata';

const calculationClass = new StringCalculatorKata();
console.log(calculationClass.add('1,2'))
console.log(calculationClass.add('//;\n1;2'))
console.log(calculationClass.add('//[***]\\n1***2***3'))