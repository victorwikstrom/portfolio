window.onload = main 


function main() {
  runIntroText()
}

function runIntroText() {
  const introText = [
    "My name is Victor.",
    "Hope you're having a great day so far.",
    "I built this website to show some of my work.",
    "I hope you're gonna like it.",
    "Give me a call if you want to collaborate!"
  ]  
  const textElement = document.getElementById('intro-text')
  let textIndex = -1
  textElement.innerText = 'Hi there!'

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
  setInterval(advanceText, 2000)
}


function setEventListeners() {
  const sectionButton = document.getElementById('section-button')
  sectionButton.addEventListener('click', showSection())
}



