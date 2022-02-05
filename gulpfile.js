const { dest, series, src, watch } = require("gulp");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const ghpages = require("gh-pages");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");
const rename = require("gulp-rename");

// Configuration.
var config = {};
config.components = {
	twig: "src/components/**/*.twig",
	scss: "src/components/**/_*.scss",
};
config.styles = {
	main: "src/styles/main.scss",
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

// Compile Twig files for dist.
const compileTwig = (done) => {
	src(config.components.twig).pipe(dest(config.dist.twig));
	done();
};

// Compile img files for dist.
const compileImg = (done) => {
	src(config.public.img).pipe(dest(config.dist.img));
	done();
};

// Compile font files for dist.
const compileFonts = (done) => {
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

exports.build = series(compileStyles, compileTwig, compileImg, compileFonts);
exports.publish = series(publishComposer);
exports.default = series(compileStyles, watchStyles);
