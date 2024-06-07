(function(global) {
    class TerminalBG {
        constructor() {
            console.log("TerminalBG constructor");
        }

        initialize(txt) {
            if (txt) {
                this.test3(txt);
            }
            return this;
        }

        test() {
            console.log("TerminalBG test");
            return this;
        }

        test2() {
            console.log("TerminalBG test2");
            return this;
        }

        test3(txt) {
            console.log(txt);
            return this;
        }
    }

    function terminalBG(txt) {
        if (!TerminalBG.instance) {
            TerminalBG.instance = new TerminalBG();
        }
        return TerminalBG.instance.initialize(txt);
    }

    global.tBG = global.terminalBG = terminalBG;

})(window);