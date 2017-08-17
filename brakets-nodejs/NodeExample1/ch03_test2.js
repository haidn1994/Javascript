var Person = {};

// 이 코드의 의의는 이런 문법도 있다는 것이다.
// 적재적소에 활용하자.
Person['age'] = 20;
Person['name'] = '소녀시대';
Person.mobile = '010-1000-1000';


console.log('나이 : %d', Person.age);
console.log('이름 : %s', Person.name);
console.log('전화 : %s', Person['mobile']);
