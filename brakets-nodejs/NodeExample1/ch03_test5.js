var Person = {};

// 중괄호를 사용하는 것도 가능하지만, dot notation을 더 권장하는 것으로 나온다.
Person['age'] = 20;
Person['name'] = '소녀시대';
Person.add = function(a, b) {
    return a + b;
};

console.log('더하기 : %d', Person.add(10, 10));