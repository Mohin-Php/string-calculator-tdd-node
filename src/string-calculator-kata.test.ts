import StringCalculatorKata from './string-calculator-kata'
import 'jest';


describe("String Calculator Kata", () => {
    const stringCalculatorKata = new StringCalculatorKata();


    test('return 0 if empty string is received', () => {
        expect(stringCalculatorKata.add('')).toBe(0);
    });
    test('if single number is received then return single number', () => {
        expect(stringCalculatorKata.add('1')).toBe(1);
        expect(stringCalculatorKata.add('5')).toBe(5);
    });

    test('sum of two numbers from string', () => {
        expect(stringCalculatorKata.add('1,2')).toBe(3);
        expect(stringCalculatorKata.add('5,5')).toBe(10);
    })

    test('should support different delimiters and handle new lines', () => {
        expect(stringCalculatorKata.add('//;\n1;2')).toBe(3);
        expect(stringCalculatorKata.add('//;\n12;15,17')).toBe(44);
    });

    test('calling Add with a negative number will throw an exception', () => {
        //@todo add expectation wise unit test as well
        expect(() => stringCalculatorKata.add('1,-2,3')).toThrow('negative numbers not allowed -2');
    });
    test('numbers bigger than 1000 should be ignored', () => {
        expect(stringCalculatorKata.add('1001,2')).toBe(2);
    });
    test('add support for delimiters can be of any length', () => {
        expect(stringCalculatorKata.add("//[***]\\n1***2***3")).toBe(6);
        expect(stringCalculatorKata.add("//[*][%]\\n1*2%3")).toBe(6);
    });

})