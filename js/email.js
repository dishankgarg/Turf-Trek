const scriptURL = 'https://script.google.com/macros/s/AKfycbxoOJM03s_4ta-QxyA59mAzxIBCtf1Yd4rGZco0ArgZMpIMDhzCjQ-zrFUwo8KlQNE-/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
          msg.innerHTML="Thank You  For Subscribing!"
          setTimeout(function(){
            msg.innerHTML=""
          },3000)
          form.reset()
        } )
        .catch(error => console.error('Error!', error.message))
    })