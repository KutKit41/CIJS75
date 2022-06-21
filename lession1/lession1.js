/*
  Câu 1: var khai báo một biến có phạm vi trong block? 
  FALSE

  Câu 2: const khai báo một biến có phạm vi trong block? 
  TRUE

  Câu 3: let khai báo một biến có phạm vi trong block? 
  TRUE

  Câu 4: Giá trị sau cùng của obj trong ví dụ sau là gì? 
  {foo: 1, bar: 2}
        
  Câu 5: Kết quả của ví dụ sau đây là gì? 
  The quick brown fox jumps over the lazy dog.

  Câu 6: Giá trị của câu lệnh obj[123] trong ví dụ sau: 
  undefined

  Câu 7: Giá trị của array trong ví dụ sau: 
  ERROR

  Câu 8: Giá trị của a trong ví dụ sau? 
  [1, 23, 4]

  Câu 9: Giá trị của biểu thức sau? 
  3

  Câu 10: Giá trị của a và b với ví dụ sau? 
  a=3 b=12

  Câu 11 Giá trị của obj sau trong ví dụ sau? 
  ERROR

  Câu 12: Giá trị của biểu arr trong ví dụ sau? 
  [2,2,6,4,10]

  Câu 13: Giá trị của total trong ví dụ sau?  
  16
*/

// PROBLEM 1
  const users = [
	  {name: "Angelina Jolie",  age: 8},
	  {name: "Eric Jones",  age: 2},
	  {name: "Paris Hilton",  age: 5},
	  {name: "Kayne West", age: 16},
	  { name: "Bob Ziroll", age: 100}
  ]
  let result = [];
  function insertHTML(users) {
      result = users.map(element => '<div><h1>' + element.name + '</h1><h2>' + element.age + '</h2></div>')
      return result;
  }

// PROBLEM 2
  const students = [
	  { name: 'Lan', gender: 'female' },
	  { name: 'Linh', gender: 'female' },
	  { name: 'Trung', gender: 'male' },
	  { name: 'Peter', gender: 'other' },
      { name: 'Truong', gender: 'male' },
      { name: 'Dung', gender: 'other' },

  ];
  let resultNotFemale = [];
  function filterFemale(students) {
      resultNotFemale = students.filter( element => element.gender !== `female`)
      return resultNotFemale;
  }

// PROBLEM 3
  let strs = ["eat","tea","tan","ate","nat","bat"]
  function group(strs) {
      let result = [];
      if(strs.length === 0){
          return result;
      }
      for(let i=0; i<strs.length; i++){
          let check = true;
          for(let j=0; j<result.length; j++){
              if(result[j].includes(strs[i])){
                  check = false;
              }
          }
          if(check){
              result.push(checkAnagrams(strs, i)); 
          }
      }
      return result;
  }
  function checkAnagrams(aStr, i){
      let anagrams = [];
      anagrams.push(aStr[i]);
      for(let j=0; j<aStr.length; j++){
          if(i !== j){
              if(isAnagram(aStr[i], aStr[j])){
                  anagrams.push(aStr[j]);
              }
          }
      }
      return anagrams;
  }
  function isAnagram(str1, str2) {
      const string1 = str1.split("").sort().join().trim();
      const string2 = str2.split("").sort().join().trim();
      if(string1 === string2){
          return true;
      } 
      return false; 
  }


// PROBLEM 4
  const nums = [];
  function singleNumber(nums) {
      for (i=0; i < nums.length; i++) {
          if ( nums.lastIndexOf(nums[i]) == nums.indexOf(nums[i])) {
              return nums[i];
          }
      }
  }