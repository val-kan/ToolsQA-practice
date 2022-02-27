const Page = require('./page');
const SideBarMenu = require('../pageobjects/sidebarmenu');

class TextBoxPage extends Page {
    get mainHeader() {
        return $('div.main-header');
    }

    get sideBarMenu() {
        return new SideBarMenu();
    }

    get inputFullName() {
        return $('input#userName');
    }

    get inputEmail() {
        return $('input#userEmail');
    }

    get textareaCurrentAddress() {
        return $('textarea#currentAddress');
    }

    get textareaPermanentAddress() {
        return $('textarea#permanentAddress');
    }
    get buttonSumbit() {
        return $('#submit');
    }

    get resultName() {
        return $('p#name');
    }
    get resultEmail() {
        return $('p#email');
    }
    get resultCurrentAddress() {
        return $('p#currentAddress');
    }
    get resultPermanentAddress() {
        return $('p#permanentAddress');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async checkAllCheckboxes() {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('text-box');
    }
}

module.exports = new TextBoxPage();
