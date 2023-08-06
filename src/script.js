const searchBtn = document.querySelector('.search');

const api = fetch('https://api.dictionaryapi.dev/api/v2/entries/en/data').then(res => res.json()).then(data => console.log(data[0].meanings))
