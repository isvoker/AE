"use strict";

const requestURL = 'test.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const all= request.response;
	let step = document.createElement('div')
	step.setAttribute('class', 'menu' );
	step.setAttribute('id', 'menu' );
	let b = 1;

	for(let i in all) {
		const obj = all[i];
		const div = document.createElement('div');
		let qwe = step.appendChild( document.createElement('span') );
		let steps = qwe.appendChild( document.createElement('a' ) );
		steps.setAttribute('href', '#form' + b);
		steps.setAttribute('id', 'steps_' + b);
		steps.innerHTML = "этап "+ b;
		div.setAttribute('class', '' + i);
		div.setAttribute('id', '' + i);
		b += 1;
		let form = "<form method='POST' id ="+'form' + b +">";

		for(let k in obj) {	
			// console.log(obj[k]);
			let label = "<label>"+ obj[k]["name"] + "</label>";
			let input = "<input";
			let attributes  = " ";

			if (obj[k].id == "subm") {
				obj[k].id += i;
			}

			if (obj[k].type == "textarea"){
				input = "<textarea"
			}	
			for (let key in obj[k]) {
				attributes  +=  key + '="' + obj[k][key] + '"' ;
			}	
			form += label + input + attributes +  "> </textarea>"  ;

		}
		
		document.body.append(step) ;
		step.innerHTML; 
		document.body.append(div);
		div.innerHTML = form + "</form>" ; 


			steps.classList.add('unactive');
			div.classList.add('hide');
			steps.onclick = function(e) {
					e.preventDefault();
					console.log(div);

					this.classList.add('active');

					console.log(steps.classList == 'active' || 'active unactive'== false);

					if (steps.classList == 'active' || 'active unactive') { 
					    this.classList.remove('active');
						this.classList.add('active');
						div.classList.add('show');
					}
			};		

	};
// __________________________________
	let int = 1;

	const file_attach = document.getElementById('file'); 
	const forms = document.querySelectorAll('div > form');
	console.log(forms);
	const message = {
		loading: 'Отправка...',
		success: 'Форма отправлена',
		failed: 'Что-то пошло не так...'
	};

	file_attach.addEventListener('change', () => {
		uploadFile(file_attach.files);
	});

	const uploadFile = (file) => {
		console.log(file.name);
	};
	const postData = async (url, fData) => {  
		document.querySelector('.status').innerHTML = message.loading;  

		const fetchResponse = await fetch(url, {
			method: 'POST',
			body: fData
		});

		return await fetchResponse.text();
	};
	if (forms) {
		forms.forEach(el => {
			el.addEventListener('submit', function (e) {
				e.preventDefault();
				int = ++int;
				// document.getElementById('subma1');
				// document.getElementById('submb1');
				let statusMessage = document.createElement('div');
				statusMessage.classList.add('status');

				this.classList.remove('active');
				this.classList.add('с1');
				el.appendChild(statusMessage);
				const fData = new FormData(el);
				fData.append('file_attach', file_attach.files[0]); 
				console.log(file_attach.files);

				postData('/upload.php', fData)
				.then(fetchResponse => {
					statusMessage.innerHTML = message.success;

				})
				.catch(() => statusMessage.innerHTML = message.failed)
				console.log(int);

				// switch (int) {
				// 	case 2 :
				// 		$("#a1").css("display", "none");
				// 		$("#b1").css("display", "block");
				// 		$("#steps_1").removeClass('active');
				// 		$("#steps_1").addClass('unactive');
				// 		$("#steps_2").addClass('active');

				// 		$('#steps_1').click(function(){
				// 			$("#a1").css("display", "block");
				// 			$("#b1").css("display", "none");
				// 		});
				// 		break;
				// 	case 3 :
				// 		$("#b1").css("display", "none");
				// 		$("#с1").css("display", "block");
				// 		$("#steps_2").removeClass('active');
				// 		$("#steps_3").addClass('active');
				// 		$("#steps_2").addClass('unactive')	
				// 		break;
				// }		
			});
		});
		
		
	};

};