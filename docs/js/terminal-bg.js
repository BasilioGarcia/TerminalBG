const templates = {
    '_default': '',
    'matrix': 'color: #00FF41; ' +
        'background-color: #000000; ' +
        'text-shadow: 0 0 3px #00FF41,0 0 5px #00FF41,0 0 5px #00FF41; ' +
        'padding: 200px; ',
}

class TerminalBG {
    constructor() {
        this.templates = templates;
        this._default = '';

    }

    initialize(txt = '') {
        this.txt = txt;
        this.css = '' + this._default;
        return this;
    }

    _() {
        console.log(`%c${this.txt}`, this.css);
    }

    _loadTemplates() {

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

    default(value) {
        this._default = value;
        return this;
    }

    color(value) {
        this.css += `color: ${value}; `;
        return this;
    }

    px(value) {
        this.css += `font-size: ${value}px; `;
        return this;
    }

    save(name) {
        this.templates[name] = this.css;
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
        this.css = this.templates[name];
        return this;
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

/* time, date */

export function terminalBG(txt) {
    if (!TerminalBG.instance) {
        TerminalBG.instance = new TerminalBG();
    }
    return TerminalBG.instance.initialize(txt);
}

if (typeof window !== 'undefined') {
    window.tBG = window.terminalBG = terminalBG;
}