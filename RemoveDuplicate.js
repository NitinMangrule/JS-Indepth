// Remove duplicate alphabets from given string

const removeDuplicate = (inputString) => {
    const output = new Set();

    if (typeof inputString !== 'string') {
        return 'Please provide a string.';
    }

    for (let i = 0; i < inputString.length; i++) {
        output.add(inputString[i]);
    }

    return Array.from(output).join('');
};

removeDuplicate('racecar');
removeDuplicate('122222racecar');
