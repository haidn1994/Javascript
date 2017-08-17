var fs = require('fs');

function Profile(name, age, phoneNumber) {
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
}

fs.open('./04-1target.txt', 'r', function(err, fd) {
    if(err) throw err;
    
    // 생성자 쓰지 말고 buffer.alloc(size)를 사용할 것!
    // 그리고 이 코드는 임시방편에 불과하다. 만약 파일의 크기가 버퍼의 크기를 넘어선다면?
    // 루프를 돌면서 처리를 해줘야 하는데, 엄밀히 말해 이 코드도 작성해야 한다.
    var buf = Buffer.alloc(128);
    
    fs.read(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer) {
        if(err) throw err;
        
        var profiles = [];
        var inStr = buffer.toString('utf8', 0, bytesRead);
        var datas = inStr.split(/\s+/);
        
        // 이거 코드가 많이 이상하다.
        for(var i = 0; i < datas.length; i += 3) {
            // new를 직접 넣어도 잘 돌아간다.
            profiles.push(new Profile(datas[i], datas[i+1], datas[i+2]));
            console.log('파일에서 얻은 이름 : %s', profiles[i/3].name);
        }
        
        fs.close(fd, function() {
            console.log('모든 절차가 끝났습니다.') 
        });
    });
});