let range = document.querySelector('input[type="range"]');
range.value = 1;
let body = document.querySelector('body');
let theme = document.querySelector('#theme');
let calc = document.querySelector("#calc");
let label = document.querySelector("label");
let screen1 = document.querySelector('input[type="text"]');
let keypad = document.querySelector(".keypad");
let digitsAndOperators = document.querySelectorAll(".digitsAndOperators");
let equale1 = document.querySelector(".equale");
let equaleHover = document.querySelector(".equale:hover");
let delAndreset = document.querySelectorAll(".delAndReset");
let resetHover = document.querySelector(".Reset:hover");


range.addEventListener('input', () => {
    if (range.value == 1) {
        body.style.backgroundColor = "hsl(222, 26%, 31%)";

        theme.style.color = "hsl(0, 0%, 100%)";

        calc.style.color = "hsl(0, 0%, 100%)";

        range.style.backgroundColor = "hsl(223, 31%, 20%)";

        label.style.color = "hsl(0, 0%, 100%)";

        screen1.style.color = "hsl(0, 0%, 100%)";
        screen1.style.backgroundColor = "hsl(224, 36%, 15%)";

        keypad.style.backgroundColor = "hsl(223, 31%, 20%)";

        for (let i = 0; i < digitsAndOperators.length; i++) {
            digitsAndOperators[i].style.color = "hsl(221, 14%, 31%)";
            digitsAndOperators[i].style.backgroundColor = "rgb(240, 240, 240)";
            digitsAndOperators[i].style.borderColor = "rgb(240, 240, 240)";
        }

        equale1.style.backgroundColor = "hsl(6, 63%, 50%)";
        equale1.style.borderLeftColor = "hsl(6, 63%, 50%)";
        equale1.style.borderTopColor = "hsl(6, 63%, 50%)";
        equale1.style.borderBottomColor = "hsl(6, 97%, 47%)";
        equale1.style.color = "hsl(0, 0%, 100%)";

        for(let i = 0; i < delAndreset.length; i++) {
            delAndreset[i].style.backgroundColor = "hsl(225, 21%, 49%)";
            delAndreset[i].style.borderLeftColor = "hsl(225, 21%, 49%)";
            delAndreset[i].style.borderTopColor = "hsl(225, 21%, 49%)";
            delAndreset[i].style.borderBottomColor = "hsl(224deg 64.63% 69.25%)";
        }

    } else if (range.value == 2) {
        body.style.backgroundColor = "hsl(0, 0%, 90%)";

        theme.style.color = "hsl(60, 10%, 19%)";

        calc.style.color = "hsl(60, 10%, 19%)";

        range.style.backgroundColor = "hsl(0, 5%, 81%)";

        label.style.color = "hsl(60, 10%, 19%)";

        screen1.style.color = "hsl(60, 10%, 19%)";
        screen1.style.backgroundColor = "hsl(0, 0%, 93%)";

        keypad.style.backgroundColor = "hsl(0, 5%, 81%)";

        for (let i = 0; i < digitsAndOperators.length; i++) {
            digitsAndOperators[i].style.color = "hsl(60, 10%, 19%)";
            digitsAndOperators[i].style.backgroundColor = "rgb(240, 240, 240)";
            digitsAndOperators[i].style.borderColor = "rgb(240, 240, 240)";
        }

        equale1.style.backgroundColor = "hsl(25, 98%, 40%)";
        equale1.style.borderLeftColor = "hsl(25, 98%, 40%)";
        equale1.style.borderTopColor = "hsl(25, 98%, 40%)";
        equale1.style.borderBottomColor = "hsl(25, 99%, 27%)";
        equale1.style.color = "hsl(0, 0%, 100%)";

        for(let i = 0; i < delAndreset.length; i++) {
            delAndreset[i].style.backgroundColor = "hsl(225, 21%, 49%)";
            delAndreset[i].style.borderLeftColor = "hsl(225, 21%, 49%)";
            delAndreset[i].style.borderTopColor = "hsl(225, 21%, 49%)";
            delAndreset[i].style.borderBottomColor = "hsl(224deg 64.63% 69.25%)";
        }
    } else {

        body.style.backgroundColor = "hsl(268, 75%, 9%)";

        theme.style.color = "hsl(52, 100%, 62%)";

        calc.style.color = "hsl(52, 100%, 62%)";
        
        range.style.backgroundColor = "hsl(268, 71%, 12%)";

        label.style.color = "hsl(52, 100%, 62%)";

        screen1.style.color = "hsl(52, 100%, 62%)";
        screen1.style.backgroundColor = "hsl(268, 71%, 12%)";

        keypad.style.backgroundColor = "hsl(268, 71%, 12%)";

        for(let i = 0; i < digitsAndOperators.length; i++) {
            digitsAndOperators[i].style.borderLeftColor = "hsl(268, 47%, 21%)";
            digitsAndOperators[i].style.borderTopColor = "hsl(268, 47%, 21%)";
            digitsAndOperators[i].style.borderBottomColor = "hsl(290, 70%, 36%)";
            digitsAndOperators[i].style.color = "hsl(52, 100%, 62%)";
            digitsAndOperators[i].style.backgroundColor = "hsl(268, 47%, 21%)";
        }

        equale1.style.backgroundColor = "hsl(176, 100%, 44%)";
        equale1.style.borderLeftColor = "hsl(176, 100%, 44%)";
        equale1.style.borderTopColor = "hsl(176, 100%, 44%)";
        equale1.style.borderBottomColor = "hsl(177, 92%, 70%)";
        equale1.style.color = "hsl(198, 20%, 13%)";

        for(let i = 0; i < delAndreset.length; i++) {
            delAndreset[i].style.backgroundColor = "hsl(281, 89%, 26%)";
            delAndreset[i].style.borderLeftColor = "hsl(281, 89%, 26%)";
            delAndreset[i].style.borderTopColor = "hsl(281, 89%, 26%)";
            delAndreset[i].style.borderBottomColor = "hsl(285, 91%, 52%)";   
        }     
    }
})

digitsAndOperators.forEach(function (element) {
    element.addEventListener("mouseover", function () {
        if (range.value == 1 || range.value == 2) {
            element.style.backgroundColor = "rgb(255, 255, 255, 0.8)";
        }  else {
            element.style.backgroundColor = "rgb(80, 8, 161)";
        }
    });

    element.addEventListener("mouseout", function () {
        if (range.value == 1 || range.value == 2) {
            element.style.backgroundColor = "rgb(240, 240, 240)";
        }  else {
            element.style.backgroundColor = "hsl(268, 47%, 21%)";
        }
    });
});

equale1.addEventListener("mouseover", () => {
    if(range.value == 1) {
        equale1.style.backgroundColor = "hsl(6, 100%, 50%)";
    } else if(range.value == 2) {
        equale1.style.backgroundColor = "rgb(255, 106, 0)";
    } else {
        equale1.style.backgroundColor = "rgb(0, 255, 238)";
    }
})

equale1.addEventListener("mouseout", () => {
    if(range.value == 1) {
        equale1.style.backgroundColor = "hsl(6, 63%, 50%)";
    } else if(range.value == 2) {
        equale1.style.backgroundColor = "hsl(25, 98%, 40%)";
    } else {
        equale1.style.backgroundColor = "hsl(176, 100%, 44%)";
    }
})

delAndreset.forEach((element) => {

    element.addEventListener("mouseover", () => {
        if(range.value == 1 || range.value == 2) {
            element.style.backgroundColor = "hsl(225, 50%, 54%)";
        } else {
            element.style.backgroundColor = "rgb(175, 0, 255)";
        }
    })

    element.addEventListener("mouseout", () => {
        if(range.value == 1 || range.value == 2) {
            element.style.backgroundColor = "hsl(225, 21%, 49%)";
        } else {
            element.style.backgroundColor = "hsl(281, 89%, 26%)";
        }
    })
})

