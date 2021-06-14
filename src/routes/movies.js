const { Router } = require('express')
const router = Router()
const clientPg = require('../database')

// Get movie by id
router.get('/movies/:id', (req, res) => {
  const { id } = req.params
  clientPg.query(
    'SELECT * FROM peliculas WHERE id=' + id,
    (err, rows, fields) => {
      if (!err) {
        res.json(rows.rows)
      } else {
        res.send(err.detail)
      }
    }
  )
})

// Get all movies
router.get('/movies', (req, res) => {
  clientPg.query('SELECT * FROM peliculas', (err, rows, fields) => {
    if (!err) {
      res.json(rows.rows)
    } else {
      res.send(err.detail)
    }
  })
})

// Create a new movie
router.post('/movies', (req, res) => {
  clientPg.query(
    `INSERT INTO peliculas(nombre, descripcion, img, categoria) VALUES ('${req.body.nombre}', '${req.body.descripcion}', '${req.body.img}', '${req.body.categoria}')`,
    (err, rows, fields) => {
      if (!err) {
        res.status(201)
        res.json(req.body)
      } else {
        res.send(err.detail)
      }
    }
  )
})

// Edit movie
router.put('/movies/:id', (req, res) => {
  const { id } = req.params
  clientPg.query(
    `UPDATE peliculas SET nombre='${req.body.nombre}', descripcion='${req.body.descripcion}', categoria='${req.body.categoria}' WHERE id=${id}`,
    (err, rows, fields) => {
      if (!err) {
        res.json(req.body)
      } else {
        res.send(err.detail)
      }
    }
  )
})

// delete movie
router.delete('/movies/:id', (req, res) => {
  const { id } = req.params
  clientPg.query(
    `DELETE FROM peliculas WHERE id=${id}`,
    (err, rows, fields) => {
      if (!err) {
        res.json('DELETED')
      } else {
        res.send(err.detail)
      }
    }
  )
})

module.exports = router
