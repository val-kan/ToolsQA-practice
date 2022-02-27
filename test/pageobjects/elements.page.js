const Page = require('./page');
const SideBarMenu = require('../pageobjects/sidebarmenu');

class ElementsPage extends Page {

    get mainHeader() {
        return $('div.main-header');
    }

    get sideBarMenu() {
        return new SideBarMenu();
    }

    async getMenuItemByText(text){
        await $(`//li/span[contains(text(),'${text}')]`).click();
    }

    open() {
        return super.open('elements');
    }
}

module.exports = new ElementsPage();