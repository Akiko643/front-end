let ar = [2, 4, 6, 8];
let ar1 = [1, 3, 4, 5];

console.log(
    // 'ar' +
    ar.every((num) => {
        if (num & 1) return 0;
        return 1;
    })
        ? 'all elements are even'
        : 'all elements are not even'
);

console.log(
    // 'ar1 :' +
    ar1.every((num) => {
        if (num & 1) return 0;
        return 1;
    })
        ? 'all elements are even'
        : 'all elements are not even'
);
