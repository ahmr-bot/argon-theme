global.$ = global.jQuery = window.$ = window.jQuery = $ = require('jquery');
window['$'] = $;

require('./argon-design-system/js/argon.js');

require('./libs/jquery-pjax-plus/jquery.pjax.plus.js');
require('jquery.easing/jquery.easing.js');

window['$'].fn.headIndex = require("./libs/headindex/headindex.js").default;

require('./js/main.js');

import './argon-design-system/css/argon.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

require('./style.css');

export default {};