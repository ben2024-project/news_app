const APIKEY="b761ebeae8044099b94f0933788dbb36" 

let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}`

fetch(url).then(res=>res.json()).then(data=>displayNews(data))


  const categories=["business","entertainment","general","health","science","sports","technology"]

  function displayNews(news){

    let htmlData=``

    for(let n of news.articles){

        htmlData+=` <div class="col">
    <div class="card">
      <img src="${n.urlToImage}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${n.title}</h5>
        <p class="card-text">${n.description}</p>
      </div>
    </div>
  </div>`

    }
   
    document.querySelector("#root").innerHTML=htmlData

  }

  displayCat(categories)

  function displayCat(categories){

    let htmlData=``

    for(let c of categories){

        htmlData+=` 
        <button value="${c}" class="btn btn-outline-success" onclick="fetchNewsByCategory(event)"> ${c}</button>
        `

    }
    document.querySelector("#category").innerHTML=htmlData
  }


  function fetchNewsByCategory(event){

    let categoryName=event.target.value

    // console.log(categoryName);

    fetch(`${url}&category=${categoryName}`).then(res=>res.json()).then(data=>displayNews(data)) 

  }