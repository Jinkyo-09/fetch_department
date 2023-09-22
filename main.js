/* 
promise 객체
객페에 담겨있는 데이터ㅡ이 상태값을 가지고 있는
pending : 대기
fullfiled : 성공적으로 작업의 수행이 완료된 상태
rejected : 작업의 요청이 거절된 상태

작업시간이 오래걸리는 업무를 수행할때 promise로 반환하면 자동적으로 해당 작업 완료 이후 동기적으로 다음 작업을 선형화해서 수행 (es6)
*/

const section = document.querySelector('section');

fetch('DB/department.json')
	.then((data) => data.json())
	.then((json) => {
		let tags = '';
		json.members.map((data) => {
			tags += `
      <article>
      <div class='pic'>
        <img src='img/${data.pic}'></img>
      </div>
      <h2>${data.position}</h2>
      <p>${data.name}</p>
      </article>
      `;
		});
		section.innerHTML = tags;
	})
	.catch((err) => {
		console.log(err);
	});
