(function (global) {
	// paths
	const paths = {
		'npm:': 'node_modules/'
	}

	// map tells the System loader where to look for things
	const map = {
		// App.
		'app': '/',

		// Angular bundles.
		'@angular/core': 'npm:@angular/core/bundles/core.umd.js',
		'@angular/common': 'npm:@angular/common/bundles/common.umd.js',
		'@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
		'@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
		'@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
		'@angular/http': 'npm:@angular/http/bundles/http.umd.js',
		'@angular/router': 'npm:@angular/router/bundles/router.umd.js',
		'@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

		// Other libraries.
		'rxjs': 'npm:rxjs',
		'@angular/material': 'npm:@angular/material/bundles/material.umd.js',
		'@angular/flex-layout': 'npm:@angular/flex-layout/bundles/flex-layout.umd.js',
	};

	// packages tells the System loader how to load when no filename and/or no extension
	const packages = {
		'app': { defaultExtension: 'js' },
		'rxjs': { defaultExtension: 'js' },

		// App barrels.
		'shared/lib': { main: 'index.js', defaultExtension: 'js' },
		'shared/models': { main: 'index.js', defaultExtension: 'js' },
		'lib': { main: 'index.js', defaultExtension: 'js' }
	};

	const config = {
		map: map,
		packages: packages,
		paths: paths
	}

	// filterSystemConfig - index.html's chance to modify config before we register it.
	if (global.filterSystemConfig) { global.filterSystemConfig(config); }

	System.config(config);

})(this);
