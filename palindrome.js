
// Check whether given string is palindrome or not.

const isPalindrome = (str) => {
    if (typeof str !== 'string') {
        return 'Please provide valid string input.';
    }
    const lowerCaseStr = str.toLowerCase();
    const updatedStr = lowerCaseStr.replace(/[^a-z]/g, '');
    

    for (let i = 0; i < updatedStr.length / 2; i++) {
        if (updatedStr[i] !== updatedStr[updatedStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome('racecar')); 
