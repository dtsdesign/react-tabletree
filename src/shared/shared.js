// kick off point to create a shared.css / shared.js file site-wide
// import 'bootstrap-sass/assets/javascripts/bootstrap';
import $ from 'jquery';
// TODO: include this only where necessary?
// import 'jquery-validation';
// import 'jquery-validation-unobtrusive';

import './site.scss';

// expost jquery as global
window.$ = $;
window.jQuery = $;
