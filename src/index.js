let {gui} = require("./metadata");
let {init} = require("./metadata");

class MetaData {
    constructor(data) {
        try {
            gui.call(this, data);

            if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", () => {
                    init.call(this, data);
                });
            } else {
                init.call(this, data);
            }
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = MetaData;
