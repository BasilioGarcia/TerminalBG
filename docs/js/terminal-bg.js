const templates = {
    '_default': templateDefault,
    'matrix': templateMatrix,
}

function templateDefault(txt) {
    return tBG(txt, false)
        .bColor('#000')
        .color('#be16e8');
}

function templateMatrix (txt) {

    return tBG(txt)
        .bColor('#000000')
        .color('#00FF41')
        .padding("200px")
        .shadow('0 0 3px #00FF41,0 0 5px #00FF41,0 0 5px #00FF41')

}

// setVar('name', 'value') => luego en el script con eso hace cosas.
// getVar('') o getVars('') variable individual o array? 2 métodos

// tBG('Hola mundo!')._().template('matrix')._(); para hacer dibujos como barras

/* dentro de la función del template un trozo de código, otra función, que se inicie en la salida?

    '_default': {
                'load': templateDefaultLoad,
                'finish': templateDefaultFinish,
                },

*/

// sobreescribir default
// añadir template al vuelo
// datetime()
// text()
// breakpoint: marca de tiempo con un nombre y luego te dice la diferencia

class TerminalBG {
    constructor() {
        this.templates = templates;
        this._default = (this.templates['_default']) ? this.templates['_default'] : '';
        this._array = {};
        this._var = {};
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
        return this;
    }

    bColor(value) {
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

    getArray(name) {
        return this._array[name];
    }

    getVar(name) {
        return this._var[name];
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

    setArray(name, value) {
        if (this._array[name]) {
            this._array[name].push(value);
        } else {
            this._array[name] = [value]
        }
        return this;
    }

    setVar(name, value) {
        this._var[name] = value;
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