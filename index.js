import 'dotenv/config'
require('dotenv').config()

const dayIn = document.getElementById("day");
const monthIn = document.getElementById("month");
const submitBtn = document.getElementById("submit-btn");
const eventsDiv = document.getElementById("events");

submitBtn.addEventListener("click", () => {
  const day = dayIn.value;
  const month = monthIn.value;
  const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;
  const headers = {
    'Authorization': `${process.env.ACCESS_TOKEN}`,
    'Api-User-Agent': 'OnThisDay (a@a.com)'
  }

  fetch(url, { headers })
    .then(response => response.json())
    .then(data => {
      eventsDiv.innerHTML = "";

      data.events.forEach(event => {
        const eventDivv = document.createElement("div");
        eventDivv.textContent = `${event.text}`;
        eventsDiv.appendChild(eventDivv);
      })
    })
    .catch(err => {
      console.error(err);
      eventsDiv.innerHTML = `<div>Error: ${err.message}</div>`;
    });
});