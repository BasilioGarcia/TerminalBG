export function examples() {
    document.querySelectorAll('button').forEach(item => {
        item.addEventListener('click', buttonClick);
    });
}

function buttonClick(event) {
    const button = event.target;
    console.log(button.getAttribute('data-example'));
}
