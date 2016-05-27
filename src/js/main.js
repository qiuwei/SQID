requirejs.config({
	baseUrl: './js',
	"paths": {

		"jquery": "../lib/jquery",
		"jquery-ui": "../lib/jquery-ui",
		"bootstrap": '../lib/bootstrap-3.3.6-dist/js/bootstrap',
		
		"spin": "../lib/spin",

		"angular": "../lib/angular",
		"ngAnimate": "../lib/angular-animate",
		"ngRoute": "../lib/angular-route",
		"ngTranslate": "../lib/angular-translate",
		// TODO - lazy loader for language definition files:
		// https://cdnjs.cloudflare.com/ajax/libs/angular-translate/2.10.0/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js
		"ngComplete": "../lib/angucomplete-alt",
		"ui-boostrap-tpls": "../lib/ui-bootstrap-tpls-1.3.2"
	},
	shim: {
		'jquery-ui': ['jquery'],
		'bootstrap': ['jquery'],
		'ui-boostrap-tpls' : ['bootstrap', 'angular'],

		'angular': {
			exports: 'angular',
			deps: ['jquery']
		},
		'ngAnimate': ['angular'],
		'ngRoute': ['angular'],
		'ngTranslate': ['angular'],
		'ngComplete': ['angular'],

		// 'util/util': ['angular', 'spin'],
		// 'util/paginationController': ['util/util'],
		//'query/queryInterface': ['angular'],

		// 'app/app': {
		// 	deps: ['jquery-ui', 'ui-boostrap-tpls', 'ngAnimate', 'ngRoute', 'ngTranslate', 'ngComplete',
		// 			'util/paginationController', 'queryInterface']

		// 	// full deps including nested (best practice?)
		// 	// ['jquery', 'jquery-ui','bootstrap', 'spin', 'angular', 'ngAnimate', 'ngRoute', 'ngTranslate', 'ngComplete', 'ui-boostrap-tpls', 'util', 'paginationController', 'queryInterface']
		// },

		// 'app/browse': ['app/app'],
		// 'app/viewController': ['app/app'],
		// 'app/statController': ['app/app'],
	}
});


// Load the main app module to start the app
//requirejs(['app', 'tableController', 'viewController', 'statController'], function() {
requirejs([
	'app/app',
	'app/browse',
	'app/view', 
	'app/statistics',
	'app/translate',

], function() {
	jQuery(function() {
		console.log('haz all filez, ready, actionz!');
		angular.bootstrap( document, ['classBrowserApp'], { strictDi: true } );
	});
});