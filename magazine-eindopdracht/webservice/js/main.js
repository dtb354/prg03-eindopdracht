window.addEventListener('load', init);
console.log('CLICK ON A WATCH FOR INFO');

// Global variables
let imageList = ['SRPE55K1', 'SNXS79', 'L48014', 'MDV-107-1A2VEF', 'AE-1200WH-1AV', 'A168WEM-2', 'T2N647', 'GA-2100-1A4', 'DW-6900U-1', 'NNQ3000QBE2ASB014'];
let watchData = {
    'SRPE55K1': { name: 'Seiko 5 Sports', price: '$250', description: 'Great GADA watch. Can be worn with a suit but still sporty' },
    'SNXS79': { name: 'Seiko SNXS79', price: '$120', description: 'Great on a jubilee bracelet. Would be perfect, but lacks hand-winding and water-resistance' },
    'L48014': { name: 'Longines Flagship', price: '$1,500', description: 'Dress watch with luxurious dial details' },
    'MDV-107-1A2VEF': { name: 'Casio Duro', price: '$70', description: 'Industry standard budget dive watch with 120-click dive bezel' },
    'AE-1200WH-1AV': { name: 'Casio World Time', price: '$25', description: 'Digital watch with world time feature.' },
    'A168WEM-2': { name: 'Casio Vintage', price: '$50', description: 'Retro design with digital display.' },
    'T2N647': { name: 'Timex Weekender', price: '$40', description: 'Casual watch with interchangeable straps.' },
    'GA-2100-1A4': { name: 'G-Shock GA2100 Casioak', price: '$100', description: 'Durable watch with carbon core guard.' },
    'DW-6900U-1': { name: 'G-Shock DW6900', price: '$70', description: 'Classic G-Shock design with shock resistance.' },
    'NNQ3000QBE2ASB014': { name: 'Norqain Wild One Independence', price: '$5400', description: 'Unorthodox; made with revolutionary materials and ambitous design. Luxury for the gladiatorial athlete' }
};
let watchBox;
let favoriteWatches = [];

function init() {
    // Retrieve the watch box element from the HTML
    watchBox = document.getElementById('watch-box');

    // Click output for watch slot
    watchBox.addEventListener('click', watchBoxClickHandler);

    createWatchBox();
    getFavoriteWatches();
}

// Function to create "watchBox" display
function createWatchBox() {
    for (let i = 0; i < imageList.length; i++) {

        // Create a Watch Slot in the watch box
        const div = document.createElement('div');
        div.classList.add('watch-slot');

        // Create & Append H2 to div
        const h2 = document.createElement('h2');
        h2.innerHTML = imageList[i];
        div.appendChild(h2);

        // Create and append the image
        const img = document.createElement('img');
        const image = imageList[i];
        img.src = `watch_img/${image}.png`; // Ensure images are in the 'watch_img' folder
        img.alt = `Image of ${image}`;
        img.dataset.imageIndex = i.toString();
        div.appendChild(img);

        //Create an "add to favorite" button to each slot
        const favoriteButton = document.createElement('button');
        favoriteButton.innerText = 'Favorite';
        favoriteButton.classList.add('favorite-button');
        favoriteButton.addEventListener('click', favoriteClickHandler);
        div.appendChild(favoriteButton);


        // Append the div to the watch box
        watchBox.appendChild(div);
    }
}



/**
 * Click function to show watch information
 *
 * @param e
 */
function watchBoxClickHandler(e) {
    let target = e.target;

    // Check if the clicked element is an image
    if (e.target.tagName === 'IMG') {
        // Retrieve the image index from the data attribute
        const imageIndex = e.target.dataset.imageIndex;
        const watchKey = imageList[imageIndex];

        // Retrieve the watch information
        const watchInfo = watchData[watchKey];

        // Display the watch information
        document.getElementById('watch-name').innerText = watchInfo.name;
        document.getElementById('watch-price').innerText = `Price: ${watchInfo.price}`;
        document.getElementById('watch-description').innerText = watchInfo.description;

        console.log(watchInfo);
    }
}

// Favorite watches get pulled from local storage, so when page gets refreshed they will still be favorite
function getFavoriteWatches() {
    const favoriteListString = localStorage.getItem('favoriteWatches');
    if (favoriteListString !== null) {
        favoriteWatches = JSON.parse(favoriteListString); // Update the global favoriteWatches array

        // Loop through all favorite watches
        for (let favoriteWatch of favoriteWatches) {
            // Loop through all watch slots
            const watchSlots = document.querySelectorAll('.watch-slot h2');
            watchSlots.forEach(h2 => {
                if (h2.innerText === favoriteWatch) {  // Compare text content
                    h2.closest('.watch-slot').classList.add('favorited');  // Add favorited class
                }
            });
        }
    }
}


function favoriteClickHandler(e) {
    let target = e.target;

    // Check if the clicked element is the "Favorite" button
    if (target.classList.contains('favorite-button')) {
        // Get the parent watch slot div
        const watchSlot = target.closest('.watch-slot');
        const watchID = watchSlot.querySelector('h2').innerText;

        // Toggle the background color of the watch slot (yellow when favorited)
        if (watchSlot) {
            watchSlot.classList.toggle('favorited');
            addFavoriteWatchToLocalStorage(watchID);  // Add to local storage

            // Add or remove the watch from local storage
            if (watchSlot.classList.contains('favorited')) {
                addFavoriteWatchToLocalStorage(watchID);
            } else {
                removeFavoriteWatchFromLocalStorage(watchID);
            }
        }
    }
}

//when a watch gets favorite, they will be added to local storage
function addFavoriteWatchToLocalStorage(watchID) {
    // Add the watch to the favoriteWatches array if it's not already present
    if (!favoriteWatches.includes(watchID)) {
        favoriteWatches.push(watchID);
        localStorage.setItem('favoriteWatches', JSON.stringify(favoriteWatches));
    }
}

function removeFavoriteWatchFromLocalStorage(watchID) {
    // Remove the watch from the favoriteWatches array
    const index = favoriteWatches.indexOf(watchID);

    if (index !== -1) {
        favoriteWatches.splice(index, 1);
        localStorage.setItem('favoriteWatches', JSON.stringify(favoriteWatches));
    }
}







