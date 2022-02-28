const Page = require('./page');
const SideBarMenu = require('../pageobjects/sidebarmenu');

class WebTablesPage extends Page {
    get mainHeader() {
        return $('div.main-header');
    }

    get sideBarMenu() {
        return new SideBarMenu();
    }

    get buttonAdd(){
        return $('#addNewRecordButton');
    }
    get inputSearchBox(){
        return $('#searchBox');
    }
    get tableHeader(){
        return $('div.rt-thead');
    }
    get tableHeaderColumnName(){
        return this.tableHeader.$$('div>div[role=columnheader]')
    }
    open() {
        return super.open('webtables');
    }
}

module.exports = new WebTablesPage();
