function fetchSources(API_KEY) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://newsapi.org/v2/sources?apiKey=${API_KEY}`, true);
    xhr.onload = function () {
        let response = JSON.parse(this.responseText);
        sourceList = response.sources;
        let dropHtml = '';
        sourceList.forEach(function (element) {
            let list = `
                <a class="dropdown-item" onclick="fetchNews(API_KEY,'${element.id}',page)">${element.name}</a>
            `
            dropHtml += list;
        })
        dropdownContent.innerHTML = dropHtml;
    }
    xhr.send();
}

function fetchNews(API_KEY, sources, page, search, date, sortby) {
    let xhr = new XMLHttpRequest();
    let URL = '';
    if (search != "" && search != undefined) {
      URL = `https://newsapi.org/v2/everything?q=${search}&from=${date}&sortBy=${sortby}&page=${page}&pageSize=20&apiKey=${API_KEY}`;
    } else {
      URL = `https://newsapi.org/v2/everything?sources=${sources}&from=${date}&sortBy=${sortby}&page=${page}&pageSize=20&apiKey=${API_KEY}`;
    }

    xhr.open('GET', URL, true);
    xhr.onprogress = function () {
        spinner.style.display = 'flex';
    }
    xhr.onload = function () {
        if (this.status === 200) {
            let response = JSON.parse(this.responseText);
            let articles = response.articles;
            let newsHtml = '';
            articles.forEach(function (element) {
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
            spinner.style.display = 'none';
            badge.innerHTML = sources;    
            document.getElementById('search').value = '';
            accordionNews.innerHTML = newsHtml;
            pagination.innerHTML = `
                <ul class="pagination justify-content-end">
                    <li class="page-item ${page == 1 ? 'disabled':''}">
                        <a class="page-link" onclick="fetchNews(API_KEY,source,${page -1})" tabindex="-1" aria-disabled="${page == 1 ? true:false}">Previous</a>
                    </li>
                    <li class="page-item active"><a class="page-link" onclick="fetchNews(API_KEY,source,${page})">${page}</a></li>
                    <li class="page-item"><a class="page-link" onclick="fetchNews(API_KEY,source,${page +1})">${page +1}</a></li>
                    <li class="page-item"><a class="page-link" onclick="fetchNews(API_KEY,source,${page +2})">${page +2}</a></li>
                    <li class="page-item">
                        <a class="page-link" onclick="fetchNews(API_KEY,source,${page +1})">Next</a>
                    </li>
                </ul>
            `
        } else {
            console.log('Error')
        }
    }
    xhr.send();
}

const API_KEY = 'd43454f393ef417d8fd1a203a918194b';
let source = 'bbc-news';
let page = 1;
let date = new Date(Date.now() - 86400000).toISOString().split("T")[0]; // format required : 2021-03-19 , day : yesterday
let sortby = 'popularity';

let accordionNews = document.getElementById('accordionNews');
let spinner = document.getElementById('spinner');
let pagination = document.getElementById('pagination');
let dropdownContent = document.getElementById('dropdownContent');
let badge = document.querySelector('.badge');
badge.innerHTML = source;

let search = document.getElementById('search');
search.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        let inputVal = search.value;
        console.log('inputVal: ', inputVal);        
        fetchNews(API_KEY, source, page, inputVal, date, sortby);
    }
    event.preventDefault();
});


fetchNews(API_KEY, source, page, '', date, sortby);
fetchSources(API_KEY);
accordionNews.innerHTML = '';