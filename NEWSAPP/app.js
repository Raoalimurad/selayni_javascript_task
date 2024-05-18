const API_KEY = "be7a9d3c93b540d9852091defe454a5f";
const url = 'https://newsapi.org/v2/everything?q=';

window.addEventListener("load", () => fetchNews("Pakistan"));

const fetchNews = async (query) => {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
};

const bindData = (articles) => {
    const cardsContainer = document.getElementById("card-container");
    const newsTemplate = document.getElementById("card-template");
    cardsContainer.innerHTML = '';

    articles.forEach(article => {
        if (!article.urlToImage || article.urlToImage.trim() === '') return; 
        const cardClone = newsTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
};

const fillDataInCard = (cardClone, article) => {
    const newsImg = cardClone.querySelector('#img-news');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc = cardClone.querySelector('#news-des');

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsSource.innerHTML = `${article.source.name} - ${new Date(article.publishedAt).toLocaleDateString()}`;
    newsDesc.innerHTML = article.description;

    cardClone.firstElementChild.addEventListener("click",()=>{
        window.open(article.url,'_blank')
    })
};
let selectItem = null
const navItemSearch = (id)=>{
    fetchNews(id)
const navItem =document.getElementById(id)
selectItem?.classList.remove('active')
selectItem = navItem
selectItem.classList.add("active")
}
const serachBtn = document.getElementById("serachBtn")
const serachInput = document.getElementById("serachInput")

serachBtn.addEventListener("click",()=>{
    const searchQuery = serachInput.value
    if(!searchQuery) return;
    fetchNews(searchQuery)
    selectItem?.classList.remove("active")
    selectItem=null
})