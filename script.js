const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

ScrollReveal().reveal(".Jeremmy", {
    ...scrollRevealOption
})

ScrollReveal().reveal(".fashion", {
    ...scrollRevealOption,
    origin:  "left",
    delay: 500,
})

ScrollReveal().reveal(".photography", {
    ...scrollRevealOption,
    origin: "right",
    delay: 1000,

})
ScrollReveal().reveal(".button", {
    ...scrollRevealOption,
    delay: 1500,
})

ScrollReveal().reveal("ul li", {
    ...scrollRevealOption,
    origin: "top",
    interval: 300,
    delay: 2000,
})

ScrollReveal().reveal(".socials a", {
    ...scrollRevealOption,
    origin: "left",
    interval: 500,
    delay: 2500,
})