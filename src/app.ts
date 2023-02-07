import * as express from 'express'
import { myDataSource } from './data-source'

function loggerMiddleware(request: express.Request, response: express.Response, next) {
  console.log(`${request.method} ${request.path}`);
  next();
}

var staticRouter = require("./routes/static.route");

const main = () => {
  myDataSource
    .initialize()
    .then(() => {
      console.log('Data Source has been initialized!')
    })
    .catch((err) => {
      console.error('Error during Data Source initialization:', err)
    })

  const app = express()
  app.use(loggerMiddleware)
  app.use(express.json())
  app.use(staticRouter)
  app.get('/', (req, res) => {
    res.send('hello world')
  })
  app.listen(3000)
}
main()
