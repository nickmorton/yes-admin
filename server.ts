import * as e from 'express';
////import cors = require('cors');
import * as apiRoutes from './api/api.routes';
import { apiConfig } from './api/api.config';
import * as bodyParser from 'body-parser';

const port: number = process.env.PORT || 3000;
const app: e.Express = e();

app
	.use(bodyParser.json())
	.use(e.static(`${__dirname}/public`));
////.use('/api', cors());
apiRoutes.register(app, apiConfig);

app.use((req: e.Request, res: e.Response) => {
	console.log(`Not found '${req.url}'`);
	res
		.type('text/plain')
		.status(404)
		.send('404 - Not Found');
});

app.listen(port, function () {
	console.log(`This express app is listening on port: ${port}`);
});
