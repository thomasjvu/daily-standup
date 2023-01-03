// Daily Standup (01/03/2022)
/* Fibonacci Numbers
 * Instructions:
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

Can you solve with a for loop like before the holidays? How about with recursion?

*/

// Solution (For Loop)
const fibonacci = n => {

    let arr = [0, 1]
    let i = 2

    while (i <= n) {
        arr[i] = arr[i - 1] + arr[i-2]
        i++
    }

    return arr[n]

}

// Explanation
// Instantiate the initial array that begins with 0 and 1 (as per Fibonacci rules)
// Instantiate our index, i, which begins at 2
// Use a `while` loop to go through each element from i to n
// Make the current index of the array  
// Increment i for each iteration
// Return the value at the array of index n, which will be the Fibonacci number


// Solution (Recursion)
function fib(n) {
    if (n <= 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {
        return fib(n-1) + fib(n-2)
    }
}

// Explanation
// Use an if..else if..else statement to check multiple conditions
// If n is less than or equal to 0, just return 0 per Fibonacci rules
// If n is 1, then just return 1 per Fibonacci rules
// If n is anything else, recursively do the Fibonacci sequence for values n-1 and n-2
// This will return the Fibonacci number
