const Page = require('./page');
const SideBarMenu = require('../pageobjects/sidebarmenu');

class RadioButtonPage extends Page {
    get mainHeader() {
        return $('div.main-header');
    }

    get sideBarMenu() {
        return new SideBarMenu();
    }

    get labelQuestion() {
        return $('div.mb-3');
    }

    get labelForYesRadio() {
        return $('label[for=yesRadio]');
    }

    get radioForYesRadio() {
        return $('input#yesRadio');
    }

    get labelForImpressiveRadio() {
        return $('label[for=impressiveRadio]');
    }

    get radioForImpressiveRadio() {
        return $('input#impressiveRadio');
    }

    get labelForNoRadio() {
        return $('label[for=noRadio]');
    }

    get radioForNoRadio() {
        return $('input#noRadio');
    }

    get resultLabel() {
        return $('p.mt-3');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    open() {
        return super.open('radio-box');
    }
}

module.exports = new RadioButtonPage();
