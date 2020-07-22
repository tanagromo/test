let url = 'https://newsapi.org/v2/everything?q=apple&from=2020-07-07&to=2020-07-08&sortBy=popularity&apiKey=d6736e08a3ac4859aeda69469b97d4cc';
const api = new XMLHttpRequest();
api.open('GET',url,true);
api.send();
api.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText);
        openNew(datos);
    }
    
}

//función para extraer datos de una noticia en específico

function openNew(data){
    let url = document.location.href;
    let params = url.split('?')[1].split('=')[1];
    let item = data.articles[params]
    let imagen = document.querySelector('#imgnew');
    let datosPrinc = document.querySelector('#content-new');
    let contenido = document.querySelector('#complete-cont');

    let nDate = item.publishedAt.split('T')[0]

    imagen.innerHTML += 
`
    <img src="${item.urlToImage}" alt=""/>
`
datosPrinc.innerHTML += 
`
    <h3> ${item.title} </h3>
    <div  class="articleHeaderText__divider"></div>
    <p>By <span> ${item.author} </span> </p>
    <p>${nDate}</p>

`
contenido.innerHTML += 
`
    <p>${item.content} 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra quis tortor quis convallis. Mauris efficitur eros mi. Nunc pellentesque luctus odio consequat lacinia. Nulla porttitor magna nunc, non tincidunt sapien volutpat semper. Maecenas scelerisque, metus vel tempor laoreet, arcu nibh semper metus, ut dictum est nisl sit amet mauris. Mauris malesuada sollicitudin neque ut imperdiet. Fusce ut dolor sit amet tellus viverra fermentum sit amet ultrices dolor. Pellentesque dignissim arcu a ornare varius. Cras ut vestibulum ligula, ut lacinia est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam porta consectetur sem vitae accumsan. Sed sapien ipsum, mattis rhoncus lacus a, lacinia semper tortor. Curabitur pharetra lectus vitae rutrum fermentum. Vestibulum fermentum ante sed leo dapibus, ac pretium justo placerat.
    
    Donec sit amet felis commodo, sollicitudin purus eget, tincidunt lacus. Donec nunc nisl, cursus sit amet enim at, fringilla consectetur felis. Mauris id ligula id felis viverra placerat vel non nibh. Quisque et congue justo, sed dapibus urna. Fusce at lacus eu tellus viverra convallis. Aenean finibus odio non diam pharetra, in dictum velit congue. Curabitur nec tincidunt enim. Quisque et tincidunt odio. Vivamus mauris ipsum, tempus semper risus sit amet, ultricies congue enim. Curabitur risus est, fringilla at ultricies nec, facilisis quis felis. Ut sed tempor tellus, sit amet iaculis neque. Aliquam ac maximus arcu, et elementum ligula.
            
    </p>
    

`
   

}



