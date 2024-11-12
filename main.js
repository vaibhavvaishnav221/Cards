"use strict"

let carType;

const btnSuv = document.querySelector(".btn-1")
const btnSedan = document.querySelector(".btn-2")
const btnLuxury = document.querySelector(".btn-3")

const overlay = document.querySelector(".overlay")
const modal = document.querySelector(".modal")
const img = document.querySelector(".img")

const SUV_CAR = "./images/suv.jpg"
const SEDAN_CAR = "./images/sedan.jpg"
const LUXURY_CAR = "./images/luxury.jpg"

const hideModal = () => {
    overlay.classList.add("hide")
    modal.classList.add("hide")
}

overlay.addEventListener("click", hideModal)

const setCarType = (type) => {
    carType = type
    overlay.classList.toggle("hide")
    modal.classList.toggle("hide")

    if (carType === "suv") {
        img.setAttribute("src", SUV_CAR)
    } else if (carType === "sedan") {
        img.setAttribute("src", SEDAN_CAR)
    } else {
        img.setAttribute("src", LUXURY_CAR)
    }
}

btnSuv.addEventListener("click", () => {
    setCarType("suv")
})

btnSedan.addEventListener("click", () => {
    setCarType("sedan")
})

btnLuxury.addEventListener("click", () => {
    setCarType("luxury")
})

document.addEventListener("keydown" , function(event) {
    console.log("i am clicked")
    if (event.key === "Escape") {
        hideModal()
    }
})
