const myUpperCase = (inp) => {
    let ans = '';
    inp.split(' ').map((word) => {
        let temp = word.charAt(0).toUpperCase() + word.slice(1);
        ans += temp + ' ';
        return temp;
    });
    return ans;
};

console.log(myUpperCase('hello my world'));
