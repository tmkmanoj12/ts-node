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
        new winston.transports.Console(),
    ]
});
module.exports = logger;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9sb2dnZXIvd2luc3Rvbi1sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLGlDQUFtQztBQUNuQywrQkFBaUM7QUFDakMsMkJBQTZCO0FBRzdCLElBQU0sY0FBYyxHQUFHO0lBQ25CLE1BQU0sRUFBRTtRQUNKLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxFQUFFLENBQUM7UUFDUCxJQUFJLEVBQUUsQ0FBQztRQUNQLElBQUksRUFBRSxDQUFDO1FBQ1AsT0FBTyxFQUFFLENBQUM7UUFDVixLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssRUFBRSxDQUFDO0tBQ1g7SUFFRCxNQUFNLEVBQUU7UUFDSixLQUFLLEVBQUUsS0FBSztRQUNaLElBQUksRUFBRSxRQUFRO1FBQ2QsSUFBSSxFQUFFLGNBQWM7UUFDcEIsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsTUFBTTtRQUNmLEtBQUssRUFBRSxNQUFNO1FBQ2IsS0FBSyxFQUFFLE1BQU07S0FDaEI7Q0FFSixDQUFDO0FBRUYsT0FBTyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7QUFFeEMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztJQUNoQyxLQUFLLEVBQUUsT0FBTztJQUNkLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFDekIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxFQUMzRCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUNyQixPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQVM7UUFDcEIsSUFBQSwwQkFBUyxFQUFFLGtCQUFLLEVBQUUsc0JBQU8sRUFBRSx1REFBUSxDQUFVO1FBRXJELE9BQU8sTUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBTSxLQUFLLFdBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQ3ZHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUN0RSxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQ0w7SUFDRCxVQUFVLEVBQUU7UUFDUixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO0tBWW5DO0NBQ0osQ0FBQyxDQUFDO0FBRUgsaUJBQVMsTUFBTSxDQUFBIiwiZmlsZSI6ImNvbmZpZy9sb2dnZXIvd2luc3Rvbi1sb2dnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3aW5zdG9uID0gcmVxdWlyZSgnd2luc3RvbicpXG5pbXBvcnQgY29sb3JzID0gcmVxdWlyZSgnY29sb3JzJylcbmltcG9ydCB1dGlsID0gcmVxdWlyZSgndXRpbCcpXG5cblxuY29uc3QgbXlDdXN0b21MZXZlbHMgPSB7XG4gICAgbGV2ZWxzOiB7XG4gICAgICAgIGVycm9yOiAwLFxuICAgICAgICB3YXJuOiAxLFxuICAgICAgICBpbmZvOiAyLFxuICAgICAgICBodHRwOiAzLFxuICAgICAgICB2ZXJib3NlOiA0LFxuICAgICAgICBkZWJ1ZzogNSxcbiAgICAgICAgc2lsbHk6IDZcbiAgICB9LFxuXG4gICAgY29sb3JzOiB7XG4gICAgICAgIGVycm9yOiAncmVkJyxcbiAgICAgICAgd2FybjogJ3llbGxvdycsXG4gICAgICAgIGluZm86ICdpdGFsaWMgZ3JlZW4nLFxuICAgICAgICBodHRwOiAnZ3JheScsXG4gICAgICAgIHZlcmJvc2U6ICdjeWFuJyxcbiAgICAgICAgZGVidWc6ICdibHVlJyxcbiAgICAgICAgc2lsbHk6ICd0ZWFsJ1xuICAgIH0sXG5cbn07XG5cbndpbnN0b24uYWRkQ29sb3JzKG15Q3VzdG9tTGV2ZWxzLmNvbG9ycylcblxuY29uc3QgbG9nZ2VyID0gd2luc3Rvbi5jcmVhdGVMb2dnZXIoe1xuICAgIGxldmVsOiAnc2lsbHknLFxuICAgIGZvcm1hdDogd2luc3Rvbi5mb3JtYXQuY29tYmluZShcbiAgICAgICAgd2luc3Rvbi5mb3JtYXQuY29sb3JpemUoKSxcbiAgICAgICAgd2luc3Rvbi5mb3JtYXQudGltZXN0YW1wKHsgZm9ybWF0OiAnWVlZWS1NTS1ERCBISDptbTpzcycgfSksXG4gICAgICAgIHdpbnN0b24uZm9ybWF0Lmpzb24oKSxcbiAgICAgICAgd2luc3Rvbi5mb3JtYXQucHJpbnRmKChpbmZvOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdGltZXN0YW1wLCBsZXZlbCwgbWVzc2FnZSwgLi4uZXh0cmEgfSA9IGluZm87XG5cbiAgICAgICAgICAgIHJldHVybiBgWyR7Y29sb3JzLnVuZGVybGluZShjb2xvcnMuY3lhbih0aW1lc3RhbXApKX1dIFske2xldmVsfV06ICR7dXRpbC5pbnNwZWN0KChtZXNzYWdlKSwgdHJ1ZSwgMTIsIHRydWUpfSAke1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGV4dHJhKS5sZW5ndGggPyB1dGlsLmluc3BlY3QoKG1lc3NhZ2UpLCB0cnVlLCAxMiwgdHJ1ZSkgOiAnJ1xuICAgICAgICAgICAgICAgIH1gO1xuICAgICAgICB9KVxuICAgICksXG4gICAgdHJhbnNwb3J0czogW1xuICAgICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGUoKSxcbiAgICAgICAgLy91bmNvbW1lbnQgaWYgeW91IHdhbnQgdG8gbG9nIHRvIGEgZmlsZVxuICAgICAgICAvLyBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkZpbGUoe1xuICAgICAgICAvLyAgICAgbGV2ZWw6ICdlcnJvcicsXG4gICAgICAgIC8vICAgICBjb2xvcml6ZTogZmFsc2UsXG4gICAgICAgIC8vICAgICB0aW1lc3RhbXA6IGZhbHNlLFxuICAgICAgICAvLyAgICAganNvbjogZmFsc2UsXG4gICAgICAgIC8vICAgICBmaWxlbmFtZTogX19kaXJuYW1lKycvbG9nZ2VyLmxvZycsXG4gICAgICAgIC8vICAgICBtYXhzaXplOiA1MjQyODgwLFxuICAgICAgICAvLyAgICAgbWF4RmlsZTogMTAsXG4gICAgICAgIC8vICAgICBsb2dzdGFzaDogZmFsc2UsXG4gICAgICAgIC8vICAgICB0YWlsYWJsZTogdHJ1ZX0pXG4gICAgXVxufSk7XG5cbmV4cG9ydCA9IGxvZ2dlciJdfQ==
