const carousel = document.querySelector(".carousel"),
leftArrow = document.querySelector(".left-arrow"),
rightArrow = document.querySelector(".right-arrow"),
firstImg = document.querySelector('.carousel img')

let isDragStart = false,
prevPageX,
prevScrollLeft,
firstImgWidth = firstImg.clientWidth + 14,
scrollWidth = carousel.scrollWidth - carousel.clientWidth,
positionDiff,
isDragging = false;

const showHideArrow = () => {
    leftArrow.style.display = carousel.scrollLeft == 0? 'none': 'flex'
    rightArrow.style.display = carousel.scrollLeft == scrollWidth? 'none': 'flex'
}

const dragging = (e) => {
    if(!isDragStart) return
    e.preventDefault()
    carousel.classList.add("dragging")
    isDragging = true
    positionDiff = e.pageX - prevPageX
    carousel.scrollLeft = prevScrollLeft - positionDiff
}

const dragStart = (e) => {
    e.preventDefault()
    isDragStart = true
    carousel.style.cursor = 'grab'
    carousel.style.scrollBehavior = 'auto'
    prevPageX = e.pageX
    prevScrollLeft = carousel.scrollLeft
}

const dragStop = (e) => {
    carousel.style.cursor = 'pointer'
    carousel.style.scrollBehavior = 'smooth'
    if(!isDragging) return
    isDragStart = false
    showHideArrow()
}

leftArrow.addEventListener('click', (e) => {
    carousel.scrollLeft += -firstImgWidth
    setTimeout(() => {
        showHideArrow()
    }, 60)
})
rightArrow.addEventListener('click', (e) => {
    carousel.scrollLeft += firstImgWidth
    setTimeout(() => {
        showHideArrow()
    }, 60)
})

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("touchstart", dragStart)

carousel.addEventListener("mousemove", dragging)
carousel.addEventListener("touchmove", dragStart)

carousel.addEventListener("mouseup", dragStop)
carousel.addEventListener("mouseleave", dragStop)
carousel.addEventListener("touchend", dragStart)