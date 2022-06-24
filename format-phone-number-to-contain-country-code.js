module.exports = function(phoneNumber) {
    const trim = phoneNumber.trim();

    function replaceValue(str, newValue, oldValue) {
        return str.replace(newValue, oldValue);
    }

    if (trim.startsWith('+234')) {
        return `${replaceValue(trim, '+234', '+234')}`;
    }
    if (trim.startsWith('+2340')) {
        return `${replaceValue(trim, '+2340', '+234')}`;
    }
    if (trim.startsWith('2340')) {
        return `${replaceValue(trim, '2340', '+234')}`;
    }
    if (trim.startsWith('234')) {
        return `${replaceValue(trim, '234', '+234')}`;
    }

    if (trim.startsWith('+0')) {
        return `${replaceValue(trim, '+0', '+234')}`;
    }
    if (trim.startsWith('0')) {
        return `${replaceValue(trim, '0', '+234')}`;
    }
    return `+234${phoneNumber}`;
};

// console.log(phoneNumber("090"))