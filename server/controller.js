const {API_ID, API_KEY} = process.env
const axios = require('axios')

module.exports ={
    search: (req, res) => {
        const {searchterm} = req.params
        axios.get(`https://api.edamam.com/search?q=${searchterm}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=50`).then(recipes => {
            res.status(200).send(recipes.data)
        }).catch(err => {
            console.error(err);
            res.status(500).send(err);
          });
    },
}