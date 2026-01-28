import express from "express"
import router from "./routes/products/index.ts"
const app = express()

app.use('', router)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})