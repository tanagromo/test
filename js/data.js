obtenerNoticias();

function obtenerNoticias(){
    
    let url = 'http://newsapi.org/v2/everything?q=apple&from=2020-03-01&to=2020-03-01&sortBy=popularity&apiKey=d6736e08a3ac4859aeda69469b97d4cc'
    const api = new XMLHttpRequest();
    api.open('GET',url,true);
    api.send();

    api.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
           let datos = JSON.parse(this.responseText);
           console.log(datos.articles);

           let noticias = document.querySelector('#hot-news');
           noticias.innerHTML = '';

           for(let item of datos.articles){
               noticias.innerHTML += `
               <div  class="col-lg-4 col-md-6 col-sm-12">
               <article class="u--card u--card__1">
                 <figure class="u--card__thumbnail">
                   <img src="${item.urlToImage}" alt=""/>
                 </figure>
                 <div class="u--card__content">
                   <h2 id="title">${item.title}</h2>
                   <p>${item.description}</p>
             <button>View</button>
           </div>
         </article>
               </div>

         `
           }
        }
    }

}