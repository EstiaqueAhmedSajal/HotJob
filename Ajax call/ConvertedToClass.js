class AjaxRequest {
    constructor() {
      this.cartIdInput = document.querySelector('input[type="hidden"][name="cart_id"]');
      this.jobIdInput = document.querySelector('input[type="hidden"][name="JOB_ID"]');
    }
  
    makeRequest(url) {
      if (this.cartIdInput && this.jobIdInput) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('AJAX call successful');
          }
        };
        xhr.send();
      } else {
        console.log('No AJAX call needed');
      }
    }
  }
  const ajaxRequest = new AjaxRequest();
  ajaxRequest.makeRequest('https://jsonplaceholder.typicode.com/todos/1');
  