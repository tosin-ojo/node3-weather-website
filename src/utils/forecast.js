const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=95a7e500cb340da7f9cfa1b3b7bfb878&units=metric'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.message) {
            callback('Unable to find location!')
        } else {
            callback(undefined, 'The weather is ' + body.weather[0].description + ' It is currently ' + body.main.temp + ' degrees out, with the wind speed of ' + body.wind.speed + '.')
        }
    })
}

module.exports = forecast 