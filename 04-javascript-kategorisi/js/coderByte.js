function transform(text) {
    var s = text.split('');
    for (var i = 0; i < s.length; i++) {
        // Caesar cipher
        switch(s[i]) {
          case ' ':
            break;
          case 'z':
            s[i] = 'a';
            break;
          case 'Z':     // One case you forgot to handle
            s[i] = 'A';
            break;
          default:
            s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
        }

        // Upper-case vowels
        switch(s[i]) {
          case 'a': case 'e': case 'i': case 'o': case 'u':
            s[i] = s[i].toUpperCase();
        }
    }
    return s.join('');
}

console.log(transform("helloaa"))