// 문제에서 원하는 것은 http모듈을 통해서 만든 서버로 하라는 것이 아니다!

//var http = require('http');
//var fs = require('fs');

//if(process.argv.length < 3) {
//    console.log('잘못된 입력 입니다. 인자를 하나 더 입력하세요.');
//    process.exit();
//}

//var server = http.createServer(function(req, res) {
//    var instream = fs.createReadStream('./temp.txt');
//    instream.pipe(res);
//});
//
//server.listen(7001, '127.0.0.1');

/*
    기본적인 로직은 이렇다.
    1. 프로그램을 실행할 때 3번째 인자로 문자열을 하나 받는다.(표준 입력)
    2. 문자열 객체를 http서버에 readStream으로 그대로 넘긴다.
    3. 서버는 readStream으로 받은 객체를 그대로 다시 pipe로 연결해서 클라이언트에 넘긴다.
    4. 클라이언트는 서버에게 받은 객체를 그대로 다시 받아 표준 출력으로 출력한다.
*/


var net = require('net');
var client = net.connect({port:3000, host:'localhost'}, function() {
    console.log('Client connected');
    client.write('some data \r\n');
});

client.on('data', function(data) {
    console.log(data.toString());
    client.end();
});

client.on('end', function(data) {
    console.log('Client disconnected');
});
