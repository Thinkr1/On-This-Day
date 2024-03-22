// Get information about this day in history from English Wikipedia

let today = new Date();
let month = String(today.getMonth() + 1).padStart(2,'0');
let day = String(today.getDate()).padStart(2,'0');
let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

let response = await fetch( url,
    {
        headers: {
            'Authorization': `Bearer ${process.env.ACCESSTOKEN}`,
            'Api-User-Agent': `${process.env.APPNAME} (${process.env.CONTACT})`
        }
    }
);
response.json()
    .then(console.log).catch(console.error);

// -------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------

const dateInput=document.getElementById("date-input")
const submitBtn=document.getElementById("submit-btn")
const eventsDiv=document.getElementById("events")

submitBtn.addEventListener("click", () => {
    const date=dateInput.ariaValue
    const url=`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${date}`

    fetch(url, {
        headers: {
            'Authorization': `Bearer ${process.env.ACCESSTOKEN}`,
            'Api-User-Agent': `${process.env.APPNAME} (${process.env.CONTACT})`
        }
    })
        .then(response=>response.json)
        .then((data) => {
            eventsDiv.innerHTML=""
            data.events.forEach(event=> {
                const eventEl=document.createElement("div")
                eventEl.textContent=`${event.text} (Earliest date: ${event.earliest})`
                eventsDiv.appendChild(eventEl)
            })
        })
})