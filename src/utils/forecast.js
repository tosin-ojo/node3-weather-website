const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&exclude=minutely,daily&appid=95a7e500cb340da7f9cfa1b3b7bfb878&units=metric'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.message) {
            callback('Unable to find location!')
        } else {
            callback(undefined, 'The current weather condition is ' + body.current.weather[0].description + ', with temperature of ' + body.current.temp + ' degrees, which feels like ' + body.current.feels_like + ' degrees. The humidity is currently ' + body.current.humidity + '%, cloudiness ' + body.current.clouds + '% and wind speed is ' + body.current.wind_speed + 'm/s. The next 2 hours will experience ' + body.hourly[1].weather[0].description + '.')
        }
    })
}

module.exports = forecast 