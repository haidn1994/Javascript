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
// 이 방식은 버퍼에 넣고 일정크기만큼 읽어 응답을 보내는 방식이기 때문이다.
server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');
    
    var filename = 'house.png';
    var infile = fs.createReadStream(filename, {flags: "r"});
    var filelength = 0;
    var curlength = 0;
    
    fs.stat(filename, function(err, stats) {
        filelength = stats.size;
    });
    
    // 헤더 쓰기
    res.writeHead(200, {"Content-Type": "image/png"});
    
    // 파일 내용을 스트림에서 읽어 본문 쓰기
    infile.on('readable', function() {
        var chunk;
        
        while(null !== (chunk = infile.read())) {
            console.log('읽어 들인 데이터 크기 : %d 바이트', chunk.length);
            curlength += chunk.length;
            res.write(chunk, 'utf8', function(err) {
                console.log('파일 부분 쓰기 완료 : %d, 파일 크기 %d', curlength, filelength);
                if(curlength >= filelength) {
                    // 응답 전송하기
                }
            });
        }
    });
    
    // 파이프로 연결하여 알아서 처리하도록 설정하기
    // infile.pipe(res);
});

// 서버 종료 이벤트 처리
server.on('close', function() {
    console.log('서버가 종료됩니다.');
});



























