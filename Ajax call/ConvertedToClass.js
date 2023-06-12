class AjaxRequest {
    constructor() {
      this.jobIdInput = document.querySelector('input[type="hidden"][name="JOB_ID"]');
      this.validJob = document.querySelector('input[type="hidden"][name="validJob"]');
    }
  
    async makeRequest() {
      if (this.validJob && this.jobIdInput) {
        const url = `https://hotjobs.bdjobs.com/Hotjobs-Jobdetails.asp?jid=${this.jobIdInput.value}&jsc=${this.validJob.value}`;
        alert(url)
  
        try {
          const response = await fetch(url);
          

          if (response.ok) {
            
            const data = await response.text();
            console.log('API call successful');
            console.log(data);
          } else {
            throw new Error('API call failed');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      } else {
        console.log('No API call needed');
      }
    }
  }
  
  const ajaxRequest = new AjaxRequest();
  ajaxRequest.makeRequest();
  