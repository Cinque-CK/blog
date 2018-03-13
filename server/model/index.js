const fs = require('fs');
const modelUtil = require('../util/modelUtil');

const files = fs.readdirSync(__dirname + '/');

const js_files = files.filter(f => {
    return f.endsWith('.js');
}, files);

module.exports = {};

for (let f of js_files) {
    const name = f.substring(0, f.length - 3);
    if(name !== 'index'){
        console.log(`import model from file ${f}...`);
        module.exports[name] = require(__dirname + '/' + f);
    }
}

module.exports.sync = () => {
    modelUtil.sync();
};
