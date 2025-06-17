function toggleTheme() {
  document.body.classList.toggle('light');
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.onscroll = () => {
  const btn = document.getElementById('goTopBtn');
  if (window.scrollY > 200) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}
function redirectToGmail() {
  const name = document.getElementById('userName').value;
  const message = document.getElementById('userMessage').value;
  const subject = encodeURIComponent("Call Request from " + name);
  const body = encodeURIComponent(message);
  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=karnishhvjs10b@gmail.com&su=${subject}&body=${body}`;
  window.open(url, '_blank');
  return false;
}
