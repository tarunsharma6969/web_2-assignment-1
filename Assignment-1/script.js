const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");
const emptyState = document.getElementById("emptyState");

const keyPress = document.getElementById("keyPress");

let sampleEvents = [
    {
        title: "Tech Conference",
        date: "2026-04-10",
        category: "Conference",
        description: "Networking and talks"
    },
    {
        title: "JS Workshop",
        date: "2026-04-15",
        category: "Workshop",
        description: "Hands-on JavaScript practice"
    }
];

function checkEmpty() {
    if (eventContainer.children.length === 0) {
        emptyState.style.display = "block";
    } else {
        emptyState.style.display = "none";
    }
}

function createEventCard(data) {
    const card = document.createElement("div");
    card.className = "event";

    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${data.title}</h3>
        <div>📅 ${data.date}</div>
        <div>🏷️ ${data.category}</div>
        <p>${data.description}</p>
    `;

    return card;
}

function addEvent(data) {
    eventContainer.appendChild(createEventCard(data));
    checkEmpty();
}

eventForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (eventTitle.value.trim() === "" || eventDate.value === "" || eventDescription.value.trim() === "") {
        alert("Please fill all fields");
        return;
    }

    const eventData = {
        title: eventTitle.value.trim(),
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value.trim()
    };

    addEvent(eventData);
    eventForm.reset();
});

clearAllBtn.addEventListener("click", function () {
    eventContainer.innerHTML = "";
    checkEmpty();
});

addSampleBtn.addEventListener("click", function () {
    for (let i = 0; i < sampleEvents.length; i++) {
        addEvent(sampleEvents[i]);
    }
});

eventContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
        checkEmpty();
    }
});

document.addEventListener("keydown", function (e) {
    keyPress.innerText = "You pressed: " + e.key;
});

checkEmpty();
