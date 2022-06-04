 function checkPhoneNumber(phoneNumber) {
     function replaceValue(str, neww, old) {
         return str.replace(neww, old);
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