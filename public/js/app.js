const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const loading = document.querySelector('#loading')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')

// messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    loading.style.display = "block"
    messageOne.textContent = ''
    messageTwo.textContent = ''
    messageThree.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                loading.style.display = "none"
                messageOne.textContent = data.error
            } else {
                loading.style.display = "none"
                messageOne.textContent = 'Location: ' + data.location
                messageTwo.textContent = data.forecast
                messageThree.textContent = 'HAVE A NICE DAY!'
            }
        })
    })
})