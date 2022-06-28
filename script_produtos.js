//Nvidia RTX 3080


//Processador

// api

const url = "http://localhost:3000/data/all"

const opcoes = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}
fetch (url,opcoes)
.then (response => {
    response.json()
    .then (dados => {
        console.log(dados, 'aqui é dados')

            // titulo bd

            let titulo = document.getElementById('nomeDoProdutoH1');
            titulo.innerText = dados[6].name

            // imagens pequenas

            let foto1 = document.querySelector(".foto1");
            foto1.setAttribute('src', 'rtx30501.png');

            let foto2 = document.querySelector(".foto2");
            foto2.setAttribute('src', 'rtx30502.png');

            let foto3 = document.querySelector(".foto3");
            foto3.setAttribute('src', 'rtx30503.png');

            let foto4 = document.querySelector(".foto4");
            foto4.setAttribute('src', 'rtx30504.png');

            let foto5 = document.querySelector(".foto5");
            foto5.setAttribute('src', 'rtx30505.png');

            let foto6 = document.querySelector(".foto6");
            foto6.setAttribute('src', 'rtx30506.png');

            let fotoGrande = document.querySelector(".main_foto_grande");
            fotoGrande.setAttribute('src', 'rtx30501.png');

            // muda foto grande

            $(".foto1").on("click", function(){
                $(".main_foto_grande").attr("src", "rtx30501.png");
            });
            
            $(".foto2").on("click", function(){
                $(".main_foto_grande").attr("src", "rtx30502.png");
            });
            
            $(".foto3").on("click", function(){
                $(".main_foto_grande").attr("src", "rtx30503.png");
            });
            
            $(".foto4").on("click", function(){
                $(".main_foto_grande").attr("src", "rtx30504.png");
            });
            
            $(".foto5").on("click", function(){
                $(".main_foto_grande").attr("src", "rtx30505.png");
            });
            
            $(".foto6").on("click", function(){
                $(".main_foto_grande").attr("src", "rtx30506.png");
            });

          

            // let id = document.createElement('p')
            // id.innerText = dados[i].name
            // document.getElementById('descricao_produto').append(id)

            // let title = document.createElement('p')
            // title.innerText = dados[i].email
            // document.getElementById('descricao_produto').append(title)

            // let genre = document.createElement('p')
            // genre.innerText = dados[i].password
            // document.getElementById('descricao_produto').append(genre)
            
        
    })
})
.catch(erro => {
    console.log(erro,'algum erro')
})


// const url = "http://localhost:3000/movies/all"

// const opcoes = {
//     method: 'GET',
//     mode: 'cors',
//     cache: 'default'
// }
// fetch (url,opcoes)
// .then (response => {
//     response.json()
//     .then (dados => {
//         console.log(dados, 'aqui é dados')

//         for (i=0;i<dados.length;i++){
//             let id = document.createElement('p')
//             id.innerText = dados[i].id
//             document.getElementById('descricao_produto').append(id)

//             let title = document.createElement('p')
//             title.innerText = dados[i].title
//             document.getElementById('descricao_produto').append(title)

//             let genre = document.createElement('p')
//             genre.innerText = dados[i].genre
//             document.getElementById('descricao_produto').append(genre)
            
//         }
//     })
// })
// .catch(erro => {
//     console.log(erro,'algum erro')
// })

