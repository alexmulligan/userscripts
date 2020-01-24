// ==UserScript==
// @name         Sheets Script
// @namespace    https://github.com/alexmulligan/userscripts/
// @version      0.2
// @description  Add a button to open a specific sheet in Google Sheets
// @author       Alexander Mulligan
// @match        https://docs.google.com/spreadsheets/u/0/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var nel = document.createElement('button');
    nel.innerText = 'Chromebooks';
    nel.setAttribute('id', 'script-btn');
    nel.style = 'color: #5f6368; font-family: "Product Sans",sans-serif; border-radius: 5px;';
    document.getElementsByClassName('gb_0c')[0].insertAdjacentElement('afterend', nel);

    document.getElementById('script-btn').addEventListener("click", function() {
        var items = document.getElementsByClassName('docs-homescreen-list-item-title-value');
        for (var i=0; i<items.length; i++) {
            if (items[i].innerHTML == 'Chromebook List with SN - Updated') {
                var el = items[i].parentElement.parentElement;
            }
        }

        el.click();
    });

})();