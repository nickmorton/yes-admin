(function (global) {

  // map tells the System loader where to look for things
  const map = {
    'app': '/',
    'rxjs': 'node_modules/rxjs',
    '@angular': 'node_modules/@angular',
    '@angular2-material': 'node_modules/@angular2-material'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  const packages = {
    'app': { defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    '@angular2-material/button': { defaultExtension: 'js', main: 'button.js' },
    '@angular2-material/card': { defaultExtension: 'js', main: 'card.js' },
    '@angular2-material/checkbox': { defaultExtension: 'js', main: 'checkbox.js' },
    '@angular2-material/core': { defaultExtension: 'js', main: 'core.js' },
    '@angular2-material/icon': { defaultExtension: 'js', main: 'icon.js' },
    '@angular2-material/input': { defaultExtension: 'js', main: 'input.js' },
    '@angular2-material/list': { defaultExtension: 'js', main: 'list.js' },
    '@angular2-material/sidenav': { defaultExtension: 'js', main: 'sidenav.js' },
    '@angular2-material/progress-circle': { defaultExtension: 'js', main: 'progress-circle.js' },
    '@angular2-material/radio': { defaultExtension: 'js', main: 'radio.js' },
    '@angular2-material/toolbar': { defaultExtension: 'js', main: 'toolbar.js' },
  };

  const packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function (pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  const config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
