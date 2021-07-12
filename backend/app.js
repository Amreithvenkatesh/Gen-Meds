const express = require('express')
const app = express()
const port = 3008
const mapRoutes=require('./Routes/map')
const medicineRoutes=require('./Routes/medicine')
const cors=require('cors')

// connectDB()
app.use(cors())
app.use(express.json())
app.use(mapRoutes)
app.use(medicineRoutes)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})