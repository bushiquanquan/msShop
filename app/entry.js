import content  from './content';
require('./style.css');
let  config = require('../package.json');
document.write('I am success, as entry.js');
document.write(content +'<br>');
document.write(config.author);
