module.exports = function(param, separator, join) {
    console.log(param, 'the param')
    return param.toLowerCase().split(separator).join(join);
}