

let url = 'https://newsapi.org/v2/everything?q=apple&from=2020-07-07&to=2020-07-08&sortBy=popularity&apiKey=d6736e08a3ac4859aeda69469b97d4cc';
const api = new XMLHttpRequest();
api.open('GET',url,true);
api.send();
api.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText);
        obtenerNoticias(datos);
    }
    
}

// funcion para consumir la api de noticias 
function obtenerNoticias(datos){
    

           let noticias = document.querySelector('#hot-news');
           noticias.innerHTML = '';

           for(let i = 0; i < 11; i++){
               item = datos.articles[i];
               let desc = obtenerPalabras(item.description);
               let aidi = i;
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
                    <a class="btn-new" href="noticia.html?id=${aidi}"  ">Read More</a>
                    
                </article>
                `
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




