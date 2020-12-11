const validUserNames = (a, b) => {
    if (b.length < 10) a.push(b);
    return a;
};

let ar = ['mark', 'asfggasfsasdfasg', 'asffa', 'hinsasnfj3nksanfsf'];
console.log(ar.reduce(validUserNames, []));
