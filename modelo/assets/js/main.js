//Capturar evento de submit do formulário
const form = document.querySelector('#form');
//foi criado uma constante contendo a seleção do id do formulario
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Evento Previnido');
});
//addEventListener('qual evento quer escutar', função)
