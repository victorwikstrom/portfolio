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
    "If you haven't already figured out, my name is Victor.",
    "I am an aspiring web developer and digital designer, based in Gothenburg.",
    "I built this site to present myself and some of my recent work...",
    "... in a simple, yet slightly interactive way.",
    "The containers below include everything you need to know about me...", 
    "... without even meeting me.", 
    "Pretty good, right? Considering the pandemic and all...", 
    "... anyway, enough of me! Or at least this text that never seem to stop iterating.", 
    "Have a nice day and make sure to reach out!"
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
    if (textIndex === introText.length - 1) {
      loadText(introText[textIndex])
    } 
    else {
      textIndex++
      loadText(introText[textIndex])
    }
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
  const backgroundContent = document.getElementById('background-content')
  const skillElement = document.getElementById('skill-container')
  const backgroundElement = document.getElementById('background-container')
  const workElement = document.getElementById('work-container')

  skillElement.addEventListener('click', () => openContainer(skillElement, skillContent))
  backgroundElement.addEventListener('click', () => openContainer(backgroundElement, backgroundContent))
  workElement.addEventListener('click', () => openContainer(workElement, workContent))
  skillElement.addEventListener('mouseover', () => hoverContainer(skillElement))
  backgroundElement.addEventListener('mouseover', () => hoverContainer(backgroundElement))
  workElement.addEventListener('mouseover', () => hoverContainer(workElement))
}


const openContainer = (element, content) => {
  if (element.classList.contains('container-open')) {
    content.classList.remove('content-fadein')
    setTimeout( () => { content.classList.remove('content-visible') }, 300)
    setTimeout( () => { element.classList.remove('container-open') }, 300)
  }
  else {
    element.classList.add('container-open')
    setTimeout( () => { content.classList.add('content-visible') }, 100)
    setTimeout( () => { content.classList.add('content-fadein') }, 600)
  }
}

const hoverContainer = (element) => {

}