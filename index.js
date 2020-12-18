const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

let array = [] 
const titleCased = () => {
  array = tutorials.map(tutorial => { 
    let splitString = tutorial.split(" ")
    for (let i = 0; i < splitString.length; i ++) {
        // if (splitString.length[i] < splitString.length) { 
        splitString[i].toLowerCase()
        splitString[i] = splitString[i][0].toUpperCase() + splitString[i].slice(1)
    } 
    return splitString.join(" ")
  // }
  })
  return array
}

// let wordArray = []
// splitString.forEach(word => {
  //   word.toLowerCase() 
  //   wordArray.push(word[0].toUppercase + word.slice(1))
    
  // })