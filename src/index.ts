window.Webflow?.push(async () => {
  try {
    let errorDiv: HTMLElement;
    let successDiv: HTMLElement;

    console.log('Flow Phantom');

    // 1. Remove w-form to prevent Webflow from handling it
    const emailForm = document.getElementById('email-form') as HTMLFormElement;

    console.log('emailForm', emailForm);

    if (emailForm && emailForm.parentElement) {
      emailForm.parentElement.classList.remove('w-form');

      // 2. Find the error and success divs
      errorDiv = emailForm.parentElement.querySelector(
        '[data-name-form="error"]'
      ) as HTMLElement;

      console.log('errorDiv', errorDiv);

      successDiv = emailForm.parentElement.querySelector(
        '[data-name-form="success"]'
      ) as HTMLElement;

      console.log('successDiv', successDiv);

      errorDiv.style.display = 'none';
      successDiv.style.display = 'none';

      // 3. Add our own submit handler
      emailForm.onsubmit = async (event) => {
        try {
          event.preventDefault();

          // 4. Get the form data
          const formData = new FormData(emailForm);

          // 5. Get the form entries as an object
          const data = Object.fromEntries(formData.entries());
          console.log('Form data', data);

          // 6. Send the data to the server
          const response = await fetch(
            'http://localhost:3000/api/do-something',
            {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json'
              }
            }
          );

          console.log('Response status', response.status);

          if (response.status !== 200) {
            throw new Error('Response status is not 200');
          }

          // 6. Handle the response
          const responseData = await response.json();

          console.log('responseData', responseData);
          emailForm.style.display = 'none';
          successDiv.style.display = 'block';
        } catch (e) {
          // 7. Handle the error
          if (e instanceof Error) {
            errorDiv.style.display = 'block';
            throw e;
          }
        }
      };
    }
  } catch (e) {
    console.error('error', e);
    // errorDiv.style.display = 'block';
  }
});
//# sourceMappingURL=main.js.map
