import * as express from 'express';
import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';

const instance = express();
instance.use(bodyParser.json());
//传入express,你可以直接添加一些自定义配置（例如,设置一些插件,如 morgan 或 body-parser）
const app = NestFactory.create(ApplicationModule, instance);
app.setGlobalPrefix("api");
app.listen(3000, () => console.log('Application is listening on port 3000.'));