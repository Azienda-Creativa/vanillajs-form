const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

const showError = (input, message) => {
  const formControl = input.parentElement
  formControl.className = "form-control error"
  const small = formControl.querySelector("small")
  small.innerText = message
}

const showSuccess = (input) => {
  const formControl = input.parentElement
  formControl.className = "form-control success"
}

const isValidEmail = (input) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, "Email is not correct")
  }
}

const checkRequired = (array) => {
  array.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)}  is required`)
    } else {
      showSuccess(input)
    }
  })
}

// get field name by id
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} carachters`)
  } else if (inpput.value.length > max) {
    showError(input, `${getFieldName(input)} must be at less than ${max} carachters`)
  } else {
    showSuccess(success)
  }
}

const checkPsw = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "Password do not match")
  } else {
    showSuccess(input)
  }
}

//Events
form.addEventListener("submit", (e) => {
  e.preventDefault()

  checkRequired([username, email, password, password2])
  checkLength(username, 3, 15)
  isValidEmail(email)
  checkLength(password, 6, 25)
  checkPsw(password, password2)
})
