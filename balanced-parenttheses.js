// function isBalancedParentheses(inputString){
//     let bracePosition, stack = [];
//     const balancedParentheses = "()[]{}";

//     for (let index = 0; index < inputString.length; index++) {
//         let element = inputString[index];
//         bracePosition = balancedParentheses.indexOf(element);
//         if( bracePosition === -1){
//             continue;
//         }
//         if (bracePosition % 2 === 0 ) {
//             stack.push(bracePosition + 1);
//         } else {
//             if (stack.length === 0 || stack.pop() !== bracePosition) {
//                 return false;
//             }
//         }

//     }
//     return stack.length === 0;
// }



// isBalancedParentheses("({})");

const isBalancedParentheses = (inputString) => {
    const balancedParentheses = "(){}[]";
    let stack = [];
    for (let index = 0; index < inputString.length; index++) {
        let currentElement = inputString[index],
            bracePosition = balancedParentheses.indexOf(currentElement);

        if (bracePosition === -1) {
            continue;
        }

        if (bracePosition % 2 === 0) {
            stack.push(bracePosition + 1);
        } else {

            if (stack.length === 0 || stack.pop() !== bracePosition) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
isBalancedParentheses("({})");

// count occurance of charater
let countOccurance = (inputStr, targetStr) => {
    let position = 0;
    while (true) {
        let foundPos = inputStr.indexOf(targetStr, position);
        if (foundPos === -1) {
            break;
        }
        alert(foundPos);
        position = foundPos + 1;

    }
}



