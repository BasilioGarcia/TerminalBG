export function examples() {
    document.querySelectorAll('button').forEach(item => {
        item.addEventListener('click', buttonClick);
    });
}

function buttonClick(event) {
    const name = event.target.getAttribute('data-example');
    const dispatcher = {
        'color': exampleColor,
        'bcolor': exampleBcolor,
        'clear': exampleClear,
        'size': exampleSize,
    };

    const exampleFunction = dispatcher[name];

    if (exampleFunction) {
        exampleFunction();
    }
}

function exampleColor () {
    tBG('texto de salida').color("#FF0000")._();
}

function exampleBcolor () {
    tBG('texto de salida').bcolor("blue")._();
}

function exampleClear () {
    tBG().clear();
}

function exampleSize () {
    tBG('texto de salida').size("10rem")._();
}