const { src, dest, watch, series } = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("./scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write("./maps"))
    .pipe(dest("./css"));
}

exports.default = function () {
  watch("./scss/**/*.scss", buildStyles);
};

exports.buildStyles = buildStyles;
