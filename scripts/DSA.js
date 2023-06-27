//Data Structure Algorithms


//Fibonacci sequence
//The last number is always the sum of previous 2 numbers in an array
//BigO = 0(n)
function fibonacci(n) {
    const fib = [0, 1]

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib

}

console.log(fibonacci(2)) //returns [0,1]
console.log(fibonacci(3)) //returns [0,1,1]
console.log(fibonacci(7)) // [0,1,1,2,3,5,8]


//rECURSIVE fIBONACCI SEQUENCE (Bad solution)
// BigO = 0(2^n)
function recursiveFibonacci(n) {
    if (n < 2) {
        return n
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(0)) //0
console.log(recursiveFibonacci(1)) //1
console.log(recursiveFibonacci(6)) //8

// 0(n) - Iterative

//Factorial number
//factorial(5) = 5*4*3*2*1
//BigO = 0(n)
function factorial(n) {
    let result = 1
    for (let i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}
console.log(factorial(0)) // 1
console.log(factorial(1)) //1
console.log(factorial(5)) //120

//Recursive Factorial number
// n! = n * (n-1)!
// BigO = 0(n)

function recursiveFactorial(n) {
    if (n === 0) {
        return 1
    }
    return n * recursiveFactorial(n - 1)
}
console.log(recursiveFactorial(0)) //1
console.log(recursiveFactorial(1)) //1
console.log(recursiveFactorial(5)) //120

//Prime Number
//A natural number greater than 1 that is not a product of 2 smaller natural numbers
//BigO = 0(sqrt(n)) This is more optimal
function isPrime(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(1)) //false
console.log(isPrime(5)) //true
console.log(isPrime(4)) //false

//Power of 2
//An integer is a power of 2 if there exists an integer x such that n === 2^x
// BigO = 0(logn)
function isPowerOfTwo(n) {
    if (n < 1) {
        return false
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2
    }
    return true
}

console.log(isPowerOfTwo(1)) //true
console.log(isPowerOfTwo(2)) //true
console.log(isPowerOfTwo(5)) //false

//Another solution with constant BigO = 0(1)
function isPowerOfTwoBitwise(n) {
    if (n < 1) {
        return false
    }
    return (n & (n - 1)) === 0
}

//Search Algorithms

// Linear Search
// arr = [-5, 2, 10, 4, 6], t=10 returns 2
// BigO = 0(n)
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10)) // 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)) //4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)) //-1

// Binary Search
// Only works on sorted array
// Step 1 find middle element
// Step 2 If target is less than middle element, binary search left half of array
// Step 3 If target is greater than middle element, binary search right half of array
// BigO = 0(logn)
function binarySearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (target === arr[middleIndex]) {
            return middleIndex
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)) //4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)) //3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)) //-1

//Recursive Binary Search
// BigO = 0(logn)
function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) {
        return middleIndex
    }

    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1)
    } else {
        return search(arr, target, middleIndex + 1, rightIndex)
    }
}
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)) //4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)) //3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)) //-1

//find Maximum Greeness
function findMaximumGreenness(a) {
    const n = a.length;

    // Base cases
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return a[0];
    }

    // Initialize dp array
    const arr = new Array(n + 1);
    arr[0] = 0;
    arr[1] = a[0];

    // Calculate maximum greenness using dynamic programming
    for (let i = 2; i <= n; i++) {
        arr[i] = Math.max(arr[i - 1], arr[i - 2] + a[i - 1]);
    }

    return arr[n];
}

// Example usage
const gardenGreenness = [1, 3, 5, 2, 4];
const maximumGreenness = findMaximumGreenness(gardenGreenness);
console.log("Maximum Greenness:", maximumGreenness);


//Garden 
var gardenNoAdj = function (n, greeness) {
    let map = {};
    for (let green of greeness) {
        if (map[green[0]]) map[green[0]].push(green[1]);
        else map[green[0]] = [green[1]];
        if (map[green[1]]) map[green[1]].push(green[0]);
        else map[green[1]] = [green[0]];
    }

    let result = [];
    recursive(1);
    return result;

    function isValid(num, index) {
        if (map[num]) {
            let arr = map[num];
            for (let i = 0; i < arr.length; i++) {
                if (result[arr[i] - 1] == index) return false;
            }
        }
        return true;
    }

    function recursive(num) {
        if (num == n + 1) {
            return true;
        }
        for (let i = 1; i <= n; i++) {
            if (isValid(num, i)) {
                result.push(i);
                if (recursive(num + 1)) {
                    return true;
                }
                result.pop();
            }
        }
        return false;
    }
};

//Human Resocia Test
"use strict";

function main(n, greeness) {
    let g = greeness.length;

    // Base cases
    if (g === 0) {
        return 0;
    } else if (g === 1) {
        return greeness[0];
    }

    // Initialize array
    const arr = new Array(g + 1);
    arr[0] = 0;
    arr[1] = greeness[0];

    // Calculate max greeness
    for (let i = 2; i <= g; i++) {
        arr[i] = Math.max(arr[i - 1], arr[i - 2] + greeness[i - 1]);
    }

    return arr[g];
}

// Example usage
const testCases = [
    { n: 2, greeness: [1, 3] },
    { n: 3, greeness: [2, 4, 1] },
];

for (const testCase of testCases) {
    const maxGreenness = main(testCase.n, testCase.greeness);
    console.log(maxGreenness);
}