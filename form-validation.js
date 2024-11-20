const firstname = document.getElementById('first-name')
const lastname = document.getElementById('last-name')
const email = document.getElementById('email')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if(firstname.value === '' || firstname.value == null) {
    messages.push('First name is required')
  } 
  else if (firstname.value != null && firstname.value.length < 3) {
    messages.push('First name cannot be less than 3 characters')
  }

  if(lastname.value === '' || lastname.value == null) {
    messages.push('Last name is required')
  } 
  else if (lastname.value != null && lastname.value.length < 3) {
    messages.push('Last name cannot be less than 3 characters')
  }

  if(email.value === '' || email.value == null) {
    messages.push('Email is required')
  }

  if(messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
}) 