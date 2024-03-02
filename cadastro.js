class Validator {

    constructor() {
        this.validations = [

        ]
    }

    //iniciar a validação de todos os campos
    validate(form) {
        
        //pegar os inputs
        let inputs = form.getElementsByTagName('input');


        //transformar uma HTMLCollection -> array
        let inputsArray = [...inputs];

        //loop nos inputs e validação mediante ao que for encontrado
        inputsArray.forEach(function(input) {
            console.log(input);
        });

    }

}


let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let Validator = new Validator();

//evento que dispara as validaçoes
submit.addEventListener('click', function(e) {

    e.preventDefault();

    Validator.validate(form);

});