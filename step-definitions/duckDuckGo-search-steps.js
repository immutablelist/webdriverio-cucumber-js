module.exports = function (){

    this.Then(/^The user arrives on the duckduckgo search page$/, function() {
        return helpers.loadPage(page.duckDuckGoSearch.url, 10)
    });

    this.Then(/^they input (.*)$/, function(searchWord) {

            /** use a method on the page object which also returns a promise */
            return page.duckDuckGoSearch.performSearch(searchWord);
    });

    this.Then(/^they should see some results$/, function() {

            /** return the promise of an element to the following then */
            return driver.element('div.g').then(function(elements){

                /** verify this element has children */
                expect(elements.length).to.not.equal(0);
            }).then(function(){
                "use strict";
                // return helpers.cssImages('search')
            })
    });

};