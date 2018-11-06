"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var winston = require("winston");
var colors = require("colors");
var util = require("util");
var myCustomLevels = {
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
winston.addColors(myCustomLevels.colors);
var logger = winston.createLogger({
    level: 'silly',
    format: winston.format.combine(winston.format.colorize(), winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston.format.json(), winston.format.printf(function (info) {
        var timestamp = info.timestamp, level = info.level, message = info.message, extra = __rest(info, ["timestamp", "level", "message"]);
        return "[" + colors.underline(colors.cyan(timestamp)) + "] [" + level + "]: " + util.inspect((message), true, 12, true) + " " + (Object.keys(extra).length ? util.inspect((message), true, 12, true) : '');
    })),
    transports: [
        new winston.transports.Console()
    ]
});
logger.profile = winston.profile;
logger.startTimer = winston.startTimer;
module.exports = logger;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9sb2dnZXIvd2luc3Rvbi1sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLGlDQUFtQztBQUNuQywrQkFBaUM7QUFDakMsMkJBQTZCO0FBRzdCLElBQU0sY0FBYyxHQUFHO0lBQ25CLE1BQU0sRUFBRTtRQUNKLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxFQUFFLENBQUM7UUFDUCxJQUFJLEVBQUUsQ0FBQztRQUNQLElBQUksRUFBRSxDQUFDO1FBQ1AsT0FBTyxFQUFFLENBQUM7UUFDVixLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssRUFBRSxDQUFDO0tBQ1g7SUFFRCxNQUFNLEVBQUU7UUFDSixLQUFLLEVBQUUsS0FBSztRQUNaLElBQUksRUFBRSxRQUFRO1FBQ2QsSUFBSSxFQUFFLGNBQWM7UUFDcEIsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsTUFBTTtRQUNmLEtBQUssRUFBRSxNQUFNO1FBQ2IsS0FBSyxFQUFFLE1BQU07S0FDaEI7Q0FFSixDQUFDO0FBRUYsT0FBTyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7QUFFeEMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztJQUNoQyxLQUFLLEVBQUUsT0FBTztJQUNkLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFDekIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxFQUMzRCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUNyQixPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQVM7UUFDcEIsSUFBQSwwQkFBUyxFQUFFLGtCQUFLLEVBQUUsc0JBQU8sRUFBRSx1REFBUSxDQUFVO1FBRXJELE9BQU8sTUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBTSxLQUFLLFdBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQ3ZHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUN0RSxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQ0w7SUFDRCxVQUFVLEVBQUU7UUFDUixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO0tBQ25DO0NBQ0osQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFBO0FBQ2hDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQTtBQUN0QyxpQkFBUyxNQUFNLENBQUEiLCJmaWxlIjoiY29uZmlnL2xvZ2dlci93aW5zdG9uLWxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdpbnN0b24gPSByZXF1aXJlKCd3aW5zdG9uJylcbmltcG9ydCBjb2xvcnMgPSByZXF1aXJlKCdjb2xvcnMnKVxuaW1wb3J0IHV0aWwgPSByZXF1aXJlKCd1dGlsJylcblxuXG5jb25zdCBteUN1c3RvbUxldmVscyA9IHtcbiAgICBsZXZlbHM6IHtcbiAgICAgICAgZXJyb3I6IDAsXG4gICAgICAgIHdhcm46IDEsXG4gICAgICAgIGluZm86IDIsXG4gICAgICAgIGh0dHA6IDMsXG4gICAgICAgIHZlcmJvc2U6IDQsXG4gICAgICAgIGRlYnVnOiA1LFxuICAgICAgICBzaWxseTogNlxuICAgIH0sXG5cbiAgICBjb2xvcnM6IHtcbiAgICAgICAgZXJyb3I6ICdyZWQnLFxuICAgICAgICB3YXJuOiAneWVsbG93JyxcbiAgICAgICAgaW5mbzogJ2l0YWxpYyBncmVlbicsXG4gICAgICAgIGh0dHA6ICdncmF5JyxcbiAgICAgICAgdmVyYm9zZTogJ2N5YW4nLFxuICAgICAgICBkZWJ1ZzogJ2JsdWUnLFxuICAgICAgICBzaWxseTogJ3RlYWwnXG4gICAgfSxcblxufTtcblxud2luc3Rvbi5hZGRDb2xvcnMobXlDdXN0b21MZXZlbHMuY29sb3JzKVxuXG5jb25zdCBsb2dnZXIgPSB3aW5zdG9uLmNyZWF0ZUxvZ2dlcih7XG4gICAgbGV2ZWw6ICdzaWxseScsXG4gICAgZm9ybWF0OiB3aW5zdG9uLmZvcm1hdC5jb21iaW5lKFxuICAgICAgICB3aW5zdG9uLmZvcm1hdC5jb2xvcml6ZSgpLFxuICAgICAgICB3aW5zdG9uLmZvcm1hdC50aW1lc3RhbXAoeyBmb3JtYXQ6ICdZWVlZLU1NLUREIEhIOm1tOnNzJyB9KSxcbiAgICAgICAgd2luc3Rvbi5mb3JtYXQuanNvbigpLFxuICAgICAgICB3aW5zdG9uLmZvcm1hdC5wcmludGYoKGluZm86IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyB0aW1lc3RhbXAsIGxldmVsLCBtZXNzYWdlLCAuLi5leHRyYSB9ID0gaW5mbztcblxuICAgICAgICAgICAgcmV0dXJuIGBbJHtjb2xvcnMudW5kZXJsaW5lKGNvbG9ycy5jeWFuKHRpbWVzdGFtcCkpfV0gWyR7bGV2ZWx9XTogJHt1dGlsLmluc3BlY3QoKG1lc3NhZ2UpLCB0cnVlLCAxMiwgdHJ1ZSl9ICR7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZXh0cmEpLmxlbmd0aCA/IHV0aWwuaW5zcGVjdCgobWVzc2FnZSksIHRydWUsIDEyLCB0cnVlKSA6ICcnXG4gICAgICAgICAgICAgICAgfWA7XG4gICAgICAgIH0pXG4gICAgKSxcbiAgICB0cmFuc3BvcnRzOiBbXG4gICAgICAgIG5ldyB3aW5zdG9uLnRyYW5zcG9ydHMuQ29uc29sZSgpXG4gICAgXVxufSk7XG5cbmxvZ2dlci5wcm9maWxlID0gd2luc3Rvbi5wcm9maWxlXG5sb2dnZXIuc3RhcnRUaW1lciA9IHdpbnN0b24uc3RhcnRUaW1lclxuZXhwb3J0ID0gbG9nZ2VyIl19
