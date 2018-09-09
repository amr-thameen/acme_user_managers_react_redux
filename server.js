const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const conn = require('./db/index.js');
const path = require('path')

const users = conn.models.User

app.use(require('body-parser').json())

app.use('/dist', express.static(path.join(__dirname, '/dist')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/api/users', (req, res, next) => {
   users.findAll()
   .then( users => {
        res.send(users)
   })
   .catch(next)
})


app.delete('/api/users/:id', (req, res, next) => {
    users.destroy({
        where: {
            id: req.params.id
        }
    })
})  



conn.syncAndSeed()

app.listen(port, () => {
    console.log(`I am listening to port ${port}`)
})


