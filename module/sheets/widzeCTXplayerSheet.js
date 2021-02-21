export default class widzeCTXplayerSheet extends ActorSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: "systems/widzeCTX/templates/sheets/player-sheet.hbs",
            classes: ["widzeCTX", "sheet", "player"]
        });
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.widzeCTX;
        data.assets = data.items.filter(function (item) {return item.type == "asset"});
        data.complications = data.items.filter(function (item) {return item.type == "complication"});
        return data;
    }
    
    activateListeners(html) {
        html.find(".item-create").click(this._onItemCreate.bind(this));
        html.find(".inline-edit").change(this._onAssetEdit.bind(this));
        html.find(".value-increase").click(this._onValueIncrease.bind(this));
        html.find(".value-decrease").click(this._onValueDecrease.bind(this));

        super.activateListeners(html);
    }

    _onValueDecrease(event){
        event.preventDefault();
        let element = event.currentTarget;
    }

    _onValueIncrease(event) {
        event.preventDefault();
        let element = event.currentTarget;


    }

    _onAssetEdit(event) {
        event.preventDefault();
        let element = event.currentTarget;
        let itemId = element.closest(".item").dataset.itemId;
        let item = this.items.get(itemId);
        let field = element.dataset.field;

        return item.update({ [field]: element.value });
    }

    _onItemCreate(event) {
        event.preventDefault();
        let element = event.currentTarget;

        let itemData = {
            name: game.i18n.localize("widzeCTX.sheet.newItem"),
            type: element.dataset.type
        }

        return this.createEmbeddedDocuments("Item", [itemData]);

    }
}