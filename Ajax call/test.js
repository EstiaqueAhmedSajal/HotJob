
var cartIdInput = document.querySelector('input[type="hidden"][name="cart_id"]');
var jobIdInput = document.querySelector('input[type="hidden"][name="JOB_ID"]');


if (cartIdInput && jobIdInput) {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {

      console.log('AJAX call successful');

    }
  };
  xhr.send(); 
} else {

  console.log('No AJAX call needed');
}
