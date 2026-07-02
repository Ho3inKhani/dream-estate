// Sample data for property listings
const listings = [
    {
        title: "Modern Family House in California",
        price: "$850,000",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        beds: 4,
        baths: 3,
        area: "2,500 sqft"
    },
    {
        title: "Luxury Apartment in New York",
        price: "$1,200,000",
        image: "https://images.unsplash.com/photo-1560448071-7cf91f6fcd2d",
        beds: 3,
        baths: 2,
        area: "1,700 sqft"
    },
    {
        title: "Cozy Home in Texas",
        price: "$420,000",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        beds: 3,
        baths: 2,
        area: "1,400 sqft"
    }
];

const container = document.getElementById("properties");

listings.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("property-card");

    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="property-info">
            <h3>${item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>${item.beds} Beds • ${item.baths} Baths • ${item.area}</p>
        </div>
    `;

    container.appendChild(card);
});
