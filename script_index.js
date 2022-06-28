//Botão do menu
$(function(){
    $('.main_header_content_menu_mobile_obj').on('click', function(){
        $('.main_header_content_menu_mobile_sub').toggleClass('ds_none');
        $(this).toggleClass('main_header_content_menu_mobile_obj_active');
    });
});


// window.addEventListener("load", inicia);

// botão mudar background 

let solzinho = document.getElementById('solzinho')

solzinho.addEventListener('mouseenter', entrarsol)
solzinho.addEventListener('mouseout', sairsol)
solzinho.addEventListener('click', chargeBackground)

function entrarsol() {
    if (document.getElementById('solzinho').className === 'bgDark') {
        document.getElementById('solzinho').classList.remove('bgDark');
        document.getElementById('solzinho').classList.add('bgLight');
    } else {
        document.getElementById('solzinho').classList.remove('bgLight');
        document.getElementById('solzinho').classList.add('bgDark');
    }
}
function sairsol() {
    if (document.getElementById('solzinho').className === 'bgDark') {
        document.getElementById('solzinho').classList.remove('bgDark');
        document.getElementById('solzinho').classList.add('bgLight');
    } else {
        document.getElementById('solzinho').classList.remove('bgLight');
        document.getElementById('solzinho').classList.add('bgDark');
    }
}
function chargeBackground() {
    if (document.body.className === 'bgDark') {
        document.getElementById('body1').classList.remove('bgDark');
        document.getElementById('body1').classList.add('bgLight');
    } else {
        document.getElementById('body1').classList.remove('bgLight');
        document.getElementById('body1').classList.add('bgDark');
    }
    if (document.getElementById('solzinho').className === 'bgLight') {
        document.getElementById('solzinho').classList.remove('bgLight');
        document.getElementById('solzinho').classList.add('bgDark');
    } else {
        document.getElementById('solzinho').classList.remove('bgDark');
        document.getElementById('solzinho').classList.add('bgLight');
    }
    if (document.getElementById('carrinho').className === 'bgLight') {
        document.getElementById('carrinho').classList.remove('bgLight');
        document.getElementById('carrinho').classList.add('bgDark');
    } else {
        document.getElementById('carrinho').classList.remove('bgDark');
        document.getElementById('carrinho').classList.add('bgLight');
    }
}

// java script carrinho

let carrinho = document.getElementById('carrinho')

carrinho.addEventListener('mouseenter', entrarcar)
carrinho.addEventListener('mouseout', saircar)

function entrarcar() {
    if (document.getElementById('carrinho').className === 'bgDark') {
        document.getElementById('carrinho').classList.remove('bgDark');
        document.getElementById('carrinho').classList.add('bgLight');
    } else {
        document.getElementById('carrinho').classList.remove('bgLight');
        document.getElementById('carrinho').classList.add('bgDark');
    }
}
function saircar() {
    if (document.getElementById('carrinho').className === 'bgLight') {
        document.getElementById('carrinho').classList.remove('bgLight');
        document.getElementById('carrinho').classList.add('bgDark');
    } else {
        document.getElementById('carrinho').classList.remove('bgDark');
        document.getElementById('carrinho').classList.add('bgLight');
    }
}



// function banner

function slide1() {
    document.getElementById('banner').src = "prop1.png";
    setTimeout("slide2()", 4000)
}

function slide2() {
    document.getElementById('banner').src = "prop2.png";
    setTimeout("slide3()", 4000)
}

function slide3() {
    document.getElementById('banner').src = "prop3.png";
    setTimeout("slide1()", 4000)
}


$("#rtx_3080").on("click", function(){
    $(location).attr('href', 'produto.html');
});

$("#gtx_1050ti").on("click", function(){
    $(location).attr('href', 'produtoGTX1050.html');
});

$("#gtx_1650").on("click", function(){
    $(location).attr('href', 'produtoGTX1650OcEdition.html');
});

$("#rtx_3090").on("click", function(){
    $(location).attr('href', 'produtoRTX3090.html');
});

$("#rtx_3060Ti").on("click", function(){
    $(location).attr('href', 'produtoRTX3060ti.html');
});

$("#rtx_3050").on("click", function(){
    $(location).attr('href', 'produto.html');
    
    $(".nomeDoProdutoH1").text("Placa de Vídeo EVGA NVIDIA GeForce RTX 3050 XC Gaming, 8GB GDDR6, LHR, DLSS, Ray Tracing - 08G-P5-3553-KR")

});

