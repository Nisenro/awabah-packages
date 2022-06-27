module.exports = function(param, separator, join) {
    return param.toLowerCase().split(separator).join(join);
}