window.onload = main 


function main() {
  runIntroText()
  setEventListeners()
}

/** Add array of strings and display each string after another */
function runIntroText() {
  const introText = [
    "Hi there!",
    "Hope you're having a great day so far.",
    "Glad you've made it to my site.",
    "If you haven't figured out already, my name is Victor.",
    "I am a web developer and digital designer, based in Gothenburg.",
    "I built this site to showcase some of my work...",
    "... in a simple, yet slightly interactive way.",
    "Hope you'll enjoy it!",
    "And make reach out if you want to collaborate!"
  ]  

  const textElement = document.getElementById('intro-text')
  let textIndex = -1

  if (textElement.innerText === '') {
    textElement.innerText = 'Hi there!'
    textIndex = 0
    advanceText()
  } 
  else {
    advanceText()
  }

  function advanceText() {
    textIndex++
    if (textIndex >= introText.length) {
      textIndex = 0
      loadText[introText[textIndex]]
    }
    loadText(introText[textIndex])
  }
  function loadText(text) {
    textElement.innerText = text
  }
  setInterval(advanceText, 2500)
}

/** Sets all events on the site */
function setEventListeners() {
  const skillElement = document.getElementById('skill-container')
  skillElement.addEventListener('click', () => {
    animateContainer(skillElement)
  })

  const backgroundElement = document.getElementById('background-container')
  backgroundElement.addEventListener('click', () => {
    animateContainer(backgroundElement)
  })
  
  const workElement = document.getElementById('work-container')
  workElement.addEventListener('click', () => {
    animateContainer(workElement)
  })
}

let animateContainer = (element) => {
  let width = 10 
  let height = 7
  
  let growContainer = () => {
    if (width === 70 || height === 40) {
      clearInterval(growContainer)
    } 
    else {
      width += 0.5
      height += 0.5
      element.style.width = width + 'rem'
      element.style.height = height + 'rem'
    }
  }
  
  let id = setInterval(growContainer, 5)
  
}
