const templates = {
    '_default': templateDefault,
    'matrix': templateMatrix,
}

function templateDefault(txt) {
    return tBG(txt, false)
        .bcolor('#000')
        .color('#be16e8');
}

function templateMatrix (txt) {

    return tBG(txt)
        .bcolor('#000000')
        .color('#00FF41')
        .padding("200px")
        .shadow('0 0 3px #00FF41,0 0 5px #00FF41,0 0 5px #00FF41')

}


// sobreescribir default
// añadir template al vuelo
// datetime()
// text()

class TerminalBG {
    constructor() {
        this.templates = templates;
        this._default = (this.templates['_default']) ? this.templates['_default'] : '';
    }

    initialize(txt = '', loadDefault = true) {
        this.txt = txt;
        this.css = '';

        if (this._default !== '' && loadDefault === true) {
            this.templates['_default'](this.txt);
        }

        return this;
    }

    _() {
        console.log(`%c${this.txt}`, this.css);
    }

    bcolor(value) {
        this.css += `background-color: ${value}; `;
        return this;
    }

    bold() {
        return this.weight(700);
    }

    clear() {
        console.clear();
        return this;
    }

    color(value) {
        this.css += `color: ${value}; `;
        return this;
    }

    padding(value) {
        this.css += `padding: ${value}; `;
        return this;
    }

    px(value) {
        this.css += `font-size: ${value}px; `;
        return this;
    }

    shadow(value) {
        this.css += `text-shadow: ${value}; `;
        return this;
    }

    size(value) {
        this.css += `font-size: ${value}; `;
        return this;
    }

    rem(value) {
        this.css += `font-size: ${value}rem; `;
        return this;
    }

    template(name) {
        return this.templates[name](this.txt);
    }

    weight (value = 400) {
        this.css += `font-weight: ${value}; `;
        return this;
    }

    width(value) {
        this.css += `width: ${value}; `;
        return this;
    }

}

export function terminalBG(txt, loadDefault) {
    if (!TerminalBG.instance) {
        TerminalBG.instance = new TerminalBG();
    }
    return TerminalBG.instance.initialize(txt, loadDefault);
}

if (typeof window !== 'undefined') {
    window.tBG = window.terminalBG = terminalBG;
}