"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CertificateController = /** @class */ (function () {
    function CertificateController(certificationService) {
        var _this = this;
        this.certificationService = certificationService;
        this.read = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("this is url", req.originalUrl);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.certificationService.getName()];
                    case 2:
                        result = _a.sent();
                        res.json(result);
                        next();
                        return [2 /*return*/];
                    case 3:
                        e_1 = _a.sent();
                        res.status(500);
                        res.json(e_1);
                        next();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.router = express_1.Router();
        this.routes();
    }
    CertificateController.prototype.routes = function () {
        this.router.get('/kumar', this.read);
    };
    return CertificateController;
}());
exports.CertificateController = CertificateController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb250cm9sbGVycy9jZXJ0aWZpY2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWlFO0FBR2pFO0lBSUksK0JBQW9CLG9CQUEwQztRQUE5RCxpQkFHQztRQUhtQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBUXRELFNBQUksR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7Ozs7O3dCQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7Ozs7d0JBRTFCLHFCQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsRUFBQTs7d0JBQWxELE1BQU0sR0FBRyxTQUF5Qzt3QkFDdEQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTt3QkFDaEIsSUFBSSxFQUFFLENBQUE7d0JBQ04sc0JBQU07Ozt3QkFFUCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dCQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUE7d0JBQ1gsSUFBSSxFQUFFLENBQUE7Ozs7O2FBRVosQ0FBQTtRQW5CRyxJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFNLEVBQUUsQ0FBQTtRQUN0QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDakIsQ0FBQztJQUVPLHNDQUFNLEdBQWQ7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFjTCw0QkFBQztBQUFELENBekJBLEFBeUJDLElBQUE7QUF6Qlksc0RBQXFCIiwiZmlsZSI6ImFwcC9jb250cm9sbGVycy9jZXJ0aWZpY2F0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciwgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgeyBDZXJ0aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NlcnRpZmljYXRlJztcblxuZXhwb3J0IGNsYXNzIENlcnRpZmljYXRlQ29udHJvbGxlciB7XG5cbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXJcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2VydGlmaWNhdGlvblNlcnZpY2U6IENlcnRpZmljYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMucm91dGVyID0gUm91dGVyKClcbiAgICAgICAgdGhpcy5yb3V0ZXMoKVxuICAgIH1cblxuICAgIHByaXZhdGUgcm91dGVzKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5nZXQoJy9rdW1hcicsIHRoaXMucmVhZClcbiAgICB9XG4gICAgcHJpdmF0ZSByZWFkID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB1cmxcIiwgcmVxLm9yaWdpbmFsVXJsKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuY2VydGlmaWNhdGlvblNlcnZpY2UuZ2V0TmFtZSgpXG4gICAgICAgICAgICByZXMuanNvbihyZXN1bHQpXG4gICAgICAgICAgICBuZXh0KClcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICByZXMuc3RhdHVzKDUwMClcbiAgICAgICAgICAgcmVzLmpzb24oZSlcbiAgICAgICAgICAgbmV4dCgpXG4gICAgICAgIH1cbiAgICB9XG59Il19
