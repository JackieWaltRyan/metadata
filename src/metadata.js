import "./style.scss";

import publisherstip from "./images/publishers-tip.png";

import date from "./images/date.png";
import songs from "./images/songs.png";
import writers from "./images/writers.png";

import k2 from "./images/1440.webp";
import k4 from "./images/2160.webp";
import k8 from "./images/4320.webp";

export function createElement(tag, params = {}, actions = () => {
}) {
    try {
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
    } catch (e) {
        console.error(e);
    }
}

export function mobile(value = null) {
    try {
        if (matchMedia("(any-pointer:coarse)").matches) {
            if (value) {
                return (value + "_mobile");
            } else {
                return true;
            }
        } else {
            if (value) {
                return value;
            } else {
                return false;
            }
        }
    } catch (e) {
        console.error(e);
    }
}

export function gui(data) {
    try {
        this.data = data;
        this.gui = {};

        if ((this.gui.root = document.querySelector(this.data.selector))) {
            this.gui.metadata = {
                root: createElement("div", {
                    class: "metadata"
                }, (el) => {
                    this.gui.root.appendChild(el);
                }),

                spoiler: createElement("div", {
                    class: "metadata_spoiler"
                }, (el) => {
                    el.innerText = "Информация об эпизоде";

                    el.addEventListener("click", () => {
                        this.gui.metadata.info.style.display = ((this.gui.metadata.info.style.display === "none") ? "block" : "none");
                    });
                }),

                info: createElement("div", {}, (el) => {
                    el.style.display = "none";
                }),

                publishers: {
                    root: createElement("div", {
                        class: "metadata_publishers"
                    }),

                    img: createElement("img", {
                        class: "metadata_publishers_img",
                        src: publisherstip
                    }),

                    video: createElement("div", {
                        class: "metadata_publishers_items"
                    }, (el) => {
                        el.appendChild(createElement("b", {}, (el) => {
                            el.innerText = "Доступное качество: ";
                        }));
                    }),

                    audio: createElement("div", {
                        class: "metadata_publishers_items"
                    }, (el) => {
                        el.appendChild(createElement("b", {}, (el) => {
                            el.innerText = "Доступные озвучки: ";
                        }));
                    }),

                    subtitle: createElement("div", {
                        class: "metadata_publishers_items"
                    }, (el) => {
                        el.appendChild(createElement("b", {}, (el) => {
                            el.innerText = "Доступные субтитры: ";
                        }));
                    })
                },

                tip2k: createElement("div", {
                    class: "metadata_tip4k",
                }, (el) => {
                    el.appendChild(createElement("img", {
                        class: "metadata_tip4k_img",
                        src: k2,
                        align: "left"
                    }));

                    el.appendChild(createElement("div", {
                        class: mobile.call(this, "metadata_tip4k_h1")
                    }, (el) => {
                        el.innerText = "Это видео в 2K!";
                    }));

                    el.appendChild(createElement("div", {
                        class: mobile.call(this, "metadata_tip4k_h2")
                    }, (el) => {
                        el.innerText = ("Для просмотра в 2K выбери качество \"1440\" в настройках плеера. Не рекомендуется для слабых " + (mobile.call(this) ? "устройств." : "ПК."));
                    }));
                }),

                tip4k: createElement("div", {
                    class: "metadata_tip4k",
                }, (el) => {
                    el.appendChild(createElement("img", {
                        class: "metadata_tip4k_img",
                        src: k4,
                        align: "left"
                    }));

                    el.appendChild(createElement("div", {
                        class: mobile.call(this, "metadata_tip4k_h1")
                    }, (el) => {
                        el.innerText = "Это видео в 4K!";
                    }));

                    el.appendChild(createElement("div", {
                        class: mobile.call(this, "metadata_tip4k_h2")
                    }, (el) => {
                        el.innerText = ("Для просмотра в 4K выбери качество \"2160\" в настройках плеера. Не рекомендуется для слабых " + (mobile.call(this) ? "устройств." : "ПК."));
                    }));
                }),

                tip8k: createElement("div", {
                    class: "metadata_tip4k",
                }, (el) => {
                    el.appendChild(createElement("img", {
                        class: "metadata_tip4k_img",
                        src: k8,
                        align: "left"
                    }));

                    el.appendChild(createElement("div", {
                        class: mobile.call(this, "metadata_tip4k_h1")
                    }, (el) => {
                        el.innerText = "Это видео в 8K!";
                    }));

                    el.appendChild(createElement("div", {
                        class: mobile.call(this, "metadata_tip4k_h2")
                    }, (el) => {
                        el.innerText = ("Для просмотра в 8K выбери качество \"4320\" в настройках плеера. Не рекомендуется для слабых " + (mobile.call(this) ? "устройств." : "ПК."));
                    }));
                }),

                info_data: {
                    root: createElement("div", {
                        class: "metadata_info_root"
                    }),

                    meta: createElement("div", {
                        class: "metadata_info_meta"
                    }),

                    data: createElement("div", {
                        class: mobile.call(this, "metadata_info_data")
                    })
                }
            }

            this.gui.metadata.publishers.root.appendChild(this.gui.metadata.publishers.img);
            this.gui.metadata.publishers.root.appendChild(this.gui.metadata.publishers.video);
            this.gui.metadata.publishers.root.appendChild(this.gui.metadata.publishers.audio);
            this.gui.metadata.publishers.root.appendChild(this.gui.metadata.publishers.subtitle);

            this.gui.metadata.info_data.root.appendChild(this.gui.metadata.info_data.meta);
            this.gui.metadata.info_data.root.appendChild(this.gui.metadata.info_data.data);

            if (mobile.call(this)) {
                this.gui.metadata.info.appendChild(this.gui.metadata.publishers.root);

                this.gui.metadata.info.appendChild(this.gui.metadata.tip8k);
                this.gui.metadata.info.appendChild(this.gui.metadata.tip4k);
                this.gui.metadata.info.appendChild(this.gui.metadata.tip2k);

                this.gui.metadata.info.appendChild(this.gui.metadata.info_data.root);

                this.gui.metadata.root.appendChild(this.gui.metadata.spoiler);
                this.gui.metadata.root.appendChild(this.gui.metadata.info);
            } else {
                this.gui.metadata.root.appendChild(this.gui.metadata.publishers.root);

                this.gui.metadata.root.appendChild(this.gui.metadata.tip8k);
                this.gui.metadata.root.appendChild(this.gui.metadata.tip4k);
                this.gui.metadata.root.appendChild(this.gui.metadata.tip2k);

                this.gui.metadata.root.appendChild(this.gui.metadata.info_data.root);
            }
        } else {
            alert("Не удается найти " + this.data.selector + " элемент.");
        }
    } catch (e) {
        console.error(e);
    }
}

export function init(data) {
    try {
        this.data = data;
        this.root = {};

        let xhr = new XMLHttpRequest();

        xhr.open("GET", this.data.api, true);

        xhr.addEventListener("load", () => {
            if (xhr.status === 200) {
                this.root.data = JSON.parse(xhr.responseText);

                this.root.videoList = this.root.data["videos"].sort((a, b) => {
                    a = parseInt(a, 10);
                    b = parseInt(b, 10);

                    if (a > b) {
                        return -1;
                    }

                    if (a < b) {
                        return 1;
                    }

                    return 0;
                }).map((video) => {
                    return {
                        name: (video + "p")
                    };
                });

                this.root.audioList = this.root.data["dubs"].map((dub) => {
                    return {
                        name: ("[" + dub.lang.toUpperCase() + "] " + dub.name)
                    };
                });

                this.root.subtitleList = this.root.data["subs"].map((sub) => {
                    return {
                        name: ("[" + sub.lang.toUpperCase() + "] " + sub.name)
                    };
                });

                for (let video of this.root.videoList) {
                    try {
                        this.gui.metadata.publishers.video.appendChild(createElement("span", {}, (el) => {
                            el.innerText = (video.name + "; ");
                        }));
                    } catch (e) {
                        console.error(e);
                    }
                }

                for (let audio of this.root.audioList) {
                    try {
                        this.gui.metadata.publishers.audio.appendChild(createElement("span", {}, (el) => {
                            el.innerText = (audio.name + "; ");
                        }));
                    } catch (e) {
                        console.error(e);
                    }
                }

                for (let subtitle of this.root.subtitleList) {
                    try {
                        this.gui.metadata.publishers.subtitle.appendChild(createElement("span", {}, (el) => {
                            el.innerText = (subtitle.name + "; ");
                        }));
                    } catch (e) {
                        console.error(e);
                    }
                }

                if (JSON.stringify(this.root.videoList).includes("4320p")) {
                    this.gui.metadata.tip8k.style.display = "inline-block";
                } else {
                    if (JSON.stringify(this.root.videoList).includes("2160p")) {
                        this.gui.metadata.tip4k.style.display = "inline-block";
                    } else {
                        if (JSON.stringify(this.root.videoList).includes("1440p")) {
                            this.gui.metadata.tip2k.style.display = "inline-block";
                        }
                    }
                }

                this.root.data["releases"].map((releas) => {
                    this.gui.metadata.info_data.meta.appendChild(createElement("div", {
                        class: "metadata_info_meta_item"
                    }, (el) => {
                        el.appendChild(createElement("img", {
                            class: "metadata_info_meta_item_img",
                            src: date,
                            align: "left",
                            title: "Дата премьеры"
                        }));

                        el.appendChild(createElement("span", {}, (el) => {
                            el.innerText = ("[" + releas["countryCode"].toUpperCase() + "] " + new Date(releas["date"]).toLocaleString("ru", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            }));
                        }));
                    }));
                });

                this.root.data["writers"].map((writer) => {
                    this.gui.metadata.info_data.meta.appendChild(createElement("div", {
                        class: "metadata_info_meta_item"
                    }, (el) => {
                        el.appendChild(createElement("img", {
                            class: "metadata_info_meta_item_img",
                            src: writers,
                            align: "left",
                            title: "Сценарий"
                        }));

                        el.appendChild(createElement("span", {}, (el) => {
                            el.innerText = writer;
                        }));
                    }));
                });

                this.root.data["songs"].map((song) => {
                    this.gui.metadata.info_data.meta.appendChild(createElement("div", {
                        class: "metadata_info_meta_item"
                    }, (el) => {
                        el.appendChild(createElement("img", {
                            class: "metadata_info_meta_item_img",
                            src: songs,
                            align: "left",
                            title: "Песни"
                        }));

                        el.appendChild(createElement("span", {}, (el) => {
                            el.innerText = song;
                        }));
                    }));
                });

                let enName = "";
                let ruName = "";
                let ruDesc = "";

                this.root.data["translations"].map((tr) => {
                    if (tr.locale === "en") {
                        enName = tr.title;
                    }

                    if (tr.locale === "ru") {
                        ruName = tr.title;
                        ruDesc = tr.description;
                    }
                });

                this.gui.metadata.info_data.data.appendChild(createElement("span", {
                    class: "metadata_info_data_name"
                }, (el) => {
                    el.innerText = (enName + " (" + ruName + ")");
                }));

                this.gui.metadata.info_data.data.appendChild(createElement("span", {
                    class: "metadata_info_data_description"
                }, (el) => {
                    el.innerText = ruDesc;
                }));

                document.querySelector("head").appendChild(createElement("meta", {
                    name: "description",
                    content: ruDesc
                }));
            } else {
                setTimeout(() => {
                    init.call(this, this.data);
                }, 1000);
            }
        });

        xhr.addEventListener("error", () => {
            setTimeout(() => {
                init.call(this, this.data);
            }, 1000);
        });

        xhr.send();
    } catch (e) {
        console.error(e);
    }
}
