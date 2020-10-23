const myForm = document.querySelector('#my-form')
const palInput = document.querySelector('#palInput')
const msg = document.querySelector('.msg')
const msgReza = document.querySelector('.msgReza')

myForm.addEventListener('submit', onSubmit)

function onSubmit(e){
  e.preventDefault();

  if(palInput.value === ''){
    msg.classList.add('error')
    msg.innerHTML = 'Molimo unesite rijeci'
  }
  else{
    let dobiveniPal = palInput.value

    dobiveniPal = dobiveniPal.replace(/[^a-zA-Z]+/g, '') 

    let prvaPolovica = dobiveniPal.substring(0, dobiveniPal.length/2).toLowerCase()
    
    let drugaPolovica = dobiveniPal.substring(dobiveniPal.length/ 2).split("").reverse().join("").toLowerCase()

    if(prvaPolovica.length > drugaPolovica.length){
      prvaPolovica = prvaPolovica.substring(0, prvaPolovica.length-1)
    }
    else{
      drugaPolovica = drugaPolovica.substring(0, drugaPolovica.length-1)
    }

    if(prvaPolovica=== drugaPolovica){
      msgReza.innerHTML = "Palindrom je!"
    }

    else{
      msgReza.innerHTML = "Nije palindrom!"
    }

    console.log("1: "+ prvaPolovica)
    console.log("2: "+ drugaPolovica)
    //clear fields
    palInput.value = ''
  }
}