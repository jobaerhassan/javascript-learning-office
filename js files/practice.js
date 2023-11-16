
// const object = {
//     name: 'jobaer',
//     city: 'Dhaka',
//     age : 24,
//     property: {
//       test: "passed",
//       status: "Available",
//       Earnings: "Not good"
//         }
//     }
// function syntaxHighlight(json) {
//     json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
//     // eslint-disable-next-line no-useless-escape
//     return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
//         var cls = 'number';
//         if (/^"/.test(match)) {
//             if (/:$/.test(match)) {
//                 cls = 'key';
//             } else {
//                 cls = 'string';
//             }
//         } else if (/true|false/.test(match)) {
//             cls = 'boolean';
//         } else if (/null/.test(match)) {
//             cls = 'null';
//         }
//         return '<span class="' + cls + '">' + match + '</span>';
//     });
//     syntaxHighlight(object)
// }

const isPrime = (number) => {
    for(let i =2; i<= number; i++){
        if(number%i === 0) {
            return true;
        }
    }
    return false;

}
console.log(isPrime(5));