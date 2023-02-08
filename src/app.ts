import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import { myDataSource } from './data-source'
import genderRoute from './routes/gender.route';
import brandRoute from './routes/brand.route';
import categoryRoute from './routes/category.route';
import sizeRoute from './routes/size.route';

function loggerMiddleware(request: express.Request, response: express.Response, next) {
  console.log(`${request.method} ${request.path}`);
  next();
}

const main = () => {
  myDataSource
    .initialize()
    .then(() => {
      console.log('Data Source has been initialized!')
    })
    .catch((err) => {
      console.error('Error during Data Source initialization:', err)
    })

  const app = express();
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
  });
  app.use(loggerMiddleware)
  app.use(express.json())
  app.use('/gender', genderRoute)
  app.use('/brand', brandRoute)
  app.use('/category', categoryRoute)
  app.use('/size', sizeRoute)
  app.get('/', (req, res) => {
    res.send('hello world')
  })
  app.listen(3000)
}
main()
