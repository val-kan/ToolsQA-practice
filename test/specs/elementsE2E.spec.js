const Page = require('../pageobjects/page')
const MainPage = require('../pageobjects/main.page')
const TextBoxPage = require('../pageobjects/textbox.page');
const CheckBoxPage = require('../pageobjects/checkbox.page');
const UploadDownloadPage = require('../pageobjects/uploaddownload.page');
const RadioButtonPage = require('../pageobjects/radiobutton.page');
const WebTablesPage = require('../pageobjects/webtables.page');
const Elements = require('../pageobjects/elements.page');
const Links = require('../pageobjects/links.page')
const BrokenLinksImages = require('../pageobjects/brokenlinks.page')
const fetch = require('node-fetch');
const expectChai = require('chai').expect;



before('maximize browser', async () => {
    await browser.maximizeWindow();
    await Elements.open();
});

describe('[ Menu - Text Box ]', () => {
    it('Verify user is landed on Text Box elements page', async () => {
        await Elements.sideBarMenu.openTextBoxPage();
        await expect(TextBoxPage.mainHeader).toHaveTextContaining('Text Box');
    });
    it('User is able to submit text box in the form', async () => {
        await TextBoxPage.inputFullName.setValue('Some name');
        await TextBoxPage.buttonSumbit.scrollIntoView();
        await TextBoxPage.buttonSumbit.click();
        await expect(TextBoxPage.resultName).toHaveTextContaining('Some name');
    });
    it('User is able to submit email text box in the form', async () => {
        await TextBoxPage.inputEmail.setValue('Some@name.com');
        await TextBoxPage.buttonSumbit.scrollIntoView();
        await TextBoxPage.buttonSumbit.click();
        await expect(TextBoxPage.resultEmail).toHaveTextContaining('Some@name.com');
    });
    it('User is able to submit textarea Current Address in the form', async () => {
        await TextBoxPage.textareaCurrentAddress.setValue('current address textarea text');
        await TextBoxPage.buttonSumbit.scrollIntoView();
        await TextBoxPage.buttonSumbit.click();
        await expect(TextBoxPage.resultCurrentAddress).toHaveTextContaining('current address textarea text');
    });
    it('User is able to submit textarea Permanent Address in the form', async () => {
        await TextBoxPage.textareaPermanentAddress.setValue('permanent address textarea text');
        await TextBoxPage.buttonSumbit.scrollIntoView();
        await TextBoxPage.buttonSumbit.click();
        await expect(TextBoxPage.resultPermanentAddress).toHaveTextContaining('permanent address textarea text');
    });
    it('User is able to clear [Full name] text box on the form', async () => {
        await TextBoxPage.inputFullName.clearValue();
        await expect(await TextBoxPage.inputFullName.getValue()).toEqual('');
    });
    it('Name should be removed from the result area after cleaning [Full name] textbox and submitting', async () => {
        await TextBoxPage.buttonSumbit.scrollIntoView();
        await TextBoxPage.buttonSumbit.click();
        await expect(await TextBoxPage.resultName).not.toBeExisting();
    });
    it('User is able to clear [Email] text box on the form', async () => {
        await TextBoxPage.inputEmail.clearValue();
        await expect(await TextBoxPage.inputEmail.getValue()).toEqual('');
    });
    it('Name should be removed from the result area after cleaning [Email] textbox and submitting', async () => {
        await TextBoxPage.buttonSumbit.scrollIntoView();
        await TextBoxPage.buttonSumbit.click();
        await expect(await TextBoxPage.resultEmail).not.toBeExisting();
    });
    it('User is able to clear [Current Address] and [Permanent Address] textarea on the form', async () => {
        await TextBoxPage.textareaCurrentAddress.clearValue();
        await TextBoxPage.textareaPermanentAddress.clearValue();
        await expect(await TextBoxPage.textareaCurrentAddress.getValue()).toEqual('');
        await expect(await TextBoxPage.textareaPermanentAddress.getValue()).toEqual('');
    });
    it('Name should be removed from the result area after cleaning [Email] textbox and submitting', async () => {
        await TextBoxPage.buttonSumbit.scrollIntoView();
        await TextBoxPage.buttonSumbit.click();
        await expect(await TextBoxPage.resultPermanentAddress).not.toBeExisting();
        await expect(await TextBoxPage.resultCurrentAddress).not.toBeExisting();
    });
    it('Custom test - cleaning textarea using browser.keys (keyboard keys)', async () => {
        await TextBoxPage.textareaPermanentAddress.setValue('text');
        await browser.keys(['Control', 'a']);
        await browser.keys('Delete');
        await expect(await TextBoxPage.textareaPermanentAddress.getValue()).toEqual('');
    });
    it('Email validation test - Email text box should not accept invalid email format - only characters', async () => {
        await TextBoxPage.inputEmail.setValue('invalidemailonlytext');
        await TextBoxPage.buttonSumbit.scrollIntoView();
        await TextBoxPage.buttonSumbit.click();
        await expect(TextBoxPage.inputEmail).toHaveAttributeContaining('class', 'field-error')
    });
    it('Email validation test - Email text box should not accept invalid email format -  without domain name e.g .com, .edu, .org, .gov', async () => {
        await TextBoxPage.inputEmail.setValue('invalidemail@nodomain');
        await TextBoxPage.buttonSumbit.scrollIntoView();
        await TextBoxPage.buttonSumbit.click();
        await expect(TextBoxPage.inputEmail).toHaveAttributeContaining('class', 'field-error')
    });
    it('Email validation test - Email text box should not accept invalid email format -  with domain name longer than 3 characters', async () => {
        await TextBoxPage.inputEmail.setValue('invalidemail@nodomain.1234');
        await TextBoxPage.buttonSumbit.scrollIntoView();
        await TextBoxPage.buttonSumbit.click();
        await expect(TextBoxPage.inputEmail).toHaveAttributeContaining('class', 'field-error')
    });
});
describe('[ Menu - Check Box ]', () => {

    it('User is able to click on checkboxes (set checked)- Desktop, Documents, Downloads', async () => {
        await CheckBoxPage.open();
        await CheckBoxPage.toggleButton.click();

        /** next forEach() method not recommended to use with async-await
         * https://gist.github.com/joeytwiddle/37d2085425c049629b80956d3c618971
         * */
        await CheckBoxPage.expandedCheckboxes.forEach((elem) => {
            elem.$('label').click();
        });
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('desktop');
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('documents');
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('downloads');
    });
    it('User is able to click on checkboxes (set unchecked)- Desktop, Documents, Downloads', async () => {
        /** instead of forEach() method recommended use for loop with async-await*/
        for (const elem of await CheckBoxPage.expandedCheckboxes) {
            await elem.$('label').click();
        }
        await expect(CheckBoxPage.checkBoxResult).not.toBeExisting();
    });
    it('User is able to click on main checkbox (set checked Home) - Desktop, Documents, Downloads', async () => {
        await CheckBoxPage.checkBoxHome.click()
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('desktop');
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('documents');
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('downloads');
    });
    it('User is able to click on main checkbox (set unchecked Home) -uncheck Desktop, Documents, Downloads', async () => {
        await CheckBoxPage.checkBoxHome.click()
        await expect(CheckBoxPage.checkBoxResult).not.toBeExisting();
    });
    it('User is able to click on Documents checkbox (set checked only Documents)', async () => {
        await CheckBoxPage.checkBoxDocuments.click()
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('documents');
    });
    it('User is able to click on Documents checkbox (set unchecked Documents)', async () => {
        await CheckBoxPage.checkBoxDocuments.click()
        await expect(CheckBoxPage.checkBoxResult).not.toBeExisting();
    });
    it('User is able to click on Documents and Downloads checkboxes (set checked except Desktop)', async () => {
        await CheckBoxPage.checkBoxDocuments.click()
        await CheckBoxPage.checkBoxDownloads.click()
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('documents');
    });
    it('User is able to click on Documents and Downloads checkboxes (set unchecked all)', async () => {
        await CheckBoxPage.checkBoxDocuments.click()
        await CheckBoxPage.checkBoxDownloads.click()
        await expect(CheckBoxPage.checkBoxResult).not.toBeExisting();
    });
    it('User is able to click on Desktop and Downloads checkboxes (set checked except Documents)', async () => {
        await CheckBoxPage.checkBoxDesktop.click()
        await CheckBoxPage.checkBoxDownloads.click()
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('desktop');
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('downloads');
    });
    it('User is able to click on  Downloads checkbox (set unchecked all except Desktop)', async () => {
        await CheckBoxPage.checkBoxDownloads.click()
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('desktop');
    });
    it('User is able to click on  Downloads checkbox (set unchecked all)', async () => {
        await CheckBoxPage.checkBoxDesktop.click()
        await expect(CheckBoxPage.checkBoxResult).not.toBeExisting();
    });
    it('User is able to click on Notes and Commands checkboxes (set checked)', async () => {
        await CheckBoxPage.toggleButtonDesktop.click()
        await CheckBoxPage.checkBoxNotes.click()
        await CheckBoxPage.checkBoxCommands.click()
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('notes');
        await expect(CheckBoxPage.checkBoxResult).toHaveTextContaining('commands');
    });
    it('User is able to click on Notes and Commands checkboxes (set unchecked)', async () => {
        await CheckBoxPage.checkBoxNotes.click()
        await CheckBoxPage.checkBoxCommands.click()
        await expect(CheckBoxPage.checkBoxResult).not.toBeExisting();
    });
    it('verify user can expand all checkboxes', async () => {
        await CheckBoxPage.expandAllButton.click();
        await expect(CheckBoxPage.checkBoxAngular).toBeExisting()
        await expect(CheckBoxPage.checkBoxReact).toBeExisting()
        await expect(CheckBoxPage.checkBoxVeu).toBeExisting()
    });
    it('verify user can collapse all checkboxes', async () => {
        await CheckBoxPage.collapseAllButton.click();
        await expect(CheckBoxPage.checkBoxAngular).not.toBeExisting()
        await expect(CheckBoxPage.checkBoxReact).not.toBeExisting()
        await expect(CheckBoxPage.checkBoxVeu).not.toBeExisting()
    });

});

describe('[ Menu - Radio Button ]', () => {
    it('Verify user landed on Radio Button page', async () => {
        await Elements.sideBarMenu.openRadioButtonPage();
        await expect(RadioButtonPage.mainHeader).toHaveTextContaining('Radio Button');
    });
    it('User can select radio button [Yes] - selection', async () => {
        await RadioButtonPage.labelForYesRadio.click();
        await expect(await RadioButtonPage.radioForYesRadio).toBeSelected();
    });

    it('User can select radio button [Impressive] using label', async () => {
        await RadioButtonPage.labelForImpressiveRadio.click();
        await expect(await RadioButtonPage.radioForYesRadio).not.toBeSelected();
        await expect(await RadioButtonPage.radioForImpressiveRadio).toBeSelected();
    });
    it('User can select radio button [Impressive] using label', async () => {
        await RadioButtonPage.labelForNoRadio.click();
        await expect(await RadioButtonPage.radioForNoRadio).toHaveAttribute('disabled');
        await expect(await RadioButtonPage.radioForNoRadio).not.toBeSelected();
    });
    it('User can select radio button [Yes] - result label', async () => {
        await RadioButtonPage.labelForYesRadio.click();
        await expect(await RadioButtonPage.resultLabel).toHaveTextContaining('You have selected Yes');
    });
    it('User can select radio button [Impressive] - result label', async () => {
        await RadioButtonPage.labelForImpressiveRadio.click();
        await expect(await RadioButtonPage.resultLabel).toHaveTextContaining('You have selected Impressive');
    });
});
describe.skip('!!! need to update [ Menu - Web Tables ]', () => {
    const tableHeaderRow = [];
    it('Verify user landed on Web Tables page', async () => {
        await Elements.sideBarMenu.openWebTablesPage();
        await expect(WebTablesPage.mainHeader).toHaveTextContaining('Web Tables');
    });
    it('Verify table contains header row', async () => {
        const expectedResult = ['First Name', 'Last Name', 'Age', 'Email', 'Salary', 'Department', 'Action']
        for (const elem of await WebTablesPage.tableHeader.$$('div>div[role=columnheader]')) {
            tableHeaderRow.push(await elem.getText());
        }
        await expect(tableHeaderRow).toEqual(expectedResult);
    });
    it('User is able to invoke Registration Form', async () => {
        await WebTablesPage.buttonAdd.click();
        await expect(await WebTablesPage.modalTitle).toHaveText('Registration Form');
    });
    it('User is able to add new record in to the table', async () => {
        const filledRowsAmount1 = (await WebTablesPage.tableAllRows.length) - (await WebTablesPage.tableAllEmptyRows.length);
        await $('#firstName').setValue('Joe');
        await $('#lastName').setValue('Peck');
        await $('#userEmail').setValue('Joe@peck.com');
        await $('#age').setValue('25');
        await $('#salary').setValue('15000');
        await $('#department').setValue('Quality Assurance');
        await $('button#submit').click();
        const filledRowsAmount2 = (await WebTablesPage.tableAllRows.length) - (await WebTablesPage.tableAllEmptyRows.length);
        await expect(filledRowsAmount2 - filledRowsAmount1).toEqual(1);
    });
});


describe.skip('[ Menu - Upload and Download ]', () => {

    it('User is able to upload a file', async () => {
        const fileName = 'dummy.png'
        const fileLocation = 'resources/';
        const remoteFilePath = await browser.uploadFile(fileLocation + fileName)

        await UploadDownloadPage.open();
        await UploadDownloadPage.buttonChooseFile.setValue(remoteFilePath);
        const file = await UploadDownloadPage.labelUploadedFile.getText()
        expect(file).toHaveTextContaining(fileName);
    });
    it('User is able to download a file', async () => {
        await UploadDownloadPage.buttonDownload.click();
        const downloadHref = await UploadDownloadPage.buttonDownload.getAttribute('href')
    });

});
describe('[ Menu - Links ]', () => {

    it('Verify user landed on Links page', async () => {
        await Links.sideBarMenu.openLinksPage();
        await expect(Links.mainHeader).toHaveTextContaining('Links');
    });
    it('Verify simple link "Home" opens and lands on https://demoqa.com in new tab', async () => {
        await Links.linkHome.click();
        await browser.pause(500);    /** use this code if the test fail with a message :"Malformed type for "handle" parameter of command switchToWindow" */
        const handles = await browser.getWindowHandles(); /** get opened browser tabs*/
        //console.log('===>', handles,handles.length);
        await browser.switchToWindow(handles[1]); /** switch into the second browser tab */
        expect(await browser.getUrl()).not.toEqual('https://demoqa.com/links');
        expect(await browser.getUrl()).toEqual('https://demoqa.com/');
        await browser.closeWindow(); /** close opened/active tab  */
        await browser.switchToWindow(handles[0]); /** get back to the previous tab/page */
    });
    it('Verify simple link "Home ZTHbs" opens and lands on https://demoqa.com in new tab', async () => {
        await Links.linkHome.click();
        await browser.pause(500);    /** use this code if the test fail with a message :"Malformed type for "handle" parameter of command switchToWindow" */
        const handles = await browser.getWindowHandles(); /** get opened browser tabs*/
        //console.log('===>', handles,handles.length);
        await browser.switchToWindow(handles[1]); /** switch into the second browser tab */
        expect(await browser.getUrl()).not.toEqual('https://demoqa.com/links');
        expect(await browser.getUrl()).toEqual('https://demoqa.com/');
        await browser.closeWindow(); /** close opened/active tab  */
        await browser.switchToWindow(handles[0]); /** get back to the previous tab/page */
    });
});
describe('[ Menu - Broken Links-Images ]', () => {

    it('Verify user landed on BrokenLinks-Images page', async () => {
        await BrokenLinksImages.sideBarMenu.openBrokenLinksPage();
        await expect( BrokenLinksImages.mainHeader).toHaveTextContaining('Broken Links - Images');
    });
    it('Verify Valid link opens and lands on https://demoqa.com in the same tab', async () => {
        await BrokenLinksImages.linkValid.click();
        expect(await browser.getUrl()).not.toEqual('https://demoqa.com/broken');
        expect(await browser.getUrl()).toEqual('https://demoqa.com/');
    });
    it('Verify Broken link opens and lands on Status Codes page', async () => {
        await browser.back();
        console.log('===>', await browser.getUrl().toString())
        await BrokenLinksImages.linkBroken.scrollIntoView();
        await BrokenLinksImages.linkBroken.click();
        expect(await browser.getUrl()).not.toEqual('https://demoqa.com/broken');
        await browser.back();
    });
    it('Verify the valid link gets a response code below 400', async () => {
        const link = await BrokenLinksImages.linkValid;
        const url =  await link.getAttribute('href');
        const request =  fetch(url);
        const response = await  request;
        const statusCode = response.status;
        expectChai(statusCode).to.be.below(400);
    });
    it('Verify the broken link is invalid/broken', async () => {
        const link = await BrokenLinksImages.linkBroken;
        const url =  await link.getAttribute('href');
        const request =  fetch(url);
        const response = await  request;
        const statusCode = response.status;

        /** depends on what we should verify - link is broken or not?*/
        expectChai(statusCode).to.be.above(400);
        //or
        //expectChai(statusCode).to.be.below(400);
        //expectChai(statusCode).to.be.above(400);
    });
});