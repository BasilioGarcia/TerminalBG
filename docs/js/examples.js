export function examples() {
    document.querySelectorAll('button').forEach(item => {
        item.addEventListener('click', buttonClick);
    });
}

function buttonClick(event) {
    const name = event.target.getAttribute('data-example');
    const dispatcher = {
        'bcolor': exampleBcolor,
        'bold': exampleBold,
        'clear': exampleClear,
        'color': exampleColor,
        'padding': examplePadding,
        'px': examplePx,
        'rem': exampleRem,
        'shadow': exampleShadow,
        'size': exampleSize,
        'template' : exampleTemplate,
    };

    const exampleFunction = dispatcher[name];

    if (exampleFunction) {
        exampleFunction();
    }
}

function exampleBcolor () {
    tBG('texto de salida').bcolor("blue")._();
}

function exampleBold () {
    tBG('texto de salida').bold()._();
}

function exampleClear () {
    tBG().clear();
}

function exampleColor () {
    tBG('texto de salida').color("#FF0000")._();
}

function examplePadding () {
    tBG('texto de salida').padding("200px")._();
}

function examplePx () {
    tBG('texto de salida').px("26")._();
}

function exampleRem () {
    tBG('texto de salida').rem("20")._();
}

function exampleShadow () {
    tBG('texto de salida').shadow("1px 1px 2px yellow")._();
}
function exampleSize () {
    tBG('texto de salida').size("10rem")._();
}

function exampleTemplate () {
    tBG('texto de salida').template("matrix")._();
}