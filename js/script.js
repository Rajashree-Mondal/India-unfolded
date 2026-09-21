// Homepage Search

const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");

if (searchButton) {

    searchButton.addEventListener("click", function () {

        const searchText = searchInput.value.trim().toLowerCase();

        if (searchText === "") {
            alert("Please enter a destination.");
        }

        else if (searchText === "goa") {
            window.location.href = "destinations.html";
        }

        else if (searchText === "agra" || searchText === "taj mahal") {
            window.location.href = "destinations.html";
        }

        else if (searchText === "jaipur" || searchText === "rajasthan") {
            window.location.href = "destinations.html";
        }

        else if (searchText === "kerala") {
            window.location.href = "destinations.html";
        }

        else if (searchText === "varanasi") {
            window.location.href = "destinations.html";
        }

        else if (searchText === "ladakh") {
            window.location.href = "destinations.html";
        }

        else {
            alert("Sorry, destination not found.");
        }

    });

}


// Newsletter Subscribe

const newsletterInput = document.querySelector(".newsletter-box input");
const newsletterButton = document.querySelector(".newsletter-box button");

if (newsletterButton) {

    newsletterButton.addEventListener("click", function () {

        const email = newsletterInput.value.trim();

        if (email === "") {
            alert("Please enter your email.");
        }

        else if (!email.includes("@")) {
            alert("Please enter a valid email.");
        }

        else {
            alert("Thank you for subscribing!");
            newsletterInput.value = "";
        }

    });

}


// Trip Planner

const planButton = document.querySelector("#planButton");

if (planButton) {

    planButton.addEventListener("click", function () {

        const destination = document.querySelector("#destination").value;
        const days = document.querySelector("#days").value;
        const travelStyle = document.querySelector("#style").value;
        const budget = document.querySelector("#budget").value;

        const tripResult = document.querySelector("#tripResult");


        if (destination === "" || days === "" || travelStyle === "" || budget === "") {

            alert("Please select all options.");

        }

        else {

            const itineraries = {

                Goa: [
                    "Arrive in Goa and relax at the beach.",
                    "Explore Baga, Calangute and Anjuna beaches.",
                    "Visit Old Goa churches and explore Panjim.",
                    "Enjoy South Goa beaches and sunset.",
                    "Explore local markets and try Goan food.",
                    "Enjoy a relaxed beach day and local experiences.",
                    "Relax and prepare for departure."
                ],

                Rajasthan: [
                    "Arrive in Jaipur and explore the Pink City.",
                    "Visit Amber Fort, City Palace and Hawa Mahal.",
                    "Travel to Jodhpur and explore Mehrangarh Fort.",
                    "Explore Jodhpur markets and local culture.",
                    "Travel to Udaipur and visit City Palace.",
                    "Enjoy Lake Pichola and a beautiful sunset.",
                    "Relax and prepare for departure."
                ],

                Kerala: [
                    "Arrive in Kochi and explore Fort Kochi.",
                    "Visit Munnar and enjoy the tea plantations.",
                    "Explore Munnar's mountains and waterfalls.",
                    "Travel to Alleppey and enjoy the backwaters.",
                    "Experience a traditional Kerala houseboat.",
                    "Relax at the beach and explore local food.",
                    "Relax and prepare for departure."
                ],

                Ladakh: [
                    "Arrive in Leh and rest for acclimatization.",
                    "Explore Leh Palace, markets and monasteries.",
                    "Visit Khardung La and Nubra Valley.",
                    "Explore Nubra Valley and local villages.",
                    "Travel towards Pangong Lake.",
                    "Enjoy Pangong Lake and mountain views.",
                    "Relax and prepare for departure."
                ],

                Varanasi: [
                    "Arrive in Varanasi and explore the ghats.",
                    "Visit Kashi Vishwanath Temple and nearby areas.",
                    "Watch the Ganga Aarti at Dashashwamedh Ghat.",
                    "Take a morning boat ride on the Ganges.",
                    "Explore Sarnath and its Buddhist heritage.",
                    "Explore local markets and traditional food.",
                    "Relax and prepare for departure."
                ],

                "Himachal Pradesh": [
                    "Arrive in Shimla and explore Mall Road.",
                    "Visit Shimla's main attractions and viewpoints.",
                    "Travel towards Manali through mountain landscapes.",
                    "Explore Solang Valley and enjoy adventure activities.",
                    "Visit Old Manali and local markets.",
                    "Enjoy the mountains and nearby nature spots.",
                    "Relax and prepare for departure."
                ]

            };
            const styleActivities = {

                     Adventure: "Enjoy an exciting adventure activity and explore the destination.",
    
                    Relaxation: "Enjoy a relaxed day, beautiful views and peaceful local experiences.",
    
                    "Culture & Heritage": "Explore historic places, local traditions and cultural attractions.",
    
                    "Nature & Wildlife": "Explore natural landscapes, scenic spots and local wildlife.",
    
                    Spiritual: "Visit important temples, spiritual places and experience the local traditions."

            };
            const budgetDetails = {

                    budget: "Stay in budget hotels or hostels, use public transport and choose affordable local experiences.",

                    moderate: "Choose comfortable hotels, mix public transport with taxis and enjoy a balance of popular and local experiences.",

                    luxury: "Stay in premium hotels or resorts, use private transport and enjoy premium dining and experiences."

            };


            tripResult.innerHTML = `
                <h2>Your ${days}-Day ${destination} Trip</h2>

                <p><strong>Travel Style:</strong> ${travelStyle}</p>

                <p><strong>Budget:</strong> ${budget}</p>

                <h3>YOUR ITINERARY</h3>

                ${Array.from({ length: Number(days) }, (_, i) => `
                    <p>
                        <strong>Day ${i + 1}:</strong>
                        ${itineraries[destination][i % itineraries[destination].length]}
                    </p>
                `).join("")}
                <h3>RECOMMENDED FOR YOU</h3>

                <p>
                ${styleActivities[travelStyle]}
                </p>
                <h3>TRAVEL ON YOUR BUDGET</h3>

                <p>
                ${budgetDetails[budget]}
                </p>
                <button id="printTrip">PRINT MY TRIP</button>
            `;
            const printButton = document.querySelector("#printTrip");

            printButton.addEventListener("click", function () {
            window.print();
            });
        }

    });

}