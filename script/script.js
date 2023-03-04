const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarSupportedContent');

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() });
})

const yearsActiveEl = document.getElementById('years-active');

const startDate = new Date('2004-10-01');
var diff = (new Date().getTime() - startDate.getTime()) / 1000;
diff /= (60 * 60 * 24);

const yearsActiveCalc = Math.abs(Math.round(diff/365.25));
yearsActiveEl.innerHTML = `<b>Years Active:</b> ${yearsActiveCalc}`