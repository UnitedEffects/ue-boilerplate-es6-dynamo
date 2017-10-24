/**
 * Created by bmotlagh on 10/23/17.
 */

import responder from '../response';
import moment from 'moment';
import Log from './model';

const logs = {
    /**
     * Allows you to pass a data object which is recorded as a log entry.
     * @param data
     * @returns {Promise}
     */
    writeLog(data) {
        const logData = data;
        logData.logTimestamp = moment().format();
        logData.logCode = data.logCode.toUpperCase();
        return new Promise((resolve, reject) => {
            const log = new Log(logData);
            log.save((err, result) => {
                if (err) {
                    console.error(err);
                    return reject(responder.fail500('Could not save log'));
                }
                return resolve(responder.set200(result, 'Log'));
            });
        });
    },
    /**
     * returns all logs from the DB
     * @returns {Promise}
     */
    getLogs() {
        return new Promise((resolve, reject) => {
            Log.scan().exec()
                .then(result => resolve(responder.set200(result, 'Log')))
                .catch((err) => {
                    console.error(err);
                    return reject(responder.fail500(err));
                });
        });
    },
    /**
     * Return all logs of a single code: ERROR, NOTIFY, SUCCESS
     * @param code
     * @returns {Promise}
     */
    getLogByCode(code) {
        return new Promise((resolve, reject) => {
            Log.scan({ logCode: code }).exec()
                .then(result => resolve(responder.set200(result, 'Log')))
                .catch((err) => {
                    console.error(err);
                    return reject(responder.fail500(err));
                });
        });
    },
    /**
     * Return a single log with code and timestamp
     * @param code
     * @param timestamp
     * @returns {Promise}
     */
    getLog(code, timestamp) {
        return new Promise((resolve, reject) => {
            Log.get({ logCode: code, logTimestamp: timestamp })
                .then(result => resolve(responder.set200(result, 'Log')))
                .catch((err) => {
                    console.error(err);
                    return reject(responder.fail500(err));
                });
        });
    },
    /**
     * This method is async and does not return anything. It logs an error.
     * @param message
     */
    error(message) {
        const log = new Log({
            logCode: 'ERROR',
            logTimestamp: moment().format(),
            message
        });
        console.info(log);
        log.save();
    },
    /**
     * This method is async and does not return anything.
     * It records a notification message in the log.
     * @param message
     */
    notify(message) {
        const log = new Log({
            logCode: 'NOTIFY',
            logTimestamp: moment().format(),
            message
        });
        console.info(log);
        log.save();
    },
    /**
     * This method is async and does not return anything. It logs a success message.
     * @param message
     */
    success(message) {
        const log = new Log({
            logCode: 'SUCCESS',
            logTimestamp: moment().format(),
            message
        });
        console.info(log);
        log.save();
    },
    /**
     * This method is async and does not return anything.
     * It logs your choice of ERROR, NOTIFY, or SUCCESS with details.
     * @param code
     * @param message
     * @param detail
     */
    detail(code, message, detail) {
        const log = new Log({
            logCode: code,
            logTimestamp: moment().format(),
            message,
            details: detail
        });
        console.info(log);
        log.save();
    }
};

export default logs;
