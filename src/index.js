// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    } else {
        const arr = [];
        matrix.forEach((value, i) => {
            if (i % 2 !== 0) {
                arr.push(value.reverse());
            } else {
                arr.push(value);
            }
        });
        return arr.flat();
    }
};




