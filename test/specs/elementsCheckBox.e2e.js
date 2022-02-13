const CheckBoxPage = require('../pageobjects/checkbox.page');
before('maximize browser', async () => {
    await browser.maximizeWindow();
    await CheckBoxPage.open();
});

describe('Click on every checkbox', () => {

    it('should click on checkboxes (set checked)- Desktop, Documents, Downloads', async () => {
        await CheckBoxPage.open();
        await CheckBoxPage.toggleButton.click();
        /** next forEach() method not recommended to use with async-await
         * https://gist.github.com/joeytwiddle/37d2085425c049629b80956d3c618971
         * */
        await CheckBoxPage.expandedCheckboxes.forEach( (elem) => {
            elem.$('label').click();
        });
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('desktop');
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('documents');
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('downloads');
    });
    it('should click on checkboxes (set unchecked)- Desktop, Documents, Downloads', async () => {
        /** instead of forEach() method recommended use for loop with async-await*/
        for( const elem of await CheckBoxPage.expandedCheckboxes)
        {
            await elem.$('label').click();
        }
        await expect(CheckBoxPage.checkBoxResult).not.toBeExisting();
    });
    it('should click on main checkbox (set checked Home) - Desktop, Documents, Downloads', async () => {
        await CheckBoxPage.checkBoxHome.click()
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('desktop');
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('documents');
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('downloads');
    });
    it('should click on main checkbox (set unchecked Home) -uncheck Desktop, Documents, Downloads', async () => {
        await CheckBoxPage.checkBoxHome.click()
        await expect(CheckBoxPage.checkBoxResult).not.toBeExisting();
    });
    it('should click on Documents checkbox (set checked only Documents)', async () => {
        await CheckBoxPage.checkBoxDocuments.click()
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('documents');
    });
    it('should click on Documents checkbox (set unchecked Documents)', async () => {
        await CheckBoxPage.checkBoxDocuments.click()
        await expect(CheckBoxPage.checkBoxResult).not.toBeExisting();
    });
    it('should click on Documents and Downloads checkboxes (set checked except Desktop)', async () => {
        await CheckBoxPage.checkBoxDocuments.click()
        await CheckBoxPage.checkBoxDownloads.click()
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('documents');
    });
    it('should click on Documents and Downloads checkboxes (set unchecked all)', async () => {
        await CheckBoxPage.checkBoxDocuments.click()
        await CheckBoxPage.checkBoxDownloads.click()
        await expect(CheckBoxPage.checkBoxResult).not.toBeExisting();
    });
    it('should click on Desktop and Downloads checkboxes (set checked except Documents)', async () => {
        await CheckBoxPage.checkBoxDesktop.click()
        await CheckBoxPage.checkBoxDownloads.click()
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('desktop');
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('downloads');
    });
    it('should click on  Downloads checkbox (set unchecked all except Desktop)', async () => {
        await CheckBoxPage.checkBoxDownloads.click()
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('desktop');
    });
    it('should click on  Downloads checkbox (set unchecked all)', async () => {
        await CheckBoxPage.checkBoxDesktop.click()
        await expect(CheckBoxPage.checkBoxResult).not.toBeExisting();
    });
    it('should click on Notes and Commands checkboxes (set checked)', async () => {
        await CheckBoxPage.toggleButtonDesktop.click()
        await CheckBoxPage.checkBoxNotes.click()
        await CheckBoxPage.checkBoxCommands.click()
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('notes');
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('commands');
    });
    it('should click on Notes and Commands checkboxes (set unchecked)', async () => {
        await CheckBoxPage.checkBoxNotes.click()
        await CheckBoxPage.checkBoxCommands.click()
        await expect(CheckBoxPage.checkBoxResult).not.toBeExisting();
    });

});


