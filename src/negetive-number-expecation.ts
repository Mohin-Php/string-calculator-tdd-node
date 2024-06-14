export class NegativeNumberExpectation extends Error {

    constructor(numbers: string) {
        super(`negative numbers not allowed ${numbers}`);
    }
}