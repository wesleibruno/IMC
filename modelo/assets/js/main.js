//Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    //escuta evento e impedi de enviar formulario
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    //captura dados do input

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    //tenta converter pra number
    
    //se o peso não for verdadeiro da a mensagem de peso invalido e flag false pra adicionar a classe
    if (!peso) {
        setResultado ('Peso Invalido', false);
        return;
    }
    //se altura não for verdadeira da a mensagem de altura invalid e flag false pra adicionar a classe
    if(!altura) {
        setResultado ('Altura Invalida', false);
        return;
    }
    
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do Peso', ' Peso Normal', 'Sobrepeso',
     'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

     if (imc >= 39.9) return nivel[5];
     if (imc >= 34.9) return nivel[4];
     if (imc >= 29.9) return nivel[3];
     if (imc >= 24.9) return nivel[2];
     if (imc >= 18.5) return nivel[1];
     if (imc < 18.5)  return nivel[0];
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    // resultado.style.display = 'block';
    
    resultado.innerHTML = '';

    const p = criaP ();
    
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    }else {
        p.classList.add('bad');
    };

    p.innerHTML = msg;
    resultado.appendChild(p);
}
    
function limparImc() {
    if(document.getElementById('peso').value!="" || document.getElementById('altura').value!="") {
        document.getElementById('altura').value = '';
        document.getElementById('peso').value= '';
        // const div = document.querySelector('#resultado');
        // let div1 = div.style.display = "none";
        // if(div1 == "none") {
        //     div1 = div.style.display = "inline-block";
        // }
        
    }
        const el = document.getElementById('resultado').style.display;
        if(el == "none"){
            document.getElementById(el).style.display = 'block';
        }else{
            document.getElementById(el).style.display = 'none';
        }
}