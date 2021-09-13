import * as dotenv from 'dotenv';
import { setup } from "./setup";

dotenv.config({path: `${__dirname}/../.env`})

setup()
