function formatPhoneNumberToContainCountryCode(phoneNumber: string) {
  function replaceValue(str: string, newValue: string, oldValue: string) {
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
  return phoneNumber;
}

module.exports = { formatPhoneNumberToContainCountryCode };
