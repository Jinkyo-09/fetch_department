/* 
promise 객체
객페에 담겨있는 데이터ㅡ이 상태값을 가지고 있는
pending : 대기
fullfiled : 성공적으로 작업의 수행이 완료된 상태
rejected : 작업의 요청이 거절된 상태

작업시간이 오래걸리는 업무를 수행할때 promise로 반환하면 자동적으로 해당 작업 완료 이후 동기적으로 다음 작업을 선형화해서 수행 (es5)
*/

fetch('DB/department.json')
	//fetch가 반환한 프로미스를 동기적으로 호출
	.then((data) => {
		//이전 메서드에서 반환된 promise 객체가 fullfiled 상태일때 실행
		//json형태로 parsing되지 않은 raq data
		const result = data.json();
		//json 형태로 반환시 promise로 반환
		result.then((json) => {
			//json으로 반환된 데이터를 then으로 확인
			console.log(json);
		});
	})
	.catch((err) => {
		//이전 메서드에서 반환된 promise 객체가 rejected 상태일때 실행
		//오류가 발생했을때 runtime에러(실시간에러)가 발생하지 않도록 예외사항을 준비
		console.log(err);
	});
