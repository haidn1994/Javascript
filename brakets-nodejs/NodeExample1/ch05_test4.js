var http = require('http');

// 웹 서버 객체를 만든다.
var server = http.createServer(function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');
    
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<meta charset=utf-8>")
    res.write("<html>");
    res.write(" <head>");
    res.write("     <title>응답 페이지</title>");
    res.write(" </head>");
    res.write(" <body>");
    res.write("     <h1>node.js로부터의 응답 페이지</h1>");
    res.write(" </body>");
    res.write("</html>");
    res.end();
});

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
// createServer의 콜백함수로 처리할 수도 있다.

//server.on('request', function(req, res) {
//    console.log('클라이언트 요청이 들어왔습니다.');
//    
//    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
//    res.write("<!DOCTYPE html>");
//    res.write("<meta charset=utf-8>")
//    res.write("<html>");
//    res.write(" <head>");
//    res.write("     <title>응답 페이지</title>");
//    res.write(" </head>");
//    res.write(" <body>");
//    res.write("     <h1>node.js로부터의 응답 페이지</h1>");
//    res.write(" </body>");
//    res.write("</html>");
//    res.end();
//});

// 서버 종료 이벤트 처리
server.on('close', function() {
    console.log('서버가 종료됩니다.');
});