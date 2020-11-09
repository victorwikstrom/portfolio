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
  const skillContent = document.getElementById('skill-content')
  const workContent = document.getElementById('work-content')
  const backgroundContent = document.getElementById('background-content'
  const skillElement = document.getElementById('skill-container')
  const backgroundElement = document.getElementById('background-container')
  const workElement = document.getElementById('work-container')

  skillElement.addEventListener('click', () => {
    containerAnimation(skillElement, skillContent)
  })

  backgroundElement.addEventListener('click', () => {
    containerAnimation(backgroundElement, backgroundContent)
  })
  
  workElement.addEventListener('click', () => {
    containerAnimation(workElement, workContent)
  })
}


const containerAnimation = (element, content) => {
  if (element.classList.contains('container-open')) {
    content.classList.remove('content-visible')
    setTimeout( () => { element.classList.remove('container-open') }, 300)
  }
  else {
    element.classList.add('container-open')
    setTimeout( () => { content.classList.add('content-visible') }, 500)
  }
}