

// Updates the digital clock
function updateClock() { 
  let now = new Date(); 
  let hour = Format(now.getHours()); 
  let min = Format(now.getMinutes()); 
  let sec = Format(now.getSeconds()); 
  document.getElementById('clock').innerHTML = hour + ":" + min + ":" + sec; 
} 

// Format function to add leading zero
function Format(time1) { 
  return time1 < 10 ? '0' + time1 : time1; 
}

// Function to move clock hands
function movingArrow() { 
  const d = new Date(); 
  let hours = d.getHours(); 
  let mins = d.getMinutes(); 
  let secynds = d.getSeconds(); 
  let milliseconds = d.getMilliseconds();
  
  // Smooth minute hand movement
  let totalMinutes = mins + secynds / 60 + milliseconds / 60000;
  
  let hr_rotation = 30 * hours + totalMinutes / 2; // 360/12 = 30
  let mn_rotation = 6 * totalMinutes; // 360/60 = 6
  let sc_rotation = 6 * (secynds + milliseconds / 1000); // 360/60 = 6
  
  document.getElementById('hr').style.transform = `rotateZ(${hr_rotation}deg)`; 
  document.getElementById('mn').style.transform = `rotateZ(${mn_rotation}deg)`; 
  document.getElementById('sc').style.transform = `rotateZ(${sc_rotation}deg)`; 
}

// Change background image function
function changeBackgroundImage() { 
  const photos = ["url(1.jpg)", "url(2.jpg)", "url(3.jpg)", "url(4.jpg)"]; 
  const randomPhoto = photos[Math.floor(Math.random() * photos.length)]; 
  console.log(randomPhoto); 
  document.body.style.backgroundImage = randomPhoto; 
}

// Setting intervals for the functions
setInterval(updateClock, 1000); 
setInterval(movingArrow, 1000); 
setInterval(changeBackgroundImage, 5000);

// Initial call to set the correct time immediately
updateClock();
movingArrow();
changeBackgroundImage();
