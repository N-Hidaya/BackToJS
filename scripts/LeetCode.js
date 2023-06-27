//Running Sum of 1d array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {

    for (var i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1];

    }
    return nums;

};
//time complexity = 0(n)
//space complexity = 0(1)


//Richest Customer Wealth (2d array)
/**
 * @param {number[][]} accounts
 * @return {number}
 */
//average memory intake 41MB; Runtime = 70ms (fast)
function maximumWealth(accounts) {
    let max_wealth = 0;
    for (let customer = 0; customer < accounts.length; customer++) {
        let total_wealth = accounts[customer].reduce((acc, val) => acc + val, 0);
        max_wealth = Math.max(max_wealth, total_wealth);
    }
    return max_wealth;
}

//FizzBuzz

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let ans = [];
    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            ans.push("FizzBuzz");
        } else if (i % 3 === 0) {
            ans.push("Fizz");
        } else if (i % 5 === 0) {
            ans.push("Buzz");
        } else {
            ans.push(i.toString());
        }
    }
    return ans;
};

//Valid Parentheses
var isValid = function (s) {
    const brackets = []
    const openings = ['(', '{', '[']
    const closings = [')', '}', ']']
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (openings.includes(char)) {
            brackets.push(char)
        } else if (closings.includes(char)) {
            if (brackets.length === 0 || brackets.pop() !== pairs[char]) {
                return false
            }
        }
    }
    return brackets.length === 0;
}

//Number of steps to reduce a number to 0
/**
 * @param {number} num
 * @return {number}
 */
function numberOfSteps(num) {
    let steps = 0;

    while (num !== 0) {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num -= 1;
        }
        steps++;
    }
    return steps;
}

//Time complexity: 0(logn)
//space complexity: 0(1)

console.log(numberOfSteps(14)); // Output: 6

//2390 Removing Stars From a String
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    let ans = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] != "*") {
            ans.push(s[i])
        } else {
            ans.pop()
        }
    }

    return ans.join(``)
}

//516. Longest Palindromic Subsequence
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    const numS = s.length
    const result = new Array(numS).fill(null).map(() => new Array(numS).fill(0))

    for (let i = 0; i < numS; i++) {
        result[i][i] = 1
    }

    for (let i = numS - 2; i >= 0; i--) {
        for (let j = i + 1; j < numS; j++) {
            if (s[i] === s[j]) {
                result[i][j] = result[i + 1][j - 1] + 2
            } else {
                result[i][j] = Math.max(result[i + 1][j], result[i][j - 1])
            }
        }
    }

    return result[0][numS - 1]
};

//1768. Merge Strings Alternately
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    var merged = "";
    var max = (word1.length > word2.length) ? word1 : word2;

    for (var i = 0; i < max.length; i++) {
        if (word1[i]) {
            merged += word1[i];
        }
        if (word2[i]) {
            merged += word2[i];
        }
    }

    return merged;
};

//649. Dota2 Senate
var PredictPartyVictory = function (senate) {
    const R = []
    const D = []
    const n = senate.length

    //Add senators to respective queues
    for (let i = 0; i < n; i++) {
        if (senate[i] == "R") {
            R.push(i)
        } else {
            D.push(i)
        }
    }

    //Simulate the voting process
    while (R.length > 0 && D.length > 0) {
        const rIndex = R.shift();
        const dIndex = D.shift();

        if (rIndex < dIndex) {
            R.push(rIndex + n)
        } else {
            D.push(dIndex + n)
        }
    }

    return R.length > 0 ? "Radiant" : "Dire"
}

//Roman to Integer
var romanToInt = function (s) {
    const romanVal = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const current = romanVal[s[i]]
        const next = romanVal[s[i + 1]]

        if (next && current < next) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }

    return result
};

//Kth largest element in a stream
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k;
    this.heap = new MinHeap();
    nums.forEach(n => this.add(n));
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (this.heap.size() < this.k) {
        this.heap.offer(val);
    } else if (this.heap.peek() < val) {
        this.heap.offer(val);
        this.heap.poll();
    }
    return this.heap.peek();
};

class MinHeap {
    constructor(data = []) {
        this.data = data;
        this.comparator = (a, b) => a - b;
        this.heapify();
    }

    // O(nlog(n))
    heapify() {
        if (this.size() < 2) return;
        for (let i = 1; i < this.size(); i++) {
            this.bubbleUp(i);
        }
    }

    // O(1)
    peek() {
        if (this.size() === 0) return null;
        return this.data[0];
    }

    // O(log(n))
    offer(value) {
        this.data.push(value);
        this.bubbleUp(this.size() - 1);
    }

    // O(log(n))
    poll() {
        if (this.size() === 0) return null;
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return result;
    }

    // O(log(n))
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // O(log(n))
    bubbleDown(index) {
        const lastIndex = this.size() - 1;
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let findIndex = index;
            if (
                leftIndex <= lastIndex &&
                this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
            ) {
                findIndex = leftIndex;
            }
            if (
                rightIndex <= lastIndex &&
                this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
            ) {
                findIndex = rightIndex;
            }
            if (index !== findIndex) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
    }

    // O(1)
    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [
            this.data[index2],
            this.data[index1]
        ];
    }

    // O(1)
    size() {
        return this.data.length;
    }
}



/*These are common for interviews...*/
// Two pointers: one input, opposite ends
// Two pointers: two inputs, exhaust both
// Sliding window
// Build a prefix sum
// Efficient string building
// Linked list: fast and slow pointer
// Reversing a linked list
// Find number of subarrays that fit an exact criteria
// Monotonic increasing stack
// Binary tree: DFS (recursive)
// Binary tree: DFS (iterative)
// Binary tree: BFS
// Graph: DFS (recursive)
// More on LeetCheats