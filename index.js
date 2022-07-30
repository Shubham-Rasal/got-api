const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');



app.use(bodyParser.json());
app.use(cors());
app.listen(8080, () => console.log('Server started on port 8080'));

const api ="https://api.gameofthronesquotes.xyz/v1/house/lannister";
// const api = "https://gameofthronesquotes.xyz"


app.get('/', async(req, res) => {
    const data = await  fetch(api,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        },
        
    });  
    const json = await data.json();

    console.log(json[0].members);
    res.json(json);

} );