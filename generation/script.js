"use strict";

const requestURL = 'test.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const all = request.response;
    console.log(all);
	const form__one = document.getElementById('form__one');   
	// const form__two = document.getElementById('form__two');  
	let string = ''; 
	for(let i in all) {
		const obj = all[i];
	
		let label = "<label>"+ obj.name + "</label>";
		let input = "<input";
		let attributes  = " ";

// delete all["01"];
		
		if (obj.type == "textarea"){
			input = "<textarea></textarea>"
		}
		// console.log(all["01"]);
		// console.log(all);
		for (let key in obj) {

			attributes  +=  key + '="' + obj[key] + '"' ;
		}

		string += label + input + attributes +  ">" ;

		form__one.innerHTML = string; 
		// obj.remove("name");
	
if (obj.type == "textarea"){
			input = "<textarea></textarea>"
		}
	}

	document.getElementById('subm').addEventListener = function() {
		window.location.href = 'test.html';
	  };

	
	$(function () {
    let location = window.location.href;
    let cur_url = '/' + location.split('/').pop();

    $('.menu li').each(function () {
        let link = $(this).find('a').attr('href');
 
        if (cur_url == link) {
            $(this).addClass('current');
        }
    });
});



};











// const a = 1;

// 	switch (a) {
// 		case 1:
// 			// addElement ();
// 		  break;
// 		case 2:
		  
// 		  break;
// 		case 3:
		  
// 		  break;
// 		  case 4:
		 
// 		  break;
// 		default:
// 		  alert( "Форма отсутствует!" );
// 	  }





// 	  function addElement() {
// 		let newMess = document.createElement("textarea");
// 		let doc = document.getElementById('form__one');
// 		doc.appendChild(newMess);
// 	  }
	  



// let form = document.getElementById('form__one');
// let string = key + '="' + obj[key] + '"';
// form.innerHTML = string;
// console.log (string);


// const obj = {
// 	'ключ 1': 'значение 1',
// 	'ключ 2': 'значение 2',
// 	'ключ 3': 'значение 3'
//   }
// console.log(obj["ключ 1"]);
//   for(let key in obj) {
//   console.log();
//   };

// // async function f() { 
// // 	const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
// // 	  let response = await fetch(requestURL);
  
// // 	  if (response.ok) { 
// // 	  let all = await response.json();
// // 	  console.log(all);
// // 	  } else {
// // 	  alert("Ошибка HTTP: " + response.status); 
// // 	  }
// //   }
// //   f(); 
// //   JSON.parse('null');
// //   }
// // function populateHeader(jsonObj) {
// // 	var myH1 = document.createElement('h1');
// // 	myH1.textContent = jsonObj['stages'];
// // 	header.appendChild(myH1);
  
// // 	var myPara = document.createElement('p');
// // 	myPara.textContent = 'Hometown: ' + jsonObj['1a02'] + ' // Formed: ' + jsonObj['rows'];
// // 	header.appendChild(myPara);
// //   }
  
// // let div = document.createElement('div');
// //   div.innerHTML = "111111111";
// //   document.body.append(div);



// async function f() { 
// 	const requestURL = 'test.json';
// 	  let response = await fetch(requestURL);
  
// 	  if (response.ok) { 
// 	  let all = await response.json();
// 	  console.log(all);
	  
// 	  let div = document.createElement('input');
// 	  div.innerHTML = all["01"];
// 	  document.body.append(div);
  
// 	  } else {
// 	  alert("Ошибка HTTP: " + response.status); 
// 	  }
	  
//   }
//   f(); 

 








