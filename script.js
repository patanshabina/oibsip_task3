const converter =document.querySelector('#converter');
const result= document.querySelector('.result');
const convertButton= document.querySelector('.convertButton');
const resetButton = document.querySelector('.resetButton');
const changeButton = document.querySelector('.changeButton');
const C=document.querySelector('.C')
const F=document.querySelector('.F')

const swap = () => {
    if (C.innerHTML ===  'celsius'){
        C.innerHTML = 'fahrenheit';
        F.innerHTML = 'celsius';
        converter.placeholder = "Temperature in fahreheit";
    }else {
        F.innerHTML = 'fahrenheit';
        C.innerHTML = 'celsius';
        converter.placeholder = "Temperature in celsius";
    };
};

const reset = () => {
    converter.value= '';
    result.innerHTML ='';
}

const convert = () =>{
    if (/^(-?)(\d+)(\.{1}\d+)?$/.test(converter.value)){
        result.style.color = "black"
        if (C.innerHTML === 'celsius'){
            let value = (converter.value *1.8)+32;
            result.innerHTML = `${converter.value}celsius is equal to ${value.toFixed(2)}fahrenheit`;
        }else {
            let value = (converter.value - 32)/ 1.8;
            result.innerHTML = `${converter.value}fahrenheit is equal to ${value.toFixed(2)}celsius`;
        }
     }else if (converter.value == '') {
        result.style.color = "#993300"
        result.innerHTML = 'Enter some number';
     }else {
        result.style.color = "#993300"
        result.innerHTML ='Enter only numbers!!!';
     }
}

changeButton.addEventListener('click', swap);
resetButton.addEventListener('click',reset);
convertButton.addEventListener('click',convert);

