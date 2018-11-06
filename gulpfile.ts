import gulp = require('gulp')
import del = require('del')
import runSequence = require('run-sequence')
import sourceMaps = require('gulp-sourcemaps')
import tsc = require('gulp-typescript');
import plumber = require('gulp-plumber');
const notify = require('gulp-notify');
import nodemon = require('gulp-nodemon')
import gulpMocha = require('gulp-mocha')
/**
* Remove dist directory.
*/
gulp.task("Clean:Dist", (done: any) => {
    return del(["dist"], done);
});

/**
* Copy start script.
*/
gulp.task("Copy:Start-Script", () => {
    return gulp.src("src/bin/*")
        .pipe(gulp.dest("dist/bin"));
});
/**
 * Copy static assets like html files
 */


gulp.task("Copy:Static-Assets", () => {
    return gulp.src(["src/**/*.html", "src/**/*.css"])
        .pipe(gulp.dest("dist/"));
});



/**
* Build the server.
*/
gulp.task("Build:Typescript", () => {
    const project = tsc.createProject("tsconfig.json");
    const result = gulp.src("src/**/*.ts")
        .pipe(plumber({
            errorHandler: function (err: any) {
                notify.onError({
                    title: "Gulp error",
                    message: err.toString()
                })(err);
            }
        }))
        .pipe(sourceMaps.init())
        .pipe(project());
    return result.js
        .pipe(sourceMaps.write())
        .pipe(gulp.dest("dist/"));
});

gulp.task("Build:Test-Cases", (done) => {
    const project = tsc.createProject("tsconfig.json");
    const result = gulp.src("src/**/*spec.ts")
        .pipe(plumber({
            errorHandler: function (err: any) {
                notify.onError({
                    title: "Gulp error",
                    message: err.toString()
                })(err);
            }
        }))
        .pipe(sourceMaps.init())
        .pipe(project());
    return result.js
        .pipe(sourceMaps.write())
        .pipe(gulp.dest("dist/"));
});

gulp.task("Start:Server", (done) => {
    runSequence(["Build:Typescript", "Watch"], function () {
        let stream = nodemon({
            script: "dist/bin/www",
            watch: ['dist/server/server.js'],
            verbose: true

        })
        stream
            .on("restart", () => {
                console.log("restarted");
            })
            .on('crash', function () {
                console.error('Application has crashed!\n')
                stream.emit('restart', 10)  // restart the server in 10 seconds
            })
        console.log('about to done')
        done(null)
    })

})



gulp.task("Watch", () => {
    const watcherTs = gulp.watch(["src/**/!(*.spec.ts)"], () => {
        runSequence('Build:Typescript')
    })
    const watcherHtml = gulp.watch(["src/**/*.html", "src/**/*.css"], () => {
        runSequence('Copy:Static-Assets')
    })
    const testWatch = gulp.watch(["src/**/*.spec.ts"], () => {
        runSequence('Build:Test-Cases', () => {
            runSequence('Test:Test-Cases')
        })
    })
    watcherTs.on('change', function (changedDate: Object, stats) {
        console.log('Typescript File ' + JSON.stringify(changedDate) + ' was changed');
    });

    watcherTs.on('unlink', function (path) {
        console.log('TypeScript File ' + path + ' was removed');
    });
    watcherHtml.on('change', function (changedDate: Object, stats) {
        console.log('Html File ' + JSON.stringify(changedDate) + ' was changed');
    });

    watcherHtml.on('unlink', function (path) {
        console.log('Html File ' + path + ' was removed');
    });
})
gulp.task('Test:Test-Cases', (done) => {
    gulp.src('dist/tests/**/*.spec.js', { read: false })
        .pipe(gulpMocha({
            timeout: 120000, reporter: 'spec'
        }))
        .once('error', (err: any) => {
            console.error(err);
            // process.exit(1);
        })
        .once('end', () => {
            process.exit();
        });
    done(null)
});



/**
* Build the project.
*/
gulp.task("default", () => {
    runSequence("Clean:Dist", "Copy:Start-Script", "Copy:Static-Assets",'Start:Server','Build:Test-Cases','Test:Test-Cases')

})
