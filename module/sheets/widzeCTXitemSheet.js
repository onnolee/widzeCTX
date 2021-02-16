export default class widzeCTXitemSheet extends ItemSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 530,
            height: 340,
            classes: ["widzeCTX", "sheet", "item"]
        });
    }

    get template(){
        return `systems/widzeCTX/templates/sheets/${this.item.data.type}-sheet.hbs`;
    }
    getData () {
        const data = super.getData();
        data.config = CONFIG.widzeCTX;
        return data;
    }
}