/**
 * Created by bmotlagh on 10/22/17.
 */

const config = {
    ENV: process.env.NODE_ENV || 'dev',
    SWAGGER: process.env.SWAGGER || 'localhost:3000',
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || 'aaabbbccc',
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || 'secretaccesskey',
    AWS_REGION: process.env.AWS_REGION || 'localhost',
    DYNAMODB: process.env.DYNAMODB || 'primary-table',
    DYNAMODB_LOGS: process.env.DYNAMODB_LOGS || 'service-logs',
};

module.exports = config;
