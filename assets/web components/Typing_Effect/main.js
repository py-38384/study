const dynamicText = document.querySelector("h1 span")
const words = ["Love", "Like Art", "The Future", "Everything"]

let wordIndex = 0
let charIndex = 1
let isDeleting = false

const typeEffect = () => {
    const currentWord = words[wordIndex]
    const currentChars = currentWord.substring(0, charIndex)
    dynamicText.textContent = currentChars
    dynamicText.classList.remove("blink")
    if ( !isDeleting && charIndex < currentWord.length ){
        charIndex++
        setTimeout(typeEffect, 200)
    } else if (isDeleting && charIndex > 0){
        charIndex--
        setTimeout(typeEffect, 100)
    } else {
        isDeleting = !isDeleting
        dynamicText.classList.add("blink")
        wordIndex = isDeleting ? wordIndex : (wordIndex + 1) % words.length
        setTimeout(typeEffect, 1200)
    }
}
typeEffect()