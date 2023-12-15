
VanillaTilt.init(document.querySelector(".card"), {
    max: 25,
    speed: 400,
    glare: false,
    'max-glare': 1,
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".card"));
