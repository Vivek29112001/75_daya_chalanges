// 1071. Greatest Common Divisor of Strings
// Easy
// Topics
// Companies
// Hint
// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
// Example 1:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:
// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:
// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

// using in build function
const gcb = (a, b) => {
    return b === 0 ? a : gcb(b, a % b)
}

const greatestCommon = (str1, str2) => {
    if (str1 + str2 !== str2 + str1) return ""
    return str1.substring(0, gcb(str1.length, str2.length))
}
console.log(greatestCommon("ABCABC", "ABC")) // "ABC"

// without inBuild function

function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  function gcdOfStrings(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
      return "";
    }
  
    const lenGCD = gcd(str1.length, str2.length);
    let result = "";
    
    // Manually build the substring without using substring()
    for (let i = 0; i < lenGCD; i++) {
      result += str1[i];
    }
  
    return result;
  }

  console.log(gcdOfStrings("ABCABC", "ABC")) // "ABC"
  console.log(gcdOfStrings("ABABAB", "ABAB")) // "AB"

