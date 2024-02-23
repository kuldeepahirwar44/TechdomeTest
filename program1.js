function isValid(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of s) {
        if (char in brackets) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (brackets[top] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
