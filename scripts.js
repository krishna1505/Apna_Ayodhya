// document.addEventListener('DOMContentLoaded', function() {
//     const cardsPerPage = 3;
//     const cards = [
//         { imgSrc: 'Images/6.jpg', title: 'Card 1', text: 'This is card 1' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 2', text: 'This is card 2' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 3', text: 'This is card 3' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 4', text: 'This is card 4' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 5', text: 'This is card 5' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 6', text: 'This is card 6' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 7', text: 'This is card 7' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 8', text: 'This is card 8' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 9', text: 'This is card 9' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 10', text: 'This is card 10' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 11', text: 'This is card 11' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 12', text: 'This is card 12' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 13', text: 'This is card 13' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 14', text: 'This is card 14' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 15', text: 'This is card 15' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 16', text: 'This is card 16' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 17', text: 'This is card 17' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 18', text: 'This is card 18' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 19', text: 'This is card 19' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 20', text: 'This is card 20' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 21', text: 'This is card 21' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 22', text: 'This is card 22' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 23', text: 'This is card 23' },
//         { imgSrc: 'Images/6.jpg', title: 'Card 24', text: 'This is card ' },
//     ];

//     const cardContainer = document.getElementById('card-container');
//     const pagination = document.getElementById('pagination');
    
//     let currentPage = 1;

//     function displayCards(page) {
//         cardContainer.innerHTML = '';
//         const start = (page - 1) * cardsPerPage;
//         const end = start + cardsPerPage;
//         const paginatedCards = cards.slice(start, end);

//         paginatedCards.forEach(card => {
//             const cardElement = `
//                 <div class="col-lg-4 col-md-6">
//                     <div class="card">
//                         <img src="${card.imgSrc}" class="card-img-top" alt="${card.title}">
//                         <div class="card-body">
//                             <h5 class="card-title">${card.title}</h5>
//                             <p class="card-text">${card.text}</p>
//                         </div>
//                     </div>
//                 </div>
//             `;
//             cardContainer.innerHTML += cardElement;
//         });
//     }

//     function setupPagination() {
//         pagination.innerHTML = '';
//         const totalPages = Math.ceil(cards.length / cardsPerPage);

//         for (let i = 1; i <= totalPages; i++) {
//             const pageItem = document.createElement('li');
//             pageItem.className = 'page-item';
//             pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
//             pageItem.addEventListener('click', function(event) {
//                 event.preventDefault();
//                 currentPage = i;
//                 displayCards(currentPage);
//                 updatePagination();
//             });
//             pagination.appendChild(pageItem);
//         }
//         updatePagination();
//     }

//     function updatePagination() {
//         const pageItems = pagination.getElementsByClassName('page-item');
//         for (let i = 0; i < pageItems.length; i++) {
//             pageItems[i].classList.remove('active');
//         }
//         pageItems[currentPage - 1].classList.add('active');
//     }

//     displayCards(currentPage);
//     setupPagination();
// });

document.addEventListener('DOMContentLoaded', function() {
    const cardsPerPage = 3;
    const cards = [
        { imgSrc: 'Images/1.jpg', title: 'card 1 ', text: 'This is card 1 This year, the people of Ayodhya managed to create a world record by doing so. For Ayodhya Deepotsav 2023, 25,000 volunteers on the occasion of Choti  Diwali, managed to light 22.5 lakh diyas on the Ram Ki Paidi on the banks of the revered Saryu River' },
        { imgSrc: 'Images/4.jpg', title: 'Card 2', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum!' },
        { imgSrc: 'Images/6.jpg', title: 'Card 3', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum!' },
        { imgSrc: 'Images/10.jpg', title: 'Card 4', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum!' },
        { imgSrc: 'Images/ghaat.jpeg', title: 'Card 5', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum' },
        { imgSrc: 'Images/10.jpg', title: 'Card 6', text: 'This is card 6 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum' },
        { imgSrc: 'Images/sunset.jpg', title: 'Card 7', text: 'This is card 7 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum' },
        { imgSrc: 'Images/6.jpg', title: 'Card 8', text: 'This is card 8 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum' },
        { imgSrc: 'Images/6.jpg', title: 'Card 9', text: 'This is card 9 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum' },
        { imgSrc: 'Images/6.jpg', title: 'Card 10', text: 'This is card 10 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum' },
        { imgSrc: 'Images/6.jpg', title: 'Card 11', text: 'This is card 11 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum' },
        { imgSrc: 'Images/6.jpg', title: 'Card 12', text: 'This is card 12 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum' },
        { imgSrc: 'Images/6.jpg', title: 'Card 13', text: 'This is card 13 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum' },
        { imgSrc: 'Images/6.jpg', title: 'Card 14', text: 'This is card 14 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum' },
        { imgSrc: 'Images/6.jpg', title: 'Card 15', text: 'This is card 15 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum' },
        { imgSrc: 'Images/6.jpg', title: 'Card 16', text: 'This is card 16 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum' },
        { imgSrc: 'Images/6.jpg', title: 'Card 17', text: 'This is card 17 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum' },
        { imgSrc: 'Images/6.jpg', title: 'Card 18', text: 'This is card 18 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum' },
        { imgSrc: 'Images/6.jpg', title: 'Card 19', text: 'This is card 19 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum' },
        { imgSrc: 'Images/6.jpg', title: 'Card 20', text: 'This is card 20 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum' },
        { imgSrc: 'Images/6.jpg', title: 'Card 21', text: 'This is card 21 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum' },
        { imgSrc: 'Images/6.jpg', title: 'Card 22', text: 'This is card 22 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum' },
        { imgSrc: 'Images/6.jpg', title: 'Card 23', text: 'This is card 23 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum' },
        { imgSrc: 'Images/6.jpg', title: 'Card 24', text: 'This is card 24 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus sit cumque ipsa aliquam tempora nihil eligendi. Perferendis accusantium vitae aliquid provident itaque quae quia nostrum, laboriosam quam. Voluptate, ipsum' },
    ];

    const cardContainer = document.getElementById('card-container');
    const pagination = document.getElementById('pagination');
    
    let currentPage = 1;

    function displayCards(page) {
        cardContainer.innerHTML = '';
        const start = (page - 1) * cardsPerPage;
        const end = start + cardsPerPage;
        const paginatedCards = cards.slice(start, end);

        paginatedCards.forEach(card => {
            const cardElement = `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card">
                        <img src="${card.imgSrc}" class="card-img-top" alt="${card.title}">
                        <div class="card-body">
                            <h5 class="card-title">${card.title}</h5>
                            <p class="card-text">${card.text}</p>
                        </div>
                    </div>
                </div>
            `;
            cardContainer.innerHTML += cardElement;
        });
    }

    function setupPagination() {
        pagination.innerHTML = '';

        const totalPages = Math.ceil(cards.length / cardsPerPage);

        // Previous Button
        const prevItem = document.createElement('li');
        prevItem.className = 'page-item';
        prevItem.innerHTML = '<a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>';
        prevItem.addEventListener('click', function(event) {
            event.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                displayCards(currentPage);
                updatePagination();
            }
        });
        pagination.appendChild(prevItem);

        // Page Numbers
        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement('li');
            pageItem.className = 'page-item';
            pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            pageItem.addEventListener('click', function(event) {
                event.preventDefault();
                currentPage = i;
                displayCards(currentPage);
                updatePagination();
            });
            pagination.appendChild(pageItem);
        }

        // Next Button
        const nextItem = document.createElement('li');
        nextItem.className = 'page-item';
        nextItem.innerHTML = '<a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>';
        nextItem.addEventListener('click', function(event) {
            event.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                displayCards(currentPage);
                updatePagination();
            }
        });
        pagination.appendChild(nextItem);

        updatePagination();
    }

    function updatePagination() {
        const pageItems = pagination.getElementsByClassName('page-item');
        for (let i = 0; i < pageItems.length; i++) {
            pageItems[i].classList.remove('active');
        }
        pageItems[currentPage].classList.add('active');

        // Update Previous and Next button states
        const prevButton = pageItems[0];
        const nextButton = pageItems[pageItems.length - 1];
        prevButton.classList.toggle('disabled', currentPage === 1);
        nextButton.classList.toggle('disabled', currentPage === Math.ceil(cards.length / cardsPerPage));
    }

    displayCards(currentPage);
    setupPagination();
});



// script.js
function initMap() {
    // Define the location
    const location = { lat: -34.397, lng: 150.644 }; // Example coordinates (replace with your own)

    // Create a map centered on the location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: location,
    });

    // Add a marker to the map
    new google.maps.Marker({
        position: location,
        map: map,
        title: "Your Location",
    });
}

// Initialize the map once the page loads
window.onload = initMap;
