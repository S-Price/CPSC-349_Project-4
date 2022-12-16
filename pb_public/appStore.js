const mainA = document.getElementById('mainAnch')

const aboutA = document.getElementById('aboutAnch')

const signupA = document.getElementById('signupAnch')

const loginA = document.getElementById('loginAnch')

mainA.addEventListener("click", storeMain)
aboutA.addEventListener("click", storeAbout)
signupA.addEventListener("click", storeSignup)
loginA.addEventListener("click", storeLogin)

function storeMain() {
    window.localStorage.savedPage = 'main'
}

function storeAbout () {
    window.localStorage.savedPage = 'about'
}

function storeSignup () {
    window.localStorage.savedPage = 'signup'
}

function storeLogin () {
    window,localStorage.savedPage = 'login'
}