obtenerNoticias();

// funcion para consumir la api de noticias 
function obtenerNoticias(){
    
    let url = 'http://newsapi.org/v2/everything?q=apple&from=2020-03-01&to=2020-03-01&sortBy=popularity&apiKey=d6736e08a3ac4859aeda69469b97d4cc';
    const api = new XMLHttpRequest();
    api.open('GET',url,true);
    api.send();

    api.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
           let datos = JSON.parse(this.responseText);
           console.log(datos.articles);

           let noticias = document.querySelector('#hot-news');
           noticias.innerHTML = '';

           for(let i = 0; i < 11; i++){
               item = datos.articles[i];
               let desc = obtenerPalabras(item.description);
               noticias.innerHTML += 
               `
                <article class="my-card my-card__1">
                    <figure class="my-card-img">
                        <img src="${item.urlToImage}" alt=""/>
                    </figure>
                    <div class="my-card__content">
                        <h2 id="title">${item.title}</h2>
                        <p>${desc}</p>
                    </div>
                    <button>Read More</button>
                </article>
                `
           }
        }
    }

}

// funcion para obtener sólo las primeras 10 palabras de la descripción de la noticia

function obtenerPalabras(sentence){
        var result = sentence;
        var resultArray = result.split(" ");
        if(resultArray.length > 10){
        resultArray = resultArray.slice(0, 10);
        result = resultArray.join(" ") + "...";
        }
        return result;
}