window.addEventListener('load', () => main())

/** Run site scripts */
const main = () => {
  setClickEvents()
  setHoverEvents()
  iterateTextArray(introText)
}

/**********
  HTML ELEMENTS 
  (Will be fetched by several functions, hence global)
************/
/** Container element for background section */
 const bgElement = document.getElementById('background-container')
 /** Container element for work section */
 const skillElement = document.getElementById('skill-container')
 /** Container element for work section */
 const workElement = document.getElementById('work-container')
/** Content element for background section */
const bgContent = document.getElementById('background-content')
/** Content element for skill section */
const skillContent = document.getElementById('skill-content')
/** Content element for work section */
const workContent = document.getElementById('work-content')
/** Heading element for background section */
const bgHeadingElement = document.getElementById('background-heading')
/** Heading element for skill section */
const skillHeadingElement = document.getElementById('skill-heading')
/** Heading element for work section */
const workHeadingElement = document.getElementById('work-heading')
/** Icon element for background section */
const bgIconElement = document.getElementById('background-icon')
/** Icon element for skill section */
const skillIconElement = document.getElementById('skill-icon')
/** Icon element for work section */
 const workIconElement = document.getElementById('work-icon')

 /** Determines whether a container is open or closed */
 let containerOpen = false
 
 /** Site introduction text (array of strings) */
 const introText = [
   "Hi there!",
   "Hope you're having a great day so far.",
   "If you haven't already figured out, my name is Victor.",
   "I am an aspiring web developer and digital designer, living in Gothenburg.",
   "I built this site to present myself and some of my recent work...",
   "... in a simple, yet slightly interactive way.",
   "The containers below will let you know alot about me...", 
   "... without even meeting me.", 
   "Pretty good, right? Considering this bloody pandemic and all...", 
   "... anyway, enough of me! Or enough of this text that never seem to stop iterating.", 
   "Have a nice day and make sure to reach out!"
 ]  

/**
 * Loop through array of strings and display one after another 
 * @param {Array} String 
 */
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

  /** Advances the looping through the array */
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
  /**
   * Load string into element
   * @param String that are to be inserted into element
   */
  function loadText(text) {
    textElement.innerText = text
  }
  if (lastIndex) {
    clearInterval(advanceText)
  }
    setInterval(advanceText, 3500)
}

/** Set click event to elements that require JS */
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

/** Set hover event to element that require JS */
const setHoverEvents = () => {
  hoverContainer(bgElement, bgHeadingElement, bgIconElement)
  hoverContainer(workElement, workHeadingElement, workIconElement)
  hoverContainer(skillElement, skillHeadingElement, skillIconElement)
}

 /**
  * Run open/close-animations when element is clicked
  * @param {Element} element Container element
  * @param {Element} content Content element, child of container
  * @param {Element} heading Heading element, child of container
  * @param {Element} icon Icon element, child of container
  */
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

 /**
  * Run animations when element is hovered
  * @param {Element} element Container element
  * @param {Element} heading Heading element, child of container
  * @param {Element} icon Icon element, child of container
  */
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
