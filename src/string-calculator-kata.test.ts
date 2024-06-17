import StringCalculatorKata from './string-calculator-kata'
import 'jest';
import {NegativeNumberExpectation} from './negetive-number-expecation';


describe("String Calculator Kata", () => {
    const stringCalculatorKata = new StringCalculatorKata();

    test('return 0 for an empty string', () => {
        expect(stringCalculatorKata.add('')).toBe(0);
    });

    test('disallow negative numbers', () => {
        expect(() => stringCalculatorKata.add('1,-2,3')).toThrow(NegativeNumberExpectation);
        expect(() => stringCalculatorKata.add('1,-2,3')).toThrow('negative numbers not allowed -2');
    });

    test('return the number if a single number is received', () => {
        expect(stringCalculatorKata.add('1')).toBe(1);
        expect(stringCalculatorKata.add('5')).toBe(5);
    });

    test('sum the numbers from the string', () => {
        expect(stringCalculatorKata.add('1,2')).toBe(3);
        expect(stringCalculatorKata.add('5,5')).toBe(10);
    })
})