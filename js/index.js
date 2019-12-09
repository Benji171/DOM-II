// Your code goes here
let nav = document.querySelectorAll("nav a")
nav.forEach(link => {link.addEventListener("mouseenter", (event) => {link.style.fontSize = "2rem";})})
nav.forEach(link => {link.addEventListener("mouseleave", (event) => {link.style.fontSize = "1.6rem";})})
nav.forEach(link => {link.addEventListener("mouseenter", (event) => {link.style.borderBottom = "solid yellow 2px";})})
nav.forEach(link => {link.addEventListener("mouseleave", (event) => {link.style.borderBottom = "none";})})
nav.forEach(link => {link.addEventListener("click", (event) => {event.preventDefault()})})

let buttons = document.querySelectorAll(".btn")
buttons.forEach(link => {link.addEventListener("mouseenter", (event) => {link.style.fontSize = "2rem";})})
buttons.forEach(link => {link.addEventListener("mouseleave", (event) => {link.style.fontSize = "1.6rem";})})

let logo = document.querySelector(".logo-heading")
logo.addEventListener("mouseenter", (event) => {logo.style.color = "yellow";})
logo.addEventListener("mouseleave", (event) => {logo.style.color = "black";})

let pics = document.querySelectorAll("img")
pics.forEach(link => {link.addEventListener("mouseenter", (event) => {link.style.opacity = ".5"})})
pics.forEach(link => {link.addEventListener("mouseleave", (event) => {link.style.opacity = "1"})})