const screen = document.getElementsByName("screen")[0];
const buttons = document.getElementsByTagName("input");
const clearbutton = document.getElementsByClassName("clear")[0];
const resultbutton = document.getElementsByClassName("result")[0];

function operatorFunc(button) {
    return screen.value !== '' && /[0-9]/.test(screen.value[screen.value.length-1]) ? screen.value += button.value : screen.value;
}

for (let button of buttons) {
    if (button.getAttribute('class') === 'operator') {
        button.addEventListener("click", () => operatorFunc(button));
    } else if (button.getAttribute('class') === 'number') {
        button.addEventListener("click", () => screen.value += button.value);
    } else if (button.getAttribute('class') === 'dot') {
        button.addEventListener("click", () => operatorFunc(button));
    }
}
clearbutton.addEventListener("click", () => screen.value = '');
resultbutton.addEventListener("click", () => screen.value = eval(screen.value));
