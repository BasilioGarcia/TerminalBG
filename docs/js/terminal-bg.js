const templates = {
    '_default': {
        'init': templateDefaultInit,
        'finish': templateDefaultFinish,
    },
    'matrix': {
        'init': templateMatrixInit,
        'finish': templateMatrixFinish,
    }
}

function templateDefaultInit(txt) {
    return tBG(txt, false)
        .bColor('#000')
        .color('#be16e8');
}

function templateDefaultFinish(txt) {
    console.log('finish default');
}

function templateMatrixInit (txt) {

    return tBG(txt)
        .bColor('#000000')
        .color('#00FF41')
        .padding("200px")
        .shadow('0 0 3px #00FF41,0 0 5px #00FF41,0 0 5px #00FF41');

}

function templateMatrixFinish (txt) {
    const date = new Date();

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const milliseconds = date.getMilliseconds().toString().padStart(3, '0');

    const time = `${hours}:${minutes}:${seconds}.${milliseconds}`;

    tBG(`>${time} - ${txt} `);
    console.log('finish matrix');

}

// poner en la documentación que navegadores soportan la propiedad
// padding en firefox necesita display block;
// tBG('Hola mundo!')._().template('matrix')._(); para hacer dibujos como barras
// añadir template al vuelo, sin leer de la constante
// datetime()
// text()
// breakpoint: marca de tiempo con un nombre y luego te dice la diferencia
// el txt crearlo concatenando código y estilos y cada uno cargar un template
// emojis
// border
// br retorno de carro salto de linea
// height
// text-align
// display: flex; height: 50px; align-items: center; justify-content: center;

class TerminalBG {
    constructor() {
        this.templates = templates;
        this._default = (this.templates['_default']['init']) ? this.templates['_default']['init'] : '';
        this._loadFinishes = (this.templates['_default']['finish']) ? [this.templates['_default']['finish']] : [];
        this._array = {};
        this._var = {};
    }

    initialize(txt = '', loadDefault = true) {
        this.txt = txt;
        this.css = 'display: inline-block;';

        if (this._default !== '' && loadDefault === true) {
            this.templates['_default']['init'](this.txt);
        }

        return this;
    }

    _() {

        if (this._loadFinishes.length > 0) {

            this._loadFinishes.forEach((item) => {
                item(this.txt);
            });

        }

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

    bRadius(value) {
        this.css += `border-radius: ${value}; `;
        return this;
    }

    border(value) {
        this.css += `border: ${value}; `;
        return this;
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

    img(url, size = 100) {
        const _img = new Image();
        _img.src = url;
        _img.onload = () => {
            const style = [
                'font-size: 1px;',
                'padding: ' + (_img.height/100*size)/2 + 'px ' + (_img.width/100*size)/2 + 'px;',
                'background: url('+ url +') no-repeat;',
                'background-size: contain;',
                'display: inline-block;',
            ].join(' ');
            console.log('%c ', style + this.css);
        };
    };

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
        if (this.templates[name]['finish'] && !this._loadFinishes.includes(this.templates[name]['finish'])) {
            this._loadFinishes.push(this.templates[name]['finish']);
        }

        return this.templates[name]['init'](this.txt);
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