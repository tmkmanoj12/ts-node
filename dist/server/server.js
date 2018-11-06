"use strict";
var bodyParser = require("body-parser");
require('body-parser-xml')(bodyParser);
var express = require("express");
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
        this.setUpRouter();
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
    Server.prototype.setUpRouter = function () {
        var router = express.Router();
        router.use(cors({ credentials: true, origin: true }));
        this.app.use(router);
        console.log('this is change 35');
    };
    /**
    * Configure application
    *
    * @class Server
    */
    Server.prototype.config = function () {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMxQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUN0QyxpQ0FBb0M7QUFDcEMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUM3QyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7QUFFNUI7Ozs7RUFJRTtBQUVGO0lBb0JJOztNQUVFO0lBRUY7UUFFSSw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUVyQix1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQsU0FBUztRQUNULElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBekJEOzs7TUFHRTtJQUVZLGdCQUFTLEdBQXZCO1FBQ0ksT0FBTyxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFvQkQ7Ozs7TUFJRTtJQUNLLDRCQUFXLEdBQWxCO1FBQ0ksSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0lBSUQ7Ozs7TUFJRTtJQUVLLHVCQUFNLEdBQWI7UUFFSSx5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUIsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRWhDLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1lBQy9CLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7WUFDakMsaURBQWlEO1lBQ2pELEdBQUcsQ0FBQyxNQUFNLENBQUMsOEJBQThCLEVBQUUsNkJBQTZCLENBQUMsQ0FBQTtZQUN6RSxHQUFHLENBQUMsTUFBTSxDQUFDLDhCQUE4QixFQUFFLDRNQUE0TSxDQUFDLENBQUE7WUFDeFAsR0FBRyxDQUFDLE1BQU0sQ0FBQywrQkFBK0IsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFBO1lBQ2hGLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxTQUFTO2dCQUFFLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNsRCxJQUFJLEVBQUUsQ0FBQTtRQUNWLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUN4QixLQUFLLEVBQUUsS0FBSztZQUNaLGVBQWUsRUFBRTtnQkFDYixTQUFTLEVBQUUsSUFBSTtnQkFDZixhQUFhLEVBQUUsSUFBSTtnQkFDbkIsYUFBYSxFQUFFLEtBQUssQ0FBQyxnQ0FBZ0M7YUFDeEQ7U0FDSixDQUFDLEVBQUUsVUFBQyxHQUFRLEVBQUUsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO1lBQ2xGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNiLENBQUMsQ0FBQyxDQUFDO1FBR0gsZ0RBQWdEO1FBQ2hELHNCQUFzQjtRQUd0Qix3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFRLEVBQUUsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO1lBQ3BHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO1FBRUgsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQXJHQSxBQXFHQyxJQUFBO0FBQ0QsaUJBQVMsTUFBTSxDQUFBIiwiZmlsZSI6InNlcnZlci9zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpO1xucmVxdWlyZSgnYm9keS1wYXJzZXIteG1sJykoYm9keVBhcnNlcilcbmltcG9ydCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5jb25zdCBtb3JnYW4gPSByZXF1aXJlKFwibW9yZ2FuXCIpO1xuY29uc3QgZXJyb3JIYW5kbGVyID0gcmVxdWlyZShcImVycm9yaGFuZGxlclwiKTtcbmNvbnN0IGNvcnMgPSByZXF1aXJlKFwiY29yc1wiKVxuXG4vKipcbiogVGhlIHNlcnZlci5cbipcbiogQGNsYXNzIFNlcnZlclxuKi9cblxuY2xhc3MgU2VydmVyIHtcblxuICAgIC8qKlxuICAgICogVGhlIGV4cHJlc3MgYXBwbGljYXRpb24uXG4gICAgKiBAdHlwZSB7QXBwbGljYXRpb259XG4gICAgKi9cblxuICAgIHB1YmxpYyBhcHA6IGV4cHJlc3MuQXBwbGljYXRpb247XG5cbiAgICAvKipcbiAgICAqIEJvb3RzdHJhcCB0aGUgYXBwbGljYXRpb24uXG4gICAgKiBAc3RhdGljXG4gICAgKi9cblxuICAgIHB1YmxpYyBzdGF0aWMgYm9vdHN0cmFwKCk6IFNlcnZlciB7XG4gICAgICAgIHJldHVybiBuZXcgU2VydmVyKCk7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgKi9cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIC8vY3JlYXRlIGV4cHJlc3NqcyBhcHBsaWNhdGlvblxuICAgICAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKTtcblxuICAgICAgICAvL2NvbmZpZ3VyZSBhcHBsaWNhdGlvblxuICAgICAgICB0aGlzLmNvbmZpZygpO1xuXG4gICAgICAgIC8vYWRkIGFwaVxuICAgICAgICB0aGlzLnNldFVwUm91dGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGUgUkVTVCBBUEkgcm91dGVzXG4gICAgKlxuICAgICogQGNsYXNzIFNlcnZlclxuICAgICovXG4gICAgcHVibGljIHNldFVwUm91dGVyKCkge1xuICAgICAgICBsZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuICAgICAgICByb3V0ZXIudXNlKGNvcnMoeyBjcmVkZW50aWFsczogdHJ1ZSwgb3JpZ2luOiB0cnVlIH0pKVxuICAgICAgICB0aGlzLmFwcC51c2Uocm91dGVyKVxuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyBjaGFuZ2UgMzUnKVxuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAqIENvbmZpZ3VyZSBhcHBsaWNhdGlvblxuICAgICpcbiAgICAqIEBjbGFzcyBTZXJ2ZXJcbiAgICAqL1xuXG4gICAgcHVibGljIGNvbmZpZygpIHtcblxuICAgICAgICAvLyBtb3JnYW4gbWlkZGxld2FyZSB0byBsb2cgSFRUUCByZXF1ZXN0c1xuICAgICAgICB0aGlzLmFwcC51c2UobW9yZ2FuKFwiZGV2XCIpKTtcbiAgICAgICAgLy91c2UganNvbiBmb3JtIHBhcnNlciBtaWRkbHdhcmVcbiAgICAgICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcblxuICAgICAgICAvL3VzZSBxdWVyeSBzdHJpbmcgcGFyc2VyIG1pZGRsd2FyZVxuICAgICAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtcbiAgICAgICAgICAgIGV4dGVuZGVkOiB0cnVlXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5hcHAudXNlKGZ1bmN0aW9uIChyZXEsIHJlcywgbmV4dCkge1xuICAgICAgICAgICAgLy8gcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKVxuICAgICAgICAgICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdHRVQsUE9TVCxQVVQsREVMRVRFLE9QVElPTlMnKVxuICAgICAgICAgICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdDb250ZW50LVR5cGUsIEFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMsIEF1dGhvcml6YXRpb24sIFgtUmVxdWVzdGVkLVdpdGgsIHgtYWNjZXNzLXRva2VuLCB4LWVtYWlsLWlkLCB4LWRldmljZS1pZCwgeC1kZXZpY2UtdG9rZW4sIHgtZGV2aWNlLXR5cGUsIHJvbGUsIHJvbGUtcmVnaW9uLCBhZG1pbiwgdXNlci1pZCwgdHlwZSwgdXNlcmlkLCBzZWxmJylcbiAgICAgICAgICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUV4cG9zZS1IZWFkZXJzJywgJ29yZ2FuaXphdGlvbklkLCBjYXJkQ29uZmlnVmVyc2lvbicpXG4gICAgICAgICAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ09QVElPTlMnKSByZXR1cm4gcmVzLnNlbmQoMjAwKVxuICAgICAgICAgICAgbmV4dCgpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oeyBsaW1pdDogJzUwbWInIH0pKVxuICAgICAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci54bWwoe1xuICAgICAgICAgICAgbGltaXQ6ICcxTUInLCAgIC8vIFJlamVjdCBwYXlsb2FkIGJpZ2dlciB0aGFuIDEgTUJcbiAgICAgICAgICAgIHhtbFBhcnNlT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZTogdHJ1ZSwgICAgIC8vIFRyaW0gd2hpdGVzcGFjZSBpbnNpZGUgdGV4dCBub2Rlc1xuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZVRhZ3M6IHRydWUsIC8vIFRyYW5zZm9ybSB0YWdzIHRvIGxvd2VyY2FzZVxuICAgICAgICAgICAgICAgIGV4cGxpY2l0QXJyYXk6IGZhbHNlIC8vIE9ubHkgcHV0IG5vZGVzIGluIGFycmF5IGlmID4xXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLCAoZXJyOiBhbnksIHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgICAgICBuZXh0KGVycilcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvKiBkbyB0aGlzIGZpbGUgY29kZSB0byBhbm90aGVyIGNvbmZpZyBmb2xkZXIgKi9cbiAgICAgICAgLy8gY29ubmVjdCB0byBtb25nb29zZVxuXG5cbiAgICAgICAgLy9jYXRjaCA0MDQgYW5kIGZvcndhcmQgdG8gZXJyb3IgaGFuZGxlclxuICAgICAgICB0aGlzLmFwcC51c2UoZnVuY3Rpb24gKGVycjogYW55LCByZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikge1xuICAgICAgICAgICAgZXJyLnN0YXR1cyA9IDQwNDtcbiAgICAgICAgICAgIG5leHQoZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9lcnJvciBoYW5kbGluZ1xuICAgICAgICB0aGlzLmFwcC51c2UoZXJyb3JIYW5kbGVyKCkpO1xuICAgIH1cbn1cbmV4cG9ydCA9IFNlcnZlciJdfQ==
