import express from "express"
import hbs from "hbs"
import path from "path"

const __dirname = path.resolve()
const app = express()

app.use(express.urlencoded())



app.get('/', (req, res) => {
    res.render('index', {name: 'Diana', mainTitle: 'Index'})
})

app.get('/kratko', (req, res) => {
    res.render('kratko', {mainTitle: 'Кратко'})
})

app.get('/sudno', (req, res) => {
    res.render('sudno', {mainTitle: 'Радиоуправляемое удно'})
})

app.get('/katushka/', (req, res) => {
    res.render('katushka',  {mainTitle: 'Катушка Тесла'})
})

app.listen(3000, () => {
    console.log('express app!!!')
})

app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, 'views/partials'))
app.use(express.static(__dirname + '/public'))