var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg; 
    }, 

    displayHit: function(location) {
        var cell = document.getElementById(location); 
        cell.setAttribute("class", "hit"); 
    },

    displayMiss: function(location) {
        var cell = document.getElementById(location); 
        cell.setAttribute("class", "miss"); 
    }
}; 

view.displayMiss("00"); 
view.displayHit("06"); 
view.displayMiss("31"); 

view.displayMessage("Is this thing on?"); 