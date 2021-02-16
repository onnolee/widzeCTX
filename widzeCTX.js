import { widzeCTX } from "./module/config.js";
import widzeCTXitemSheet from "./module/sheets/widzeCTXitemSheet.js";
import widzeCTXplayerSheet from "./module/sheets/widzeCTXplayerSheet.js";

async function preloadHandlebarsTemplates() {
    const templatePaths = [
        "systems/widzeCTX/templates/partials/character-values.hbs",
        "systems/widzeCTX/templates/partials/asset-card.hbs",
        "systems/widzeCTX/templates/partials/asset-block.hbs",
        "systems/widzeCTX/templates/partials/bone-selector.hbs"
    ];

    return loadTemplates(templatePaths);
};

Hooks.once("init", function () {
    console.log("widzeCTX | Getting this show on the road!");

    CONFIG.widzeCTX = widzeCTX;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("widzeCTX", widzeCTXitemSheet, { makeDefault: true});

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("widzeCTX", widzeCTXplayerSheet, { makeDefault: true});

    preloadHandlebarsTemplates();

    Handlebars.registerHelper("times", function (n, content) {
        let result = "";
        for (let i = 0; i < n; ++i) {
            result += content.fn(i);
        }

        return result;
        
    });
});
