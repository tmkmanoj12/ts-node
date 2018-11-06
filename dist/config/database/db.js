"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Mongo = /** @class */ (function () {
    function Mongo() {
    }
    Mongo.startMongo = function () {
        return new Promise(function (resolve, reject) {
            try {
                console.log("In db" + '3');
                var mongooseOptions = {
                    keepAlive: 300000,
                    useNewUrlParser: true,
                };
                mongoose.connect("mongodb://localhost:27017/manoj", mongooseOptions);
                mongoose.connection.on("error", function (error) {
                    reject(false);
                });
                mongoose.connection.on("connected", function () {
                    resolve(true);
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    return Mongo;
}());
exports.Mongo = Mongo;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9kYXRhYmFzZS9kYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFzQztBQUV0QztJQUFBO0lBeUJBLENBQUM7SUF4QmlCLGdCQUFVLEdBQXhCO1FBQ0ksT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLElBQUk7Z0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ3hCLElBQU0sZUFBZSxHQUErQjtvQkFDaEQsU0FBUyxFQUFFLE1BQU07b0JBQ2pCLGVBQWUsRUFBRSxJQUFJO2lCQUV4QixDQUFBO2dCQUVELFFBQVEsQ0FBQyxPQUFPLENBQUMsaUNBQWlDLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBQ3JFLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBLEtBQUs7b0JBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFFakIsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFO29CQUNoQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ2pCLENBQUMsQ0FBQyxDQUFDO2FBQ047WUFBQSxPQUFNLENBQUMsRUFBQztnQkFDTCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDWjtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNMLFlBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLHNCQUFLIiwiZmlsZSI6ImNvbmZpZy9kYXRhYmFzZS9kYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcblxuZXhwb3J0IGNsYXNzIE1vbmdvIHtcbiAgICBwdWJsaWMgc3RhdGljIHN0YXJ0TW9uZ28oKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW4gZGJcIisnMycpXG4gICAgICAgICAgICAgICAgY29uc3QgbW9uZ29vc2VPcHRpb25zOiBtb25nb29zZS5Db25uZWN0aW9uT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAga2VlcEFsaXZlOiAzMDAwMDAsXG4gICAgICAgICAgICAgICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gcG9vbFNpemUgOiAxMDAwIC8vdW5jb21tZW50IGluIHByb2RcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgbW9uZ29vc2UuY29ubmVjdChcIm1vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvbWFub2pcIiwgbW9uZ29vc2VPcHRpb25zKTtcbiAgICAgICAgICAgICAgICBtb25nb29zZS5jb25uZWN0aW9uLm9uKFwiZXJyb3JcIiwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZmFsc2UpXG4gICAgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICAgICAgbW9uZ29vc2UuY29ubmVjdGlvbi5vbihcImNvbm5lY3RlZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgICAgICAgICByZWplY3QoZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbiJdfQ==
