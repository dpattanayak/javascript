// fecate2096@heroulo.com
// newsapi@6862
// d43454f393ef417d8fd1a203a918194b

const API_KEY = 'd43454f393ef417d8fd1a203a918194b';
let sources = 'bbc-news';

let accordionNews = document.getElementById('accordionNews');

let xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${API_KEY}`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let response = JSON.parse(this.responseText);
        let articles = response.articles;
        let newsHtml = '';
        articles.forEach(function(element){
            let news = `
                <li class="media my-4">
                    <img src="${element.urlToImage}" class="mr-3" alt="${element.title}" style="width: 15%;">
                    <div class="media-body">
                    <h5 class="mt-0 mb-1">${element.title}</h5>
                    <p>${element.content}<br/>
                    <a href="${element.url}" target="_blank">Read More</a></p>
                    </div>
                </li>
            `
            newsHtml += news;
        });
        accordionNews.innerHTML = newsHtml;
    } else {
        console.log('Error')
    }
}
xhr.send();