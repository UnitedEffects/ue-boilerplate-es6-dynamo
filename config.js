/**
 * Created by bmotlagh on 10/22/17.
 */

const config = {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || 'aaabbbccc',
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || 'secretaccesskey',
    AWS_REGION: process.env.AWS_REGION || 'localhost'
};

module.exports = config;
