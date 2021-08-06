$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup, .closed').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});

$('.closed').click(function(e) {
  e.preventDefault();
  $('.open').fadeIn(1800);
  $('html').addClass('no-scroll');
});

$('.tips').click(function() {
  $('.open').fadeOut(800);
  $('html').removeClass('no-scroll');
});

var currentTab = 0;
showTab(currentTab); 

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
   var el = document.getElementById("nextBtn");
   el.remove();
  } else {
    document.getElementById("nextBtn").innerHTML = "Вперед";
  }
  if (n == (x.length - 1)) {
    document.getElementById("comBtn").style.display = "inline";
    
  } else {
    document.getElementById("comBtn").style.display = "none";
  }
  fixStepIndicator(n)
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) {
      return false;
}
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;

  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
 
  showTab(currentTab);
}

function validateForm() {

  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");

  for (i = 0; i < y.length; i++) {

    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }

  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}

// !!! fetch !!!
// let form = document.getElementById('regForm');
// // let fawe = document.querySelectorAll('reqForm')
// // console.log(fawe);
//     form.addEventListener('submit', function(event) {
//         let one = this.querySelector('[name="firstName"]').value;
//         let two = this.querySelector('[name="surname"]').value;
//         let three = this.querySelector('[name="email"]').value;
//         let four = this.querySelector('[name="phone"]').value;
//         let five = this.querySelector('[name="day"]').value;
//         let six = this.querySelector('[name="mounth"]').value;
//         let seven = this.querySelector('[name="Username"]').value;
//         let eight = this.querySelector('[name="Password"]').value;

//         let searchParams = new URLSearchParams();
//         searchParams.set('firstName', one);
//         searchParams.set('surname', two);
//         searchParams.set('email', three);
//         searchParams.set('phone', four);
//         searchParams.set('day', five);
//         searchParams.set('mounth', six);
//         searchParams.set('Username', seven);
//         searchParams.set('Password', eight);
        
//     // function info () {
//     //   let one = document.getElementById ("q").value;
//     //   let two = document.getElementById ("w").value;
//     //   let three = document.getElementById ("e").value;
//     //   let thour = document.getElementById ("r").value;
//     // }
//         let promise = fetch('https://jsonplaceholder.typicode.com/users', {
//             method: 'POST',
//             body: searchParams,
//         });
        
//         promise.then(
//             response => {
//                 return response.text();
//             }
//         ).then(
//             text => {
//               alert('заявка принята');
//                 console.log(text);
//             }
//         );
        
//         event.preventDefault();
//     });

// !!!ajax+ jQuare!!!
$( document ).ready(function() {
  $("#comBtn").click(
  function(){
    sendAjaxForm('result_form', 'regForm', 'handler.php');
    return false; 
  }
);
});

function sendAjaxForm(result_form, regForm, url) {
  $.ajax({
      url:     'https://jsonplaceholder.typicode.com/users',
      type:     "POST", 
      dataType: "html", 
      data: 
      // {
        // csrf_key: 'XXXXX',
        // controller: 'my_proposal',
        // action: 'save',
        // values: {input_name_1: $value},
    
    $("#"+regForm).serialize(), 
        success: function(response) { 
        result = $.parseJSON(response);
        $('#result_form').html('Спасибо '+ result.firstName + ', запрос отправлен');  
    },
    
      error: function(response) { 
          $('#result_form').html('Ошибка. Данные не отправлены.');
    },
 });
}

// !!! Axios !!!


// var bodyFormData = new FormData();
// bodyFormData.set ('firstName', 'firstName'.value)

// axios({
//   method: 'post',
//   url: 'https://jsonplaceholder.typicode.com/users',
//   data: bodyFormData,
//   config: { headers: {'Content-Type': 'multipart/form-data' }}
//   })
//   .then(function (response) {
//       //handle success
//       console.log(response);
//   })
//   .catch(function (response) {
//       //handle error
//       console.log(response);
//   });

// !!@!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// function people () {
//         let one = document.querySelectorid('firstName').value;
//         let two = document.querySelectorid('surname').value;
//         let three = document.querySelectorid('email').value;
//         let four = document.querySelectorid('phone').value;
//         let five = document.querySelectorid('day').value;
//         let six = document.querySelectorid('mounth').value;
//         let seven = document.querySelectorid('Username').value;
//         let eight = document.querySelectorid('Password').value;
// }
      
// const url = 'https://proposal-dev.web-ae.ru/ajax/'

// let data = {
//   csrf_key: 'hicfhM4T_3ca2O8TNnwDMq7pZFo-T3oG',
//   controller: 'my_proposal',
//   action: 'save',
//   values: {}
// };

// data.value = people;
// try {
//   const response = fetch(url, {
//     method: 'POST', 
//     body: JSON.stringify(data), 
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//     }
//   });
//   const json =  response.json();
//   console.log('Успех:', JSON.stringify(json));
// } catch (error) {
//   console.log();('Ошибка:', error);
// }

