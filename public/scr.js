function mOve(uRl) {
    function isMobile() {
      var userAgent = navigator.userAgent;
      var mobile = /(iPhone|iPad|Android|BlackBerry|Windows Phone)/i.test(userAgent);
      return mobile;
    }

    if (isMobile()) {
        window.location.href=`https://docs.google.com/viewerng/viewer?url=${uRl}`;
    } else {
       	window.location.href=`${uRl}`;
    }
}

const dDay = new Date("2024-01-14T00:00:00").setHours(0, 0, 0, 0); 

function updateCountdown() {
  const now = new Date().setHours(0, 0, 0, 0); 
  const daysLeft = Math.floor((dDay - now) / (1000 * 60 * 60 * 24));
  const countdownElement = document.getElementById("d-day-countdown");
  const container = document.getElementById("d-day-container");

  if (daysLeft < 0) {
    if (container) container.remove();  
  } else {
    if (countdownElement) countdownElement.innerText = `D-${daysLeft}`;
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();
