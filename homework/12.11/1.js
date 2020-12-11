let ar = ['   asfasf  ', ' asf ', 'asdf  ', ' af   '];

ar = ar.map((str) => {
    return str.replace(/\s/g, '');
});

console.log(ar);
