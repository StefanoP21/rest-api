import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    MYSQL_URL: get('MYSQL_URL').required().asString(),
};
