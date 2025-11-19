// Mobile Nav
const menuIcon = document.getElementById('menu-icon');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');
const icon = menuIcon.querySelector('i');

const toggleMenu = () => {
  const isActive = nav.classList.toggle('active');
  overlay.classList.toggle('active', isActive);
  icon.classList.replace(isActive ? 'fa-bars' : 'fa-xmark', isActive ? 'fa-xmark' : 'fa-bars');
};

// Toggle when icon clicked
menuIcon.addEventListener('click', toggleMenu);

// Close when overlay clicked
overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  overlay.classList.remove('active');
  icon.classList.replace('fa-xmark', 'fa-bars');
});

// Mobile Nav


const days = document.getElementById('days')
const hours = document.getElementById('hours')
const mins = document.getElementById('mins')
const secs = document.getElementById('secs')

const days2 = document.getElementById('days2')
const hours2 = document.getElementById('hours2')
const mins2 = document.getElementById('mins2')
const secs2 = document.getElementById('secs2')

const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
}

const updateCountDown = (deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime; //milliseconds 

    let calSecs = Math.floor(timeDifference/1000) % 60;
    let calMins = Math.floor(timeDifference/1000/60) % 60;
    let calHours = Math.floor(timeDifference/1000/60/60) % 24;
    let calDays = Math.floor(timeDifference/1000/60/60/24);

    days.textContent = formatTime(calDays);
    hours.textContent = formatTime(calHours);
    mins.textContent = formatTime(calMins);
    secs.textContent = formatTime(calSecs);

}

const updateCountDown2 = (deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime; //milliseconds 

    let calSecs = Math.floor(timeDifference/1000) % 60;
    let calMins = Math.floor(timeDifference/1000/60) % 60;
    let calHours = Math.floor(timeDifference/1000/60/60) % 24;
    let calDays = Math.floor(timeDifference/1000/60/60/24);

    days2.textContent = formatTime(calDays);
    hours2.textContent = formatTime(calHours);
    mins2.textContent = formatTime(calMins);
    secs2.textContent = formatTime(calSecs);

}

const countDown = (targetDate) => {
    setInterval(() => updateCountDown(targetDate), 1);
}

const countDown2 = (targetDate2) => {
    setInterval(() => updateCountDown2(targetDate2), 1);
}

const targetDate = new Date("November 23 2025 18:00");
countDown(targetDate)

const targetDate2 = new Date("November 31 2025 18:00");
countDown2(targetDate2)