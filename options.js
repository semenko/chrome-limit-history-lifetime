/*
 Author: Nick Semenkovich <semenko@alum.mit.edu>
 License: MIT
 */

"use strict";


var select = document.getElementById("selectHistoryLimit");

// Add days 1-60
for (var i=1; i<=60; i++){
    select.options[select.options.length] = new Option(i);
}

// Default to 4 if LSO isn't set
var historyLimit = JSON.parse(localStorage.historyLimit || 4);
select.selectedIndex = historyLimit - 1;  // Zero indexed.


// Called when the select is changed by the user.
function updateLimit() {
    localStorage.historyLimit = select.selectedIndex + 1; // Zero indexed.
    var statusBar = document.getElementById("statusBar");
    statusBar.innerHTML = 'Saved.';
    setTimeout(function(){ statusBar.innerHTML = '&nbsp;'; }, 1000);
}

select.addEventListener('change', function() { updateLimit(); }, false);
