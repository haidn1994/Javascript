var result = 0;
var i;

console.time('duration_sum');

for(i = 1; i <= 1000; i++) {
    result += i;
}

console.timeEnd('duration_sum');
console.log('1부터 1000까지 더한 결과물 : %d', result);

// 실행한 각 파일의 이름과 파일패스를 확인해야 하는 경우가 있다.
// 다음과 같이 두 줄을 더 추가한 다음 저장하고 다시 실행하면 파일의 이름과 패스를 확인할 수 있다.

console.log('현재 실행한 파일의 이름 : %s', __filename);
console.log('현재 실행한 파일의 패스 : %s', __dirname);

var Person = {name:"소녀시대", age:20};
console.dir(Person);