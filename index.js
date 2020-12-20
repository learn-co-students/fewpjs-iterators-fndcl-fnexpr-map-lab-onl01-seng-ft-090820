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

//const titleCased1 = () => {
  //return tutorials.map(phrase => {
    //let eachWord = phrase.split(' ')
    //let upperCase = eachWord.map(eachWord => eachWord.charAt(0).toUppercase() + eachWord.slice(1))
    //let newPhrase = upperCase.join(' ')
    //return newPhrase
  //})
//}



const titleCased = () => {
  return tutorials.map(phrase => {
    let words = phrase.split(' ').map( word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return words.join(' ')
  })
}

//function toTitleCase(phrase) {
//  phrase = phrase.split(' ').map(words => {
//    return words.charAt(0).toUpperCase() + words.slice(1)
//  })
//  return phrase.join(' ')
//}
  
