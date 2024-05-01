function createElement(tag, params = {}, actions = () => {
}) {
    let el = document.createElement(tag);

    for (let name in params) {
        try {
            el.setAttribute(name, params[name]);
        } catch (e) {
            console.log(e);
        }
    }

    actions(el);

    return el;
}

class MetaDataLoader {
    constructor(data) {
        this.root = {};

        if ((this.root = document.querySelector(data.selector))) {
            this.root.appendChild(createElement("script", {
                type: "text/javascript",
                src: "/_design/jwr/metadata.js"
            }, (el) => {
                el.addEventListener("load", () => {
                    new MetaData({
                        selector: data.selector,
                        api: ("/api/v1/episodes/name/" + data.episodeName)
                    });
                });

                el.addEventListener("error", () => {
                    setTimeout(() => {
                        new MetaDataLoader(data);
                    }, 1000);
                });
            }));
        } else {
            alert("Не удается найти " + data.selector + " элемент.");
        }
    }
}
