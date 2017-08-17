function add(a, b, callback) {
    var result = a + b;
    callback(result);
    
    var count = 0;
    var history = function() {
        count++;
        return count + ':' + a + ' + ' + b + ' = ' + result;
    };
    return history;
}

var add_history = add(10, 10, function(result) {
    console.log('파라미터로 전달된 콜백 함수 호출됨');
    console.log('더하기 (10, 10)의 결과 : %d', result);
});

// 기존의 지식에 비추어보면, 함수의 데이터에는 한 번만 접근할 수 있지만 
// 함수 안에서 새로운 함수를 만들어 반환하는 경우에는 예외적으로 변수 접근을 허용한다.
// 이것을 클로저(closure)라고 부른다.
console.log('결과 값으로 받은 함수 실행 결과 : ' + add_history());
console.log('결과 값으로 받은 함수 실행 결과 : ' + add_history());
console.log('결과 값으로 받은 함수 실행 결과 : ' + add_history());