const Page = require('./page');
const SideBarMenu = require('../pageobjects/sidebarmenu');

class BrokenLinksImagesPage extends Page {
    get mainHeader() {
        return $('div.main-header');
    }

    get sideBarMenu() {
        return new SideBarMenu();
    }

    get captionValidImg() {
        return $('');
    }

    get linkValid() {
        return $('//a[contains(text(),"Valid")]');
    }
    get linkBroken() {
        return $('//a[contains(text(),"Broken")]');
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
        return super.open('broken');
    }
}

module.exports = new BrokenLinksImagesPage();
