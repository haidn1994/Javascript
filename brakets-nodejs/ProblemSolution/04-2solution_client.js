/*
    기본적으로 소스코드 파일이 2개 필요하다는 점을 잊지 말지어다!
*/


// 이 코드는 동작하지않는다. (혼자 동작한다면...)
// 이 코드는 클라이언트의 코드일 뿐이며, 서버와 같이 동작해야만 한다!
var net = require('net');

if(process.argv.length < 3) {
    console.log('잘못된 입력 입니다. 인자를 하나 더 입력하세요.');
    process.exit();
}

var client = net.connect({port:3000, host:'localhost'}, function() {
    console.log('Client connected');
    
    var temp = process.argv[2];
    client.write(temp + ' \r\n');
    // client.write(' some data \r\n');
});

client.on('data', function(data) {
    console.log(data.toString());
    client.end();
});

client.on('end', function(data) {
    console.log('Client disconnected');
});
