window.addEventListener('load', () => { main() })

const main = () => {
  setClickEvents()
  setHoverEvents()
  runIntroText()
}

/**********
  HTML ELEMENTS (Will be fetched by several functions)
  ************/
 const skillContent = document.getElementById('skill-content')
 const workContent = document.getElementById('work-content')
 const backgroundContent = document.getElementById('background-content')
 const skillElement = document.getElementById('skill-container')
 const backgroundElement = document.getElementById('background-container')
 const workElement = document.getElementById('work-container')
 const backgroundHeadingElement = document.getElementById('background-heading')
 const skillHeadingElement = document.getElementById('skill-heading')
 const workHeadingElement = document.getElementById('work-heading')

 let containerOpen = false

/** Add array of strings and display each string after another */
const runIntroText = () => {
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
    textIndex = 1
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

/** Set events to clickable elements that require JS */
const setClickEvents = () => {
  skillElement.addEventListener('click', () => { 
    openContainer(skillElement, skillContent, skillHeadingElement)
  })
  backgroundElement.addEventListener('click', () => {
    openContainer(backgroundElement, backgroundContent, backgroundHeadingElement)
  })
  workElement.addEventListener('click', () => {
    openContainer(workElement, workContent, workHeadingElement)
  })
}

const setHoverEvents = () => {
  hoverContainer(backgroundElement, backgroundHeadingElement)
  hoverContainer(workElement, workHeadingElement)
  hoverContainer(skillElement, skillHeadingElement)
}

const openContainer = (element, content, heading) => {
  if (element.classList.contains('container-open')) {
    content.classList.remove('content-fadein')
    setTimeout( () => { content.classList.remove('content-visible') }, 300)
    setTimeout( () => { element.classList.remove('container-open') }, 300)
    containerOpen = false
  }
  else {
    element.classList.add('container-open')
    setTimeout( () => { content.classList.add('content-visible') }, 100)
    setTimeout( () => { content.classList.add('content-fadein') }, 600)
    heading.classList.add('heading-container-open')
    containerOpen = true
  }
}

const hoverContainer = (element, heading) => {
  element.onmouseenter = () => {
    heading.classList.add('heading-visible')
  }
  element.onmouseleave = () => {
    if (containerOpen === false){  
      heading.classList.remove('heading-visible', 'heading-container-open')
    }
  }
}
