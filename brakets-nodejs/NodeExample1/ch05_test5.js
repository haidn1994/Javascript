var http = require('http');
var fs = require('fs');

// 웹 서버 객체를 만든다.
var server = http.createServer();

// 웹 서버를 시작하여 3000번 포트에서 대기하도록 설정한다.
// 포트나 fd나 모두 정수 객체라는 점을 잊지 마라
// 단 port는 65535까지 쓸 수 있고, fd는 대충 1024까지 쓸 수 있다고 생각하면 된다.
var port = 3000;
server.listen(port, function() {
    console.log('웹 서버가 시작되었습니다. : %d', port);
});

// 클라이언트 연결 이벤트 처리
// 아무래도 유닉스에서 많이 영향을 받은 것 같다. node의 API는 유닉스의 그것과 많이 흡사하다.
// 그리고 node는 인터프리터로 돌아가기 때문에 lint를 잘 쓰는게 너무나 중요하다.
server.on('connection', function(socket) {
    var addr = socket.address();
    console.log('클라이언트가 접속했습니다. : %s %d', addr.address, addr.port);
});

// 클라이언트 요청 이벤트 처리
// 콜백 함수의 인자를 꼭 제대로 확인하자!
server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');
    
    var filename = 'house.png';
    fs.readFile(filename, function(err, data) {
        res.writeHead(200, {"Content-Type": "img/png"});
        res.write(data);
        res.end();  
    });
});

// 서버 종료 이벤트 처리
server.on('close', function() {
    console.log('서버가 종료됩니다.');
});