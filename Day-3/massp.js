const findVowels = (str) => {
    return let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(let char of str.tolowercase()) {
      if(vowels.include(char)) {
        count++
      }
    }
    return count
  }