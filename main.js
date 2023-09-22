/* 
promise 객체
객페에 담겨있는 데이터ㅡ이 상태값을 가지고 있는
pending : 대기
fullfiled : 성공적으로 작업의 수행이 완료된 상태
rejected : 작업의 요청이 거절된 상태

작업시간이 오래걸리는 업무를 수행할때 promise로 반환하면 자동적으로 해당 작업 완료 이후 동기적으로 다음 작업을 선형화해서 수행 (es6)
*/

fetch('DB/department.json')
	.then((data) => {
		//첫번째 then구문에서 받아진 promise를 다시 바로 리턴
		//두번째 구문에서 해당 데이터를 동기적으로 활용 가능
		return data.json();
	})
	.then((json) => {
		console.log(json);
	})
	.catch((err) => {
		console.log(err);
	});
