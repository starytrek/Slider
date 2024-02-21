const sliderBox = document.querySelector('.slider-box')
const leftBtn = document.querySelector('.btn-left')
const rightBtn = document.querySelector('.btn-right')
const slideNumber = document.querySelector('.slide-info')
const carouselWidth = 800
const totalImages = document.querySelectorAll('.image').length
let index = 0

const updateSlideInfo = () => {
	const slideInfo = document.querySelector('.slide-info')
	if (slideInfo) {
		slideInfo.textContent = `${index + 1}/${totalImages}`
	}
}

const updateButtonAvailability = () => {
	leftBtn.disabled = index === 0
	rightBtn.disabled = index === totalImages - 1
}

const changeSlide = direction => {
	index += direction
	if (index < 0) {
		index = 0
	} else if (index >= totalImages) {
		index = totalImages - 1
	}
	const translation = -index * carouselWidth
	sliderBox.style.transform = `translateX(${translation}px)`
	updateSlideInfo()
	updateButtonAvailability()
}

document.addEventListener('DOMContentLoaded', () => {})

window.addEventListener('load', () => {
	updateSlideInfo()
})

leftBtn.addEventListener('click', () => changeSlide(-1))
rightBtn.addEventListener('click', () => changeSlide(1))

document.addEventListener('keydown', event => {
	if (event.key === 'ArrowLeft') {
		changeSlide(-1)
	} else if (event.key === 'ArrowRight') {
		changeSlide(1)
	}
})

// 1. funkcja zmniająca slajd i tekst 1/5
// 2. funkcja poprzedni slajd
// 3. i następny slajd
// 4. blkowanie i wyszareznie przycisku
// 5. strzałki slajd w lewo czyli funkcja 2. 3.

// Podpowiedzi
// 1. tablica - do obrazków
// 2. indexy tablicy do kolejnych i obiekt Math.min math.max
// 3. css za pomocą JS do rzeczy ruchomych
