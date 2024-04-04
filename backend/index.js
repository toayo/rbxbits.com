require("dotenv").config()

const NotFound = require("./routes/not_found")
const IndexRoute = require("./routes/index")
const express = require("express")
const app = express()

app.use("/", IndexRoute)
app.use("*", NotFound)

app.listen(parseInt(process.env.PORT), function (err) {
    if (err != null) {
        console.log(`Backend Server Failed To Start: ${err}`)
        process.exit()
    }

    console.log(`Started At http://127.0.0.1:${process.env.PORT}`)
})