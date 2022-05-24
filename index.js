const express = require('express')
const port = 4000;
const app = express ()
app.use(require('./routers/brands.route'))
app.use(require('./routers/products.route'))
app.listen (port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})