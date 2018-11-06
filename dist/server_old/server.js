"use strict";
var bodyParser = require("body-parser");
require('body-parser-xml')(bodyParser);
var express = require("express");
var certificate_1 = require("src/app/controllers/certificate");
var certificate_2 = require("src/app/services/certificate");
var morgan = require("morgan");
var errorHandler = require("errorhandler");
var cors = require("cors");
/**
* The server.
*
* @class Server
*/
var Server = /** @class */ (function () {
    /**
    * @constructor
    */
    function Server() {
        //create expressjs application
        this.app = express();
        //configure application
        this.config();
        //add api
        this.setUpAppRouting();
    }
    /**
    * Bootstrap the application.
    * @static
    */
    Server.bootstrap = function () {
        return new Server();
    };
    /**
    * Create REST API routes
    *
    * @class Server
    */
    Server.prototype.setUpAppRouting = function () {
        this.app.use('/manoj', new certificate_1.CertificateController(new certificate_2.CertificationService()).router);
    };
    /**
    * Configure application
    *
    * @class Server
    */
    Server.prototype.config = function () {
        this.app.use(cors({ credentials: true, origin: true }));
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
            res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token, x-email-id, x-device-id, x-device-token, x-device-type, role, role-region, admin, user-id, type, userid, self');
            res.header('Access-Control-Expose-Headers', 'organizationId, cardConfigVersion');
            if (req.method === 'OPTIONS')
                return res.send(200);
            next();
        });
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.xml({
            limit: '1MB',
            xmlParseOptions: {
                normalize: true,
                normalizeTags: true,
                explicitArray: false // Only put nodes in array if >1
            }
        }), function (err, req, res, next) {
            next(err);
        });
        /* do this file code to another config folder */
        // connect to mongoose
        //catch 404 and forward to error handler
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        //error handling
        this.app.use(errorHandler());
    };
    return Server;
}());
module.exports = Server;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LEdBQVEsRUFBRSxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7WUFDbEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUM7UUFHSCxnREFBZ0Q7UUFDaEQsc0JBQXNCO1FBR3RCLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQVEsRUFBRSxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7WUFDcEcsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7UUFFSCxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0wsYUFBQztBQUFELENBbkdBLEFBbUdDLElBQUE7QUFDRCxpQkFBUyxNQUFNLENBQUEiLCJmaWxlIjoic2VydmVyX29sZC9zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpO1xucmVxdWlyZSgnYm9keS1wYXJzZXIteG1sJykoYm9keVBhcnNlcilcbmltcG9ydCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5pbXBvcnQgeyBDZXJ0aWZpY2F0ZUNvbnRyb2xsZXIgfSBmcm9tIFwic3JjL2FwcC9jb250cm9sbGVycy9jZXJ0aWZpY2F0ZVwiO1xuaW1wb3J0IHsgQ2VydGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tIFwic3JjL2FwcC9zZXJ2aWNlcy9jZXJ0aWZpY2F0ZVwiO1xuY29uc3QgbW9yZ2FuID0gcmVxdWlyZShcIm1vcmdhblwiKTtcbmNvbnN0IGVycm9ySGFuZGxlciA9IHJlcXVpcmUoXCJlcnJvcmhhbmRsZXJcIik7XG5jb25zdCBjb3JzID0gcmVxdWlyZShcImNvcnNcIilcblxuLyoqXG4qIFRoZSBzZXJ2ZXIuXG4qXG4qIEBjbGFzcyBTZXJ2ZXJcbiovXG5cbmNsYXNzIFNlcnZlciB7XG5cbiAgICAvKipcbiAgICAqIFRoZSBleHByZXNzIGFwcGxpY2F0aW9uLlxuICAgICogQHR5cGUge0FwcGxpY2F0aW9ufVxuICAgICovXG5cbiAgICBwdWJsaWMgYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uO1xuXG4gICAgLyoqXG4gICAgKiBCb290c3RyYXAgdGhlIGFwcGxpY2F0aW9uLlxuICAgICogQHN0YXRpY1xuICAgICovXG5cbiAgICBwdWJsaWMgc3RhdGljIGJvb3RzdHJhcCgpOiBTZXJ2ZXIge1xuICAgICAgICByZXR1cm4gbmV3IFNlcnZlcigpO1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICovXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICAvL2NyZWF0ZSBleHByZXNzanMgYXBwbGljYXRpb25cbiAgICAgICAgdGhpcy5hcHAgPSBleHByZXNzKCk7XG5cbiAgICAgICAgLy9jb25maWd1cmUgYXBwbGljYXRpb25cbiAgICAgICAgdGhpcy5jb25maWcoKTtcblxuICAgICAgICAvL2FkZCBhcGlcbiAgICAgICAgdGhpcy5zZXRVcEFwcFJvdXRpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENyZWF0ZSBSRVNUIEFQSSByb3V0ZXNcbiAgICAqXG4gICAgKiBAY2xhc3MgU2VydmVyXG4gICAgKi9cbiAgICBwdWJsaWMgc2V0VXBBcHBSb3V0aW5nKCkge1xuICAgICAgICB0aGlzLmFwcC51c2UoJy9tYW5vaicsIG5ldyBDZXJ0aWZpY2F0ZUNvbnRyb2xsZXIgKG5ldyBDZXJ0aWZpY2F0aW9uU2VydmljZSgpKS5yb3V0ZXIpXG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICogQ29uZmlndXJlIGFwcGxpY2F0aW9uXG4gICAgKlxuICAgICogQGNsYXNzIFNlcnZlclxuICAgICovXG5cbiAgICBwdWJsaWMgY29uZmlnKCkge1xuXG4gICAgICAgIHRoaXMuYXBwLnVzZShjb3JzKHsgY3JlZGVudGlhbHM6IHRydWUsIG9yaWdpbjogdHJ1ZSB9KSlcbiAgICAgICAgLy8gbW9yZ2FuIG1pZGRsZXdhcmUgdG8gbG9nIEhUVFAgcmVxdWVzdHNcbiAgICAgICAgdGhpcy5hcHAudXNlKG1vcmdhbihcImRldlwiKSk7XG4gICAgICAgIC8vdXNlIGpzb24gZm9ybSBwYXJzZXIgbWlkZGx3YXJlXG4gICAgICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5cbiAgICAgICAgLy91c2UgcXVlcnkgc3RyaW5nIHBhcnNlciBtaWRkbHdhcmVcbiAgICAgICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XG4gICAgICAgICAgICBleHRlbmRlZDogdHJ1ZVxuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuYXBwLnVzZShmdW5jdGlvbiAocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgICAgIC8vIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcbiAgICAgICAgICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnR0VULFBPU1QsUFVULERFTEVURSxPUFRJT05TJylcbiAgICAgICAgICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAnQ29udGVudC1UeXBlLCBBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzLCBBdXRob3JpemF0aW9uLCBYLVJlcXVlc3RlZC1XaXRoLCB4LWFjY2Vzcy10b2tlbiwgeC1lbWFpbC1pZCwgeC1kZXZpY2UtaWQsIHgtZGV2aWNlLXRva2VuLCB4LWRldmljZS10eXBlLCByb2xlLCByb2xlLXJlZ2lvbiwgYWRtaW4sIHVzZXItaWQsIHR5cGUsIHVzZXJpZCwgc2VsZicpXG4gICAgICAgICAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1FeHBvc2UtSGVhZGVycycsICdvcmdhbml6YXRpb25JZCwgY2FyZENvbmZpZ1ZlcnNpb24nKVxuICAgICAgICAgICAgaWYgKHJlcS5tZXRob2QgPT09ICdPUFRJT05TJykgcmV0dXJuIHJlcy5zZW5kKDIwMClcbiAgICAgICAgICAgIG5leHQoKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci5qc29uKHsgbGltaXQ6ICc1MG1iJyB9KSlcbiAgICAgICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIueG1sKHtcbiAgICAgICAgICAgIGxpbWl0OiAnMU1CJywgICAvLyBSZWplY3QgcGF5bG9hZCBiaWdnZXIgdGhhbiAxIE1CXG4gICAgICAgICAgICB4bWxQYXJzZU9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBub3JtYWxpemU6IHRydWUsICAgICAvLyBUcmltIHdoaXRlc3BhY2UgaW5zaWRlIHRleHQgbm9kZXNcbiAgICAgICAgICAgICAgICBub3JtYWxpemVUYWdzOiB0cnVlLCAvLyBUcmFuc2Zvcm0gdGFncyB0byBsb3dlcmNhc2VcbiAgICAgICAgICAgICAgICBleHBsaWNpdEFycmF5OiBmYWxzZSAvLyBPbmx5IHB1dCBub2RlcyBpbiBhcnJheSBpZiA+MVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSwgKGVycjogYW55LCByZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgICAgICAgbmV4dChlcnIpXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgLyogZG8gdGhpcyBmaWxlIGNvZGUgdG8gYW5vdGhlciBjb25maWcgZm9sZGVyICovXG4gICAgICAgIC8vIGNvbm5lY3QgdG8gbW9uZ29vc2VcblxuXG4gICAgICAgIC8vY2F0Y2ggNDA0IGFuZCBmb3J3YXJkIHRvIGVycm9yIGhhbmRsZXJcbiAgICAgICAgdGhpcy5hcHAudXNlKGZ1bmN0aW9uIChlcnI6IGFueSwgcmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGVyci5zdGF0dXMgPSA0MDQ7XG4gICAgICAgICAgICBuZXh0KGVycik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vZXJyb3IgaGFuZGxpbmdcbiAgICAgICAgdGhpcy5hcHAudXNlKGVycm9ySGFuZGxlcigpKTtcbiAgICB9XG59XG5leHBvcnQgPSBTZXJ2ZXIiXX0=
