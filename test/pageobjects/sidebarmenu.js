module.exports = class SideBarMenu {

    get elementsMenuItem() {
        return $('//div[contains(text(),"Elements")]');
    }

    get textBoxElementsMenuItem() {
        return $('//li/span[contains(text(),"Text Box")]');
    }

    get checkBoxElementsMenuItem() {
        return $('//li/span[contains(text(),"Check Box")]');
    }

    get radioButtonElementsMenuItem() {
        return $('//li/span[contains(text(),"Radio Button")]');
    }

    get webTablesElementsMenuItem() {
        return $('//li/span[contains(text(),"Web Tables")]');
    }

    get buttonsElementsMenuItem() {
        return $('//li/span[contains(text(),"Buttons")]');
    }

    get linksElementsMenuItem() {
        return $('//li/span[contains(text(),"Links")]');
    }

    get brokenLinksImagesElementsMenuItem() {
        return $('//li/span[contains(text(),"Broken Links - Images")]');
    }

    get uploadDownloadElementsMenuItem() {
        return $('//li/span[contains(text(),"Upload and Download")]');
    }

    get dynamicPropertiesElementsMenuItem() {
        return $('//li/span[contains(text(),"Dynamic Properties")]');
    }


    async openTextBoxPage() {
        await this.elementsMenuItem.click();
        await this.textBoxElementsMenuItem.click();
    }

    async openCheckBoxPage() {
        await this.elementsMenuItem.click();
        await this.checkBoxElementsMenuItem.click();
    }

    async openRadioButtonPage() {
        await this.elementsMenuItem.click();
        await this.radioButtonElementsMenuItem.click();
    }

    async openWebTablesPage() {
        await this.elementsMenuItem.click();
        await this.webTablesElementsMenuItem.click();
    }

    async openButtonsPage() {
        await this.elementsMenuItem.click();
        await this.buttonsElementsMenuItem.click();
    }

    async openLinksPage() {
        await this.elementsMenuItem.click();
        await this.linksElementsMenuItem.click();
    }

    async openBrokenLinksPage() {
        await this.elementsMenuItem.click();
        await this.brokenLinksImagesElementsMenuItem.click();
    }

    async openUploadDownloadPage() {
        await this.elementsMenuItem.click();
        await this.uploadDownloadElementsMenuItem.click();
    }

    async openDynamicPropertiesPage() {
        await this.elementsMenuItem.click();
        await this.dynamicPropertiesElementsMenuItem.click();
    }

}