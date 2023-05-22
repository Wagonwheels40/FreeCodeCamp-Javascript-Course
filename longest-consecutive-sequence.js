var longestConsecutive = function(nums) {
    if (nums == null || nums.length === 0) {
        return 0;
    }
    
    const set = new Set(nums);
    let max = 0;
    
    for (let num of set) {
        if (set.has(num - 1)) {
            continue;
        }
        
        let currNum = num;
        let currMax = 1;
        
        while (set.has(currNum + 1)) {
            currNum++;
            currMax++;
        }
        
        max = Math.max(max, currMax);
    }
    
    return max;
};

// still doesn't work on leetcode

/* 
// Function to find length of the longest consecutive sequence of strings
var longestConsecutiveStrings = function(strings) {
    if (strings == null || strings.length === 0) {
        return 0;
    }

    const set - new Set(strings);
    let max = 0;

    for (let str of set) {
        if (set.has(str.slice(0, -1))) {
            continue;
        }

        let currStr = str;
        let currMax = 1;

        while (set.has(currStr + 'a')) {
            currStr += 'a';
            currMax++;
        }

        max = Math.max(max, currMax);
    }

    return max;
};

// Sample usage
const words = ['apple', 'banana', 'orange', 'pear', 'kiwi', 'strawberry', 'plum'];
const longestSequenceLength = longestConsecutiveStrings(words);

console.log('Words:', words);
console.log('Length of the longest consecutive sequence of strings:', longestSequenceLength);
*/