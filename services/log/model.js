/**
 * Created by bmotlagh on 10/23/17.
 */
/**
 * Created by bmotlagh on 10/22/17.
 */

import dynamoose from 'dynamoose';
import config from '../../config';

dynamoose.AWS.config.update({
    accessKeyId: config.AWS_ACCESS_KEY_ID,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
    region: config.AWS_REGION
});

/**
 * Remove this when in prod...
 */
dynamoose.local();

const logSchema = new dynamoose.Schema({
    logCode: {
        type: String,
        hashKey: true
    },
    logTimestamp: {
        type: String,
        rangeKey: true
    },
    message: {
        type: String
    },
    details: {
        type: Object
    }
});

export default dynamoose.model('msvc-emailval-log', logSchema);