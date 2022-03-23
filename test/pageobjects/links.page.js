const Page = require('./page');
const SideBarMenu = require('../pageobjects/sidebarmenu');

class LinksPage extends Page {
    get mainHeader() {
        return $('div.main-header');
    }

    get sideBarMenu() {
        return new SideBarMenu();
    }

    get captionH5first() {
        return $('(//div[@id="linkWrapper"]/h5)[1]');
    }

    get captionH5second() {
        return $('(//div[@id="linkWrapper"]/h5)[2]');
    }

    get linkHome() {
        return $('#simpleLink');
    }

    get linkHome4f8i() {
        return $('#dynamicLink');
    }

    get linkCreated() {
        return $('#created');
    }

    get linkNoContent() {
        return $('#no-content');
    }

    get linkMoved() {
        return $('#moved');
    }

    get linkBadRequest() {
        return $('#bad-request');
    }

    get linkUnauthorized() {
        return $('#unauthorized');
    }

    get linkForbidden() {
        return $('#forbidden');
    }

    get linkNotFound() {
        return $('#invalid-url');
    }
    get linkResponse() {
        return $('#linkResponse');
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
        return super.open('links');
    }
}

module.exports = new LinksPage();
