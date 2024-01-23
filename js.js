let key0 = document.querySelectorAll('.digits')[9];
let key1 = document.querySelectorAll('.digits')[6];
let key2 = document.querySelectorAll('.digits')[7];
let key3 = document.querySelectorAll('.digits')[8];
let key4 = document.querySelectorAll('.digits')[3];
let key5 = document.querySelectorAll('.digits')[4];
let key6 = document.querySelectorAll('.digits')[5];
let key7 = document.querySelectorAll('.digits')[0];
let key8 = document.querySelectorAll('.digits')[1];
let key9 = document.querySelectorAll('.digits')[2];
let dot = document.querySelectorAll('.operator')[2];
let addition = document.querySelectorAll('.operator')[0];
let subtraction = document.querySelectorAll('.operator')[1];
let multiplication = document.querySelectorAll('.operator')[4];
let division = document.querySelectorAll('.operator')[3];
let equaleButton = document.querySelector('.equale');
let screen = document.querySelector('input[type="text"]');
let reset = document.querySelector('.Reset');
let del = document.querySelector('.Del')

let number = "";
let result = "";
let operator;

const adddigits = (i) => {
    if(screen.value.includes("=")) {
        screen.value = `${i}`;
        number = `${i}`;
        result = "";
    } else {
        screen.value += `${i}`;
        number += `${i}`;
    }
}

const addDot = () => {
    if(screen.value.includes("=") && !screen.value.includes(".")) {
        result = `${screen.value.split('= ')[1]}.`;
        screen.value = `${screen.value.split('= ')[1]}.`;
    } else if(!number.includes(".") && !(number.length === 0)) {
        screen.value += ".";
        number += ".";
    }
}

const addOperator = (operatorScreen, operatorResult) => {

    if(screen.value.includes("=")) {
        result = `${screen.value.split('= ')[1]}${operatorResult}`;
        screen.value = `${screen.value.split('= ')[1]} ${operatorScreen} `;
        operator = operatorResult;
    } else if(!isNaN(number[number.length-1])) {
        screen.value += ` ${operatorScreen} `;
        number += operatorResult;
        result += number;
        number = "";
        operator = operatorResult;
    } 
}

const equale = () => {
    result += number;
    number = "";

    if(!isNaN(result[result.length-1])) {
        screen.value += ` = ${eval(result)}`;
    }
}

const resetFun = () => {
    number = "";
    result = "";
    screen.value = "";
}

const delFun = () => {
    if(screen.value.includes('=')) {

    } else if(screen.value.includes('+') || screen.value.includes('-') || screen.value.includes('×') || screen.value.includes('/')) {
        if(screen.value[screen.value.length - 1] == " ") {
            screen.value = screen.value.substring(0,screen.value.length-3);
            number = result.split(`${operator}`)[result.split(`${operator}`).length-2];
            console.log(number);
            result = "";
            console.log(result)
        } else {
            screen.value = screen.value.substring(0,screen.value.length-1);
            number = number.substring(0,screen.value.length-1);
        }
    } else {

    }
}

key0.addEventListener("click", () => {
    adddigits(0);
});

key1.addEventListener("click", () => {
    adddigits(1);
});

key2.addEventListener("click", () => {
    adddigits(2);
});

key3.addEventListener("click", () => {
    adddigits(3);
});

key4.addEventListener("click", () => {
    adddigits(4);
});

key5.addEventListener("click", () => {
    adddigits(5);
});

key6.addEventListener("click", () => {
    adddigits(6);
});

key7.addEventListener("click", () => {
    adddigits(7);
});

key8.addEventListener("click", () => {
    adddigits(8);
});

key9.addEventListener("click", () => {
    adddigits(9);
});

dot.addEventListener("click", addDot)

addition.addEventListener("click", () => {
    addOperator('+','+');
})

subtraction.addEventListener("click", () => {
    addOperator('-','-');
})

multiplication.addEventListener("click", () => {
    addOperator('×','*')
})

division.addEventListener("click", () => {
    addOperator('/','/')
})

equaleButton.addEventListener("click", equale)

reset.addEventListener("click", resetFun)

del.addEventListener("click", delFun)