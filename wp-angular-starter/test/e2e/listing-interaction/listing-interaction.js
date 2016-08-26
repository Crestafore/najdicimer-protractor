/**
 * Created by SimonaS on 24/08/2016.
 */
var ListingInteraction = function(){

    this.get = function(){
        browser.get('http://localhost:8000/#/listings/');
    };

    this.editListing = function(title, content){
        var listing = element.all(by.css('.box')).get(1);
        listing.click();
        browser.sleep(2000);
        var editButton = element(by.id('editListing'));
        editButton.click();

        var editTitle = element(by.model('listing.title'));
        var editContent = element(by.id('ui-tinymce-0_ifr'));
        var save = element(by.id('editListingSave'));

        editTitle.clear();
        editTitle.sendKeys(title);

        editContent.click().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        editContent.sendKeys(protractor.Key.BACK_SPACE);
        editContent.click().sendKeys(content);
        save.click();
    };

    this.editTitle = function(title){
        var listing = element.all(by.css('.box')).get(1);
        listing.click();
        browser.sleep(2000);
        var editButton = element(by.id('editListing'));
        editButton.click();

        var editTitle = element(by.model('listing.title'));
        var save = element(by.id('editListingSave'));

        editTitle.clear();
        editTitle.sendKeys(title);
        save.click();
    };

    this.editContent = function(content){
        var listing = element.all(by.css('.box')).get(1);
        listing.click();
        browser.sleep(2000);
        var editButton = element(by.id('editListing'));
        editButton.click();

        var editContent = element(by.id('ui-tinymce-0_ifr'));
        var save = element(by.id('editListingSave'));

        editContent.click().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        editContent.sendKeys(protractor.Key.BACK_SPACE);
        editContent.click().sendKeys(content);
        save.click();
    };

    this.deleteListing = function(){
        var listing = element.all(by.css('.box')).get(1);
        listing.click();
        browser.sleep(2000);
        var deleteButton = element(by.id('deleteListing'));
        deleteButton.click();
        browser.sleep(2000);
        var confirm = element(by.id('confirmDelete'));
        confirm.click();
        browser.sleep(1000);
    };
};

module.exports = ListingInteraction;