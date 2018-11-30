// main.js: This code starts to run after the HTML page is loaded, because of defer attribute in script tag.  
let boardGames = ['Catan', 'Pandemic', 'Ticket to Ride', 'Harbour', 'King of Tokyo', 'Forbidden Island', 'Dragonwood', 'Lost Cities'];  

// Update the title with the total number of games from our array length  
document.getElementById('ListTitle').textContent = "Top " + boardGames.length + " Board Games"  

// Retrieve the ordered list element (ol) so we can add list items (li)
let listParent = document.querySelector('.TopTen');  

boardGames.forEach((game) => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(game));
    console.log(li);
    li.className = 'Game-Item';
    listParent.appendChild(li); 
});  
