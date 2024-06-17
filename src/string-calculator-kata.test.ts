import StringCalculatorKata from './string-calculator-kata'
import 'jest';


describe("String Calculator Kata", () => {
    const stringCalculatorKata = new StringCalculatorKata();

    test('return 0 for an empty string', () => {
        expect(stringCalculatorKata.add('')).toBe(0);
    });
})