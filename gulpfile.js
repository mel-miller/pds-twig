const { dest, series, src, watch } = require("gulp");
const autoprefixer = require("autoprefixer");
const concat = require("gulp-concat");
const cssnano = require("cssnano");
const ghpages = require("gh-pages");
const minify = require("gulp-minify");
const postcss = require("gulp-postcss");
const replace = require("gulp-replace");
const sass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");
const rename = require("gulp-rename");

// Configuration.
var config = {};
config.components = {
	scss: "src/components/**/_*.scss",
	js: ["src/components/**/*.js", "!src/components/**/*.stories.js"],
	twig: "src/components/**/*.twig",
};
config.styles = {
	main: "src/styles/pds-main.scss",
	global: "src/styles/**/_*.scss",
};
config.public = {
	css: "public/css",
	img: "public/img/*",
	fonts: "public/fonts/**/*",
};
config.dist = {
	css: "dist/css",
	js: "dist/js",
	twig: "dist/twig",
	img: "dist/img",
	fonts: "dist/fonts",
};

// Compile all scss to css and minify.
const compileStyles = (done) => {
	src(config.styles.main)
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(dest(config.public.css))
		.pipe(dest(config.dist.css))
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(
			rename({
				extname: ".min.css",
			})
		)
		.pipe(dest(config.dist.css));
	done();
};

// Compile component js to a single file and minify.
const compileJs = (done) => {
	src(config.components.js)
		.pipe(concat("pds-main.js"))
		.pipe(dest(config.dist.js))
		.pipe(
			minify({
				ext: {
					min: ".min.js",
				},
			})
		)
		.pipe(dest(config.dist.js));
	done();
};

// Collect individual component js files for dist.
const collectJs = (done) => {
	src(config.components.js).pipe(dest(config.dist.js));
	done();
};

// Collect Twig files for dist.
const collectTwig = (done) => {
	src(config.components.twig).pipe(replace("../", "@pds/")).pipe(dest(config.dist.twig));
	done();
};

// Collect img files for dist.
const collectImg = (done) => {
	src(config.public.img).pipe(dest(config.dist.img));
	done();
};

// Collect font files for dist.
const collectFonts = (done) => {
	src(config.public.fonts).pipe(dest(config.dist.fonts));
	done();
};

// Publish contents of dist directory to pds-drupal repo.
const publishComposer = (done) => {
	ghpages.publish(
		"dist",
		{
			repo: "https://github.com/mel-miller/pds-drupal.git",
			branch: "main",
			dotfiles: true,
			add: true,
			message: "Published from 'mel-miller/pds-twig'",
		},
		function (err) {
			if (err === undefined) {
				console.log("Assets successfully deployed!");
			} else {
				console.log(err);
			}
		}
	);
	done();
};

// Watch for scss changes + recompile.
const watchStyles = () => {
	watch([config.styles.global, config.components.scss], compileStyles);
};

exports.build = series(compileStyles);
exports.publish = series(compileStyles, compileJs, collectJs, collectTwig, collectImg, collectFonts, publishComposer);
exports.default = series(compileStyles, watchStyles);
