// exports.formatPhoneNumberToContainCountryCode = function() {
function formatPhoneNumberToContainCountryCode(phoneNumber) {
    console.log("This is a message from the demo package");

    function replaceValue(str, newValue, oldValue) {
        return str.replace(newValue, oldValue);
    }
    if (phoneNumber.startsWith("2340")) {
        console.log("here");
        return `${replaceValue(phoneNumber, "2340", "+234")}`;
    }
    if (phoneNumber.startsWith("+0")) {
        console.log("here 0");

        return `${replaceValue(phoneNumber, "+0", "+234")}`;
    }
    if (phoneNumber.startsWith("234")) {
        console.log(phoneNumber, "numddddb");
        return `${replaceValue(phoneNumber, "234", "+234")}`;
    }
    if (phoneNumber.startsWith("+234")) {
        console.log(phoneNumber, "ndumb");

        return `${replaceValue(phoneNumber, "+234", "+234")}`;
    }
    if (phoneNumber.startsWith("0")) {
        console.log(phoneNumber, "n000umb");

        return `${replaceValue(phoneNumber, "0", "+234")}`;
    }
    return `+234${phoneNumber}`;
}