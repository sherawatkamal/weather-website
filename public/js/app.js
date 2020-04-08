console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const result_location = document.querySelector('#location');
const result_forecast = document.querySelector('#forecast');

weatherForm.addEventListener('submit',(e) => {
    e.preventDefault()

    const location = search.value;
    result_location.textContent = 'loading...';
    result_forecast.textContent = '';

    fetch('http://localhost:3000/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            result_location.textContent = data.error;
        }
        else{
            result_location.textContent = data.location;
            result_forecast.textContent = data.forecast;
        }
    })
})

})