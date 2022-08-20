const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

 
const titleCased = () => {
  for (let tutorialIndex in tutorials) {
    const singleTutorial = tutorials[tutorialIndex]
    let wordArr = singleTutorial.split(' ');
    let newWordArr = wordArr.map(word => word[0].toUpperCase() + word.slice(1))
    tutorials.push(newWordArr.join(' ')) 
  }
  for (let i = 0; i < 10; i++) {
    tutorials.shift()
  }
  return tutorials
}

