const fibonacci = function(input) {
    switch (Number(input)) {
        case 0:
            return 0;
            break;
        case 1:
            return 1;
            break;
    };

    if (Number(input) < 0) return "OOPS";

    let arr = [1, 1];
    for(let i=2; i < Number(input); i++) {
        arr[i] = arr[i-2] + arr[i-1];
    };
    return arr[arr.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
