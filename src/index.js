import './index.html'
import './components/reset.css'
import './components/fonts.css'
import './styles.css'


const apiKey = 'd6c8af0fdba659975a8a7b235b99d8f8'
const location = 'philadelphia'
const limit = '5'
const zipCode = '19102'

const getWeatherData = (() => {

const fetchLatitude = (url) => {

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const response = document.createElement('div')
        response.innerHTML= `<div>${JSON.stringify(data)}</div>`
        document.body.append(response)})
}

    return {fetchLatitude}
})();

getWeatherData.fetchLatitude(`http://api.openweathermap.org/data/2.5/weather?q=${location}&limit=${limit}&appid=${apiKey}`)


getWeatherData.fetchLatitude(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${limit}&appid=${apiKey}`)

getWeatherData.fetchLatitude(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&limit=${limit}&appid=${apiKey}`)
