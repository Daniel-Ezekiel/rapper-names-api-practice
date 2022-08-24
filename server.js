const express =  require('express');
const app = express();
const PORT = 8000;

const rappers = {
    'eminem': {
        birthName: 'Marshall Bruce Mathers III',
        age: 49,
        birthPlace: 'Saint Joseph, Missouri'
    },
    '50 cent': {
        birthName: 'Curtis James Jackson III',
        age: 47,
        birthPlace: 'Queens, New York'
    },
    'jay z': {
        birthName: 'Shawn Corey Carter',
        age: 49,
        birthPlace: 'Brooklyn, New York'
    },
    'post malone': {
        birthName: 'Austin Richard Post',
        age: 27,
        birthPlace: 'Syracuse, New York'
    },
    'no name': {
        birthName: 'Wrong/No Input',
        age: 'Wrong/No Input',
        birthPlace: 'Wrong/No Input'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rappaName', (request, response) => {
    const rapperName = request.params.rappaName.toLowerCase();
    rappers[rapperName] ? response.json(rappers[rapperName]) : response.json(rappers['no name']);
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running on port ' + PORT + '. Go catch it!')
})