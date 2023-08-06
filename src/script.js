const searchBtn = document.querySelector('.search');
const result = document.querySelector('.results');

const renderMeaning = function(data){
    const html = `
            <div class="results--header">
                <h3 class="text-md font-bold text-gray-700">${data.word}</h3>
            </div>
            <div class="part--of--speech text-sm text-gray-400 flex mb-8">
                <p class="mr-2">${data.meanings[0].partOfSpeech}</p>
                <span>${data.phonetic}</span>
            </div>
            <div class="results--definition text-gray-600 mb-4">
                <p>${data.meanings[0].definitions[0].definition}</p>
            </div>
            <div class="results--sentence border-l-4 pl-2 pr-12">
                <p>her eyes were closed and she looked very serene </p>
            </div>
        `;
        result.insertAdjacentHTML('beforeend', html);
}

const renderSpinner = function(){
    const html = `
            <div class="flex justify-center text-gray-400">
                <i class="fa fa-spinner spinner" aria-hidden="true"></i>
            </div>
        `;
        result.insertAdjacentHTML('beforeend', html);
}

// renderSpinner()

const api = fetch('https://api.dictionaryapi.dev/api/v2/entries/en/cursed').then(res => res.json()).then(data => console.log(data))

const getMeaning = function(word){
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())
    .then(data => renderMeaning(data[0]))
}


searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    let searchInput = document.querySelector('input');
    result.textContent = ""
    getMeaning(searchInput.value);
    searchInput.value = ""
})