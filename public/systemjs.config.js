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
    '@angular2-material': 'npm:@angular2-material'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  const packages = {
    'app': { defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    '@angular2-material/button': { defaultExtension: 'js', main: 'button.js' },
    '@angular2-material/card': { defaultExtension: 'js', main: 'card.js' },
    '@angular2-material/checkbox': { defaultExtension: 'js', main: 'checkbox.js' },
    '@angular2-material/core': { defaultExtension: 'js', main: 'core.js' },
    '@angular2-material/grid-list': { defaultExtension: 'js', main: 'grid-list.js' },
    '@angular2-material/icon': { defaultExtension: 'js', main: 'icon.js' },
    '@angular2-material/input': { defaultExtension: 'js', main: 'input.js' },
    '@angular2-material/list': { defaultExtension: 'js', main: 'list.js' },
    '@angular2-material/menu': { defaultExtension: 'js', main: 'menu.js' },
    '@angular2-material/sidenav': { defaultExtension: 'js', main: 'sidenav.js' },
    '@angular2-material/slide-toggle': { defaultExtension: 'js', main: 'slide-toggle.js' },
    '@angular2-material/progress-bar': { defaultExtension: 'js', main: 'progress-bar.js' },
    '@angular2-material/progress-circle': { defaultExtension: 'js', main: 'progress-circle.js' },
    '@angular2-material/radio': { defaultExtension: 'js', main: 'radio.js' },
    '@angular2-material/tabs': { defaultExtension: 'js', main: 'tabs.js' },
    '@angular2-material/toolbar': { defaultExtension: 'js', main: 'toolbar.js' },
  };

  // // const packageNames = [
  // //   '@angular/common',
  // //   '@angular/compiler',
  // //   '@angular/core',
  // //   '@angular/forms',
  // //   '@angular/http',
  // //   '@angular/platform-browser',
  // //   '@angular/platform-browser-dynamic',
  // //   '@angular/router',
  // //   '@angular/testing',
  // // ];

  // // // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  // // packageNames.forEach(function (pkgName) {
  // //   packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  // // });

  const config = {
    paths: paths,
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
