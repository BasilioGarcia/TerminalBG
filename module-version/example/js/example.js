
export function example () {
    document.querySelector('button').addEventListener('click', buttonClick);
    document.querySelector('select').addEventListener('change', cleanAll);
}

function buttonClick() {
    let v = document.querySelector('select').value;
    //hideAllItems();
    showSelectedItem(v);
    executeExample(v);
}

function cleanAll() {
    hideAllItems();
    //tBG().clean();
}

function hideAllItems() {
    document.querySelectorAll('item').forEach(item => {
        item.style.display = 'none';
    });
}

function showSelectedItem(v) {
    const selectedItem = document.querySelector('#item-' + v);
    if (selectedItem) {
        selectedItem.style.display = 'block';
    }
}

function executeExample(v) {
    const router = {
        1: example1,
        2: example2,
        3: example3,
        4: example4,
        5: example5,
        6: example6,
    };

    const exampleFunction = router[v];

    if (exampleFunction) {
        exampleFunction();
    }
}

function example1() {
    tBG('Hello world!').template('matrix').color('red')._();
}

function example2() {
    tBG('Hello world!').color('#ff0000')._();
}

function example3() {
    tBG('Hello world').bcolor('#0000ff')._();
}

function example4() {
    tBG().clear();
}

function example5() {
    tBG('Example 5').size('200%')._();
}

function example6() {
    tBG('Example 6').bcolor('#0000ff').width('100%')._();
}