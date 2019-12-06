// Your code goes here
let nav = document.querySelectorAll("nav a")
nav.forEach(link => {link.addEventListener("mouseenter", (event) => {link.style.fontSize = "2rem";})})
nav.forEach(link => {link.addEventListener("mouseleave", (event) => {link.style.fontSize = "1.6rem";})})
nav.forEach(link => {link.addEventListener("mouseenter", (event) => {link.style.borderBottom = "solid yellow 2px";})})
nav.forEach(link => {link.addEventListener("mouseleave", (event) => {link.style.borderBottom = "none";})})