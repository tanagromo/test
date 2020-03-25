let url = 'http://newsapi.org/v2/everything?q=apple&from=2020-03-01&to=2020-03-01&sortBy=popularity&apiKey=d6736e08a3ac4859aeda69469b97d4cc';
const api = new XMLHttpRequest();
api.open('GET',url,true);
api.send();
api.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText);
        openNew(datos);
    }
    
}


function openNew(data){
    let url = document.location.href;
    let params = url.split('?')[1].split('=')[1];
    let item = data.articles[params]
    let imagen = document.querySelector('#imgnew');
    let contenido = document.querySelector('#content-new');

    let nDate = item.publishedAt.split('T')[0]

    imagen.innerHTML += 
`
    <img src="${item.urlToImage}" alt=""/>
`
contenido.innerHTML += 
`
    <h3> ${item.title} </h3>
    <p>By ${item.author} </p>
    <small>${nDate}</small>

`
    console.log("news",data)
    console.log(item)

}

