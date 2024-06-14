import {NegativeNumberExpectation} from './negetive-number-expecation';

export default class StringCalculatorKata {

    add(numbers: string) {
        if (numbers === "") {
            return 0;
        }
        const match = numbers.match(/-?\d+/g);
        if (match) {
            const numberArray = match.map((numb) => parseInt(numb));
            const negativeNumbers = numberArray.filter(num => num < 0);
            if (negativeNumbers.length > 0) {
                throw new NegativeNumberExpectation(negativeNumbers.join(','));
            }

            return numberArray.filter((numb) => numb <= 1000)
                .reduce((sum, num) => sum + num, 0);
        }
        return 0;
    }
}