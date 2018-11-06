
import winston = require('winston')
import colors = require('colors')
import util = require('util')


const myCustomLevels = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        verbose: 4,
        debug: 5,
        silly: 6
    },

    colors: {
        error: 'red',
        warn: 'yellow',
        info: 'italic green',
        http: 'gray',
        verbose: 'cyan',
        debug: 'blue',
        silly: 'teal'
    },

};

winston.addColors(myCustomLevels.colors)

const logger = winston.createLogger({
    level: 'silly',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.json(),
        winston.format.printf((info: any) => {
            const { timestamp, level, message, ...extra } = info;

            return `[${colors.underline(colors.cyan(timestamp))}] [${level}]: ${util.inspect((message), true, 12, true)} ${
                Object.keys(extra).length ? util.inspect((message), true, 12, true) : ''
                }`;
        })
    ),
    transports: [
        new winston.transports.Console()
    ]
});

logger.profile = winston.profile
logger.startTimer = winston.startTimer
export = logger