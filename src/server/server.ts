const bodyParser = require("body-parser");
require('body-parser-xml')(bodyParser)
import express = require("express");
const morgan = require("morgan");
const errorHandler = require("errorhandler");
const cors = require("cors")

/**
* The server.
*
* @class Server
*/

class Server {

    /**
    * The express application.
    * @type {Application}
    */

    public app: express.Application;

    /**
    * Bootstrap the application.
    * @static
    */

    public static bootstrap(): Server {
        return new Server();
    }



    /**
    * @constructor
    */

    constructor() {

        //create expressjs application
        this.app = express();

        //configure application
        this.config();

        //add api
        this.setUpRouter();
    }

    /**
    * Create REST API routes
    *
    * @class Server
    */
    public setUpRouter() {
        let router = express.Router()
        router.use(cors({ credentials: true, origin: true }))
        this.app.use(router)
        console.log('this is change 35')
    }



    /**
    * Configure application
    *
    * @class Server
    */

    public config() {

        // morgan middleware to log HTTP requests
        this.app.use(morgan("dev"));
        //use json form parser middlware
        this.app.use(bodyParser.json());

        //use query string parser middlware
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(function (req, res, next) {
            // res.header('Access-Control-Allow-Origin', '*')
            res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
            res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token, x-email-id, x-device-id, x-device-token, x-device-type, role, role-region, admin, user-id, type, userid, self')
            res.header('Access-Control-Expose-Headers', 'organizationId, cardConfigVersion')
            if (req.method === 'OPTIONS') return res.send(200)
            next()
        })
        this.app.use(bodyParser.json({ limit: '50mb' }))
        this.app.use(bodyParser.xml({
            limit: '1MB',   // Reject payload bigger than 1 MB
            xmlParseOptions: {
                normalize: true,     // Trim whitespace inside text nodes
                normalizeTags: true, // Transform tags to lowercase
                explicitArray: false // Only put nodes in array if >1
            }
        }), (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
            next(err)
        });


        /* do this file code to another config folder */
        // connect to mongoose


        //catch 404 and forward to error handler
        this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            err.status = 404;
            next(err);
        });

        //error handling
        this.app.use(errorHandler());
    }
}
export = Server