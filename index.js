function formatPhoneNumberToContainCountryCode(phoneNumber) {
    function replaceValue(str, newValue, oldValue) {
        return str.replace(newValue, oldValue);
    }
    if (phoneNumber.startsWith('+2340')) {
        return `${replaceValue(phoneNumber, '+2340', '+234')}`;
    }
    if (phoneNumber.startsWith('2340')) {
        return `${replaceValue(phoneNumber, '2340', '+234')}`;
    }
    if (phoneNumber.startsWith('+0')) {
        return `${replaceValue(phoneNumber, '+0', '+234')}`;
    }
    if (phoneNumber.startsWith('234')) {
        return `${replaceValue(phoneNumber, '234', '+234')}`;
    }

    if (phoneNumber.startsWith('0')) {
        return `${replaceValue(phoneNumber, '0', '+234')}`;
    }
    return `+234${phoneNumber}`;
}
// console.log(formatPhoneNumberToContainCountryCode("0900"))
module.exports = formatPhoneNumberToContainCountryCode