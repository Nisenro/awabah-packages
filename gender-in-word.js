module.exports = function (gender) {
    return gender === 'Male' || gender === 'm' || gender === 'M' ?
        'Male' :
        'Female';

}