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
    get tableBody(){
        return $('div.rt-tbody');
    }
    get tableAllRows(){
        return $$('div.rt-tbody>div[role=rowgroup]');
    }
    get tableAllEmptyRows(){
        return $$('div.rt-tr-group>div.rt-tr.-padRow');
    }
    get modalContentForm(){
        return $('div.modal-content');
    }
    get modalTitle(){
        return $('div#registration-form-modal');
    }

    open() {
        return super.open('webtables');
    }
}

module.exports = new WebTablesPage();
