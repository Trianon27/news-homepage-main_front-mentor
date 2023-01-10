//for cards
const new_list = document.querySelector(".new-list");

const cards = [
    {
        title: "Hydrogen VS Electric Cars",
        text: "Will hydrogen-fueled cars ever catch up to EVs?"
    },
    {
        title: "The Downsides of AI Artistry",
        text: "What are the possible adverse effects of on-demand AI image generation?"
    },
    {
        title:"Is VC Funding Drying Up?",
        text: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
    }
]

//for more news
const more_news = document.querySelector(".more-news-container");
const news = [
    {
        number: "01",
        title: "Reviving Retro PCs",
        description: "What happens when old PCs are given modern upgrades?",
        image: "assets/images/image-retro-pcs.jpg",
        alt_description: "A retro PC"
    },
    {
        number: "02",
        title: "Top 10 Laptops of 2022",
        description: "Our best picks for various needs and budgets.",
        image: "assets/images/image-top-laptops.jpg",
        alt_description: "the keyboard red of a laptop"
    },
    {
        number: "03",
        title: "The Growth of Gaming",
        description: "How the pandemic has sparked fresh opportunities.",
        image: "assets/images/image-gaming-growth.jpg",
        alt_description: "A hand throwing a gaming controller"
    }

]

//fucntion that craetes the card
function createCard(card){
    return `
        <div class="new-card">
            <section class="list-section">
              <h3> <a>${card.title} </a> </h3>
              <p>${card.text}</p>
            </section>
        </div>
        <hr>
    `
}

//function that creates the new
function createNews(newContent){
    return `
    <div class="news-card">
        <img src="${newContent.image}" alt="${newContent.alt_description}">
        <section class="text-section">
          <h2>${newContent.number}</h2>
          <h3> <a>${newContent.title}</a> </h3>
          <p>${newContent.description}</p>
        </section>
      </div>
    `
}




function appendCard(cards){
    let card = "";
    for(let i = 0; i < cards.length; i++){
        card = createCard(cards[i]);
        new_list.innerHTML += card;
    }
}


function appendNews(news){
    let newContent = "";
    for(let i = 0; i < news.length; i++){
        newContent = createNews(news[i]);
        more_news.innerHTML += newContent;
    }
}


appendCard(cards);

appendNews(news);


document.querySelector('#scroll-menu').addEventListener("click", () =>{
    const nav = document.querySelector(".nav-container");
    const menu = document.querySelector("#scroll-menu");
    const close = document.querySelector("#scroll-close");
    nav.classList.add("nav-open")
    menu.style.display = "none";
    close.style.display = "block";
})

document.querySelector('#scroll-close').addEventListener("click", () =>{
    const nav = document.querySelector(".nav-container");
    const menu = document.querySelector("#scroll-menu");
    const close = document.querySelector("#scroll-close");
    nav.classList.remove("nav-open")
    menu.style.display = "block";
    close.style.display = "none";
})


window.addEventListener("resize", () =>{
    const nav = document.querySelector(".nav-container");
    const menu = document.querySelector("#scroll-menu");
    const close = document.querySelector("#scroll-close");
    if(window.innerWidth >= 850 && window.innerHeight <= 1000){
        nav.classList.remove("nav-open");
        menu.style.display = "none";
        close.style.display = "none";
    }
    else{
        nav.classList.remove("nav-open");
        menu.style.display = "block";
        close.style.display = "none";
    }
})

