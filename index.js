const express = require('express')
const app = express()
//environment variable
const port = process.env.PORT || 3000
app.use(express.json())



//using blogs routes
const blogsRoute = require('./src/routes/blog_routes.js')
app.use("/blogs",blogsRoute);

app.get("/" ,(req,res) => {
    res.send("Blog Server is running..")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
