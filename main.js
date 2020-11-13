window.addEventListener('load', () => main())

const main = () => {
  setClickEvents()
  setHoverEvents()
  iterateTextArray(introText)
}

/**********
  HTML ELEMENTS (Will be fetched by several functions)
  ************/
 const skillContent = document.getElementById('skill-content')
 const workContent = document.getElementById('work-content')
 const bgContent = document.getElementById('background-content')
 const skillElement = document.getElementById('skill-container')
 const bgElement = document.getElementById('background-container')
 const workElement = document.getElementById('work-container')
 const exitButton = document.getElementById('exit-icon')
 const bgHeadingElement = document.getElementById('background-heading')
 const skillHeadingElement = document.getElementById('skill-heading')
 const workHeadingElement = document.getElementById('work-heading')
 const bgIconElement = document.getElementById('background-icon')
 const skillIconElement = document.getElementById('skill-icon')
 const workIconElement = document.getElementById('work-icon')

 let containerOpen = false
 
 const introText = [
   "Hi there!",
   "Hope you're having a great day so far.",
   "If you haven't already figured out, my name is Victor.",
   "I am an aspiring web developer and digital designer, based in Gothenburg.",
   "I built this site to present myself and some of my recent work...",
   "... in a simple, yet slightly interactive way.",
   "The containers below will let you know alot about me...", 
   "... without even meeting me.", 
   "Pretty good, right? Considering this bloody pandemic and all...", 
   "... anyway, enough of me! Or enough of this text that never seem to stop iterating.", 
   "Have a nice day and make sure to reach out!"
 ]  

/** Add array of strings and display each string after another */
const iterateTextArray = (array) => {

  const textElement = document.getElementById('intro-text')
  let textIndex = -1
  let lastIndex = false

  if (textElement.innerText === '') {
    textElement.innerText = 'Hi there!'
    textIndex = 1
    advanceText()
  } 
  else {
    advanceText()
  }

  function advanceText() {
    if (textIndex === array.length - 1) {
      loadText(array[textIndex])
      lastIndex = true
    } 
    else {
      textIndex++
      loadText(array[textIndex])
    }
  }
  function loadText(text) {
    textElement.innerText = text
  }
  if (lastIndex) {
    clearInterval(advanceText)
  }
    setInterval(advanceText, 3500)
}

/** Set events to clickable elements that require JS */
const setClickEvents = () => {
  skillElement.addEventListener('click', () => { 
    openAndCloseContainer(skillElement, skillContent, skillHeadingElement, skillIconElement)
  })
  bgElement.addEventListener('click', () => {
    openAndCloseContainer(bgElement, bgContent, bgHeadingElement, bgIconElement)
  })
  workElement.addEventListener('click', () => {
    openAndCloseContainer(workElement, workContent, workHeadingElement, workIconElement)
  })
}

const setHoverEvents = () => {
  hoverContainer(bgElement, bgHeadingElement, bgIconElement)
  hoverContainer(workElement, workHeadingElement, workIconElement)
  hoverContainer(skillElement, skillHeadingElement, skillIconElement)
}

const openAndCloseContainer = (element, content, heading, icon) => {
  if (element.classList.contains('container-open')) {
    content.classList.remove('content-fadein')
    setTimeout( () => { icon.classList.add('icon-visible') }, 300) 
    setTimeout( () => { content.classList.remove('content-visible') }, 300)
    setTimeout( () => { element.classList.remove('container-open') }, 300)
    containerOpen = false
  }
  else {
    element.classList.add('container-open')
    icon.classList.remove('icon-visible')
    setTimeout( () => { content.classList.add('content-visible') }, 100)
    setTimeout( () => { content.classList.add('content-fadein') }, 600)
    heading.classList.add('heading-container-open')
    containerOpen = true
    element.removeEventListener('click', () =>{})
  }
}

const hoverContainer = (element, heading, icon) => {
  element.onmouseenter = () => {
    heading.classList.add('heading-visible')
    icon.classList.add('icon-hover')
  }
  element.onmouseleave = () => {
    if (containerOpen === false){  
      heading.classList.remove('heading-visible', 'heading-container-open')
      icon.classList.add('icon-visible')
      icon.classList.remove('icon-hover')
    }
  }
}
