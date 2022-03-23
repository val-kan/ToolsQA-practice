const Page = require('./page');

class MainPage extends Page {

    get homeBody(){
        return $('div.home-body');
    }


    open() {
        return super.open('');
    }
}

module.exports = new MainPage();