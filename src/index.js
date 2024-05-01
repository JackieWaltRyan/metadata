let {gui} = require("./metadata");
let {init} = require("./metadata");

class MetaData {
    constructor(data) {
        gui.call(this, data);

        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => {
                init.call(this, data);
            });
        } else {
            init.call(this, data);
        }
    }
}

module.exports = MetaData;
