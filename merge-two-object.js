module.exports = function(obj, object) {
    const o = {
        ...obj,
        ...object,
    };
    return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {})
};