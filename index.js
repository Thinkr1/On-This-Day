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