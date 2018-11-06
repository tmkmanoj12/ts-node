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
var user_model_1 = require("../dal/models/user-model");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromPromise");
var CertificationService = /** @class */ (function () {
    function CertificationService() {
    }
    CertificationService.prototype.getName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var user, user$;
                        return __generator(this, function (_a) {
                            user = new user_model_1.User({
                                email: 'Manoj',
                                password: 'manoj',
                                firstName: 'Manoj'
                            });
                            console.log('berore observ');
                            user$ = Observable_1.Observable.fromPromise(user.save());
                            console.log(user$);
                            user$.subscribe(function (user) {
                                console.log('User', user);
                                resolve(user);
                            }, function (error) {
                                console.log(error);
                                reject(error);
                            }, function () {
                                console.log('It is completed');
                            });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    return CertificationService;
}());
exports.CertificationService = CertificationService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9jZXJ0aWZpY2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQTBEO0FBQzFELDhDQUE0QztBQUM1QywyQ0FBd0M7QUFFeEM7SUFBQTtJQTZCQSxDQUFDO0lBNUJnQixzQ0FBTyxHQUFwQjs7OztnQkFDSSxzQkFBTyxJQUFJLE9BQU8sQ0FBRSxVQUFPLE9BQU8sRUFBRSxNQUFNOzs7NEJBQ2hDLElBQUksR0FBRyxJQUFJLGlCQUFJLENBQUM7Z0NBQ2xCLEtBQUssRUFBRSxPQUFPO2dDQUNkLFFBQVEsRUFBRSxPQUFPO2dDQUNqQixTQUFTLEVBQUcsT0FBTzs2QkFDdEIsQ0FBQyxDQUFBOzRCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUE7NEJBR3RCLEtBQUssR0FBMEIsdUJBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7NEJBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7NEJBQ2xCLEtBQUssQ0FBQyxTQUFTLENBQ1gsVUFBQyxJQUFXO2dDQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxDQUFBO2dDQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7NEJBQ2pCLENBQUMsRUFDRCxVQUFDLEtBQVk7Z0NBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQ0FDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBOzRCQUNqQixDQUFDLEVBQ0Q7Z0NBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBOzRCQUNsQyxDQUFDLENBQ0osQ0FBQTs7O3lCQUVKLENBQUMsRUFBQTs7O0tBQ0w7SUFDTCwyQkFBQztBQUFELENBN0JBLEFBNkJDLElBQUE7QUE3Qlksb0RBQW9CIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9jZXJ0aWZpY2F0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZXJNb2RlbCwgVXNlciB9IGZyb20gJy4uL2RhbC9tb2RlbHMvdXNlci1tb2RlbCdcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnXG5pbXBvcnQgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21Qcm9taXNlXCJcbmltcG9ydCB7IFVzZXIgYXMgSXVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2RhbC91c2VyLWludGVyZmFjZSc7XG5leHBvcnQgY2xhc3MgQ2VydGlmaWNhdGlvblNlcnZpY2Uge1xuICAgIHB1YmxpYyBhc3luYyBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcih7XG4gICAgICAgICAgICAgICAgZW1haWw6ICdNYW5vaicsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICdtYW5vaicsXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lIDogJ01hbm9qJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiZXJvcmUgb2JzZXJ2JylcbiAgICAgICAgICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IHVzZXIuc2F2ZSgpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICBjb25zdCB1c2VyJDogT2JzZXJ2YWJsZTx1c2VyTW9kZWw+ID0gT2JzZXJ2YWJsZS5mcm9tUHJvbWlzZSh1c2VyLnNhdmUoKSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIkKVxuICAgICAgICAgICAgdXNlciQuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICh1c2VyOiBJdXNlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXNlcicsdXNlcilcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh1c2VyKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSXQgaXMgY29tcGxldGVkJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG5cbiAgICAgICAgfSlcbiAgICB9XG59Il19
