const Page = require('./page');

class CheckBoxPage extends Page {

    get mainCheckbox() {
        return $('ol>li');
    }

    get expandedCheckboxes() {
        return $$('ol>li>ol>li');
    }

    get toggleButton() {
        return $('button[title="Toggle"]');
    }

    get expandAllButton() {
        return $('button[title="Expand all"]');
    }

    get checkBoxHome() {
        return $('label[for="tree-node-home"]');
    }

    get checkBoxResult() {
        return $('div#result');
    }

    get checkBoxDesktop() {
        return this.mainCheckbox.$('label[for="tree-node-desktop"]');
    }

    get checkBoxDocuments() {
        return this.mainCheckbox.$('label[for="tree-node-documents"]');
    }

    get checkBoxDownloads() {
        return this.mainCheckbox.$('label[for="tree-node-downloads"]');
    }

    get toggleButtonDesktop() {
        return this.checkBoxDesktop.$('//preceding-sibling::button');
    }

    get toggleButtonDocuments() {
        return this.checkBoxDocuments.$('//preceding-sibling::button');
    }

    get toggleButtonDownloads() {
        return this.checkBoxDownloads.$('//preceding-sibling::button');
    }

    get checkBoxNotes() {
        return $('label[for="tree-node-notes"]');
    }

    get checkBoxCommands() {
        return $('label[for="tree-node-commands"]');
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
        return super.open('checkbox');
    }
}

module.exports = new CheckBoxPage();
