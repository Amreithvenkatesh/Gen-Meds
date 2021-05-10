const express = require('express')
const app = express()
const port = 3000
const mapRoutes=require('./Routes/map')
const cors=require('cors')

// connectDB()
app.use(cors())
app.use(express.json())
app.use(mapRoutes)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})