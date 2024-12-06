function Incubyte(numbers:string) {
    if(numbers.length === 0) {
        return 0;
    }else if(numbers.length === 1) {
        return parseInt(numbers);
    }else{
        numbers = numbers.replace(/[\n;\/]+/g,',');
        // console.log('*****after treatment*******'+numbers);
        let numArr = numbers.split(',');
        let sum = 0;
        let negNum:number[] = [];
        numArr.forEach((num) => {
            let intConverted = parseInt(num);
            if(intConverted < 0) {
                negNum.push(intConverted);
            }
            sum+=parseInt(num);
        });
        if(negNum.length > 0) {
            throw new Error('Negative numbers are not allowed: ' + negNum.join(','));
        }
        return sum;
    }
}

// console.log('************'+Incubyte('1,2,3'));

describe('Test the Incubyte function', () => {

    test('Verify sum of positive numbers', () => {
        expect(Incubyte('1,2,3')).toBe(6);
    });

    test('Verify sum of any number of positive numbers', () => {
        expect(Incubyte('1,2,3,5,6,7,8,9,10')).toBe(51);
    });

    test('Verify sum of positive numbers with new line delimiter', () => {
        expect(Incubyte('1\n2,3')).toBe(6);
    });

    test('Verify sum of positive numbers with ; delimiter', () => {
        expect(Incubyte('1;2;3')).toBe(6);
    });

    test('Verify sum of positive numbers with multiple type of delimiters', () => {
        expect(Incubyte('1\n;2;3')).toBe(6);
    });

    test('Verify sum of negative numbers', () => {
        expect(()=>Incubyte('-1,-2,-3')).toThrow('Negative numbers are not allowed: -1,-2,-3');
    });

    test('Verify sum of negative and positive numbers case', () => {
        expect(()=>Incubyte('-1,4,-2,5,-3')).toThrow('Negative numbers are not allowed: -1,-2,-3');
    });
});
