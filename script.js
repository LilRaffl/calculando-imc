let calcular = document.getElementById('calcular')


function imc(){
   let nome = document.getElementById('nome').value 
   let altura = document.getElementById('altura').value 
   let peso= document.getElementById('peso').value 
   let resultado = document.getElementById('resultado')

    if(nome !== '' && altura !=='' && peso !=='' ){

        let valorIMC = (peso/(altura * altura))

        if( valorIMC < 18.5){
            tipoIMC = 'baixo do peso'
        }

        else if( valorIMC > 18.5 && valorIMC < 25.0){
            tipoIMC = 'peso normal'
        }

        else if( valorIMC > 25.0 && valorIMc < 30.0){
            tipoIMC = 'excesso de peso'
        }

        else if( valorIMC > 30.0 && valorIMC < 34.9){
            tipoIMC = 'obesidade grau 1'
        }

        else if( valorIMC > 34.9 && valorIMC < 39.9){
            tipoIMC = 'obesidade grau 2'
        }

        else{
            tipoIMC = 'obesidade grau 3'

        }

        resultado.textContent = `${nome}  o seu ${valorIMC.toFixed(2)} e você esta ${tipoIMC}`
        
    }
 
}

calcular.addEventListener('click',imc)