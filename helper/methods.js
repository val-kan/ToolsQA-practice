async function createRecordIntoTable(webPage,firstName,lastName, email, age, salary, department){
    webPage.$('#firstName').setValue('Joe');

}
module.exports = {
    createRecordIntoTable
}