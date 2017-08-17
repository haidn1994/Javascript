function named_add(a, b) {
    return a + b;
}

var result = named_add(10, 10);

console.log('기명 함수 더하기 (10, 10) : %d', result);

var add = function(a, b) {
    return a + b;
};

var result = add(10, 10);

console.log('익명 함수 더하기 (10, 10) : %d', result);
