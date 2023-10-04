let main = document.querySelector('.main');



for(i = 0; i < pokemons.length; i++){
    let kino = document.createElement('div');
    kino.classList.add('film');

    let nomi = document.createElement('h2');
    nomi.classList.add('h2');
    nomi.textContent = pokemons[i].name;

    let pic = document.createElement('img');
    pic.classList.add('pic');
    pic.src = pokemons[i].img;
    
    let info = document.createElement('p');
    info.classList.add('name');
    info.textContent = pokemons[i].candy;

    let num = document.createElement('h1');
    num.classList.add('h1');
    num.textContent = pokemons[i].num;


    let ol = document.createElement('ol')
    ol.classList.add('ol');

    for(l = 0; l < pokemons[i].type.length; l++){
        let li = document.createElement('li')
        li.classList.add('li');
        li.textContent = pokemons[i].type[l];
        
        ol.appendChild(li)  
    }

    kino.appendChild(num);
    kino.appendChild(nomi);
    kino.appendChild(info);
    kino.appendChild(pic);
    kino.appendChild(ol);
    

    main.appendChild(kino);
}

let form = document.querySelector('.form');
let input = document.querySelector('.input');

form.addEventListener('keyup', function(evt){
    evt.preventDefault();

    let qiymat = input.value;
    let kalit = new RegExp(qiymat, 'gi');

    let topilganlar = pokemons.filter(function(kino){
        return kino.name.toString().match(kalit);    
    });
    
    main.innerHTML = '';

    for(i = 0; i < topilganlar.length; i++){
        let kino = document.createElement('div');
        kino.classList.add('div');
    
        let nomi = document.createElement('h2');
        nomi.classList.add('h2');
        nomi.textContent = topilganlar[i].name;
    
        let pic = document.createElement('img');
        pic.classList.add('pic');
        pic.src = topilganlar[i].img;
        
        let info = document.createElement('p');
        info.classList.add('name');
        info.textContent = topilganlar[i].candy;
    
        let num = document.createElement('h1');
        num.classList.add('h1');
        num.textContent = topilganlar[i].num;
    
    
        let ol = document.createElement('ol')
        ol.classList.add('ol');
    
        for(l = 0; l < topilganlar[i].type.length; l++){
            let li = document.createElement('li')
            li.classList.add('li');
            li.textContent = topilganlar[i].type[l];
            
            ol.appendChild(li)  
        }
    
        kino.appendChild(num);
        kino.appendChild(nomi);
        kino.appendChild(info);
        kino.appendChild(pic);
        kino.appendChild(ol);
        
    
        main.appendChild(kino);
    }
});