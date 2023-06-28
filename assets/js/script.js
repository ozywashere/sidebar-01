const sidebar = document.querySelector('.sidebar')
sidebar.addEventListener('mouseenter', () => {
  sidebar.classList.remove('close')
})
sidebar.addEventListener('mouseleave', () => {
  sidebar.classList.add('close')
})
