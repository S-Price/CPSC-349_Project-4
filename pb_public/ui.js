const mainbtn = document.getElementById('mainPage')
const mainpage = document.getElementById('landing')

const aboutbtn = document.getElementById('aboutbtn')
const aboutpage = document.getElementById('about')

const signupbtn = document.getElementById('signupbtn')
const signuppage = document.getElementById('signup')

const loginbtn = document.getElementById('loginbtn')
const loginpage = document.getElementById('login')

function init() {
    console.log("init")
    if (window.localStorage.getItem('savedPage')) {
        console.log("savedpage")
        const lstPage = window.localStorage.getItem('savedPage')
        if (lstPage === 'main') {
            showMain()
        } else if (lstPage === 'about') {
            showAbout()
        } else if (lstPage === 'login') {
            showLogin()
        }else if (lstPage === 'signup') {
            showSignup()
        }
    }
    window.localStorage.savedPage = null
}

document.addEventListener("DOMContentLoaded", init())

/* // No button
const forgotbtn = document.getElementById('forgotbtn')
*/

mainbtn.addEventListener("click", showMain)
aboutbtn.addEventListener("click", showAbout)
signupbtn.addEventListener("click", showSignup)
loginbtn.addEventListener("click", showLogin)

function hideAll() {
    mainpage.hidden = true
    aboutpage.hidden = true
    signuppage.hidden = true
    loginpage.hidden = true
}

function showMain() {
    hideAll()
    window.localStorage.savedPage = 'main'
    mainpage.hidden = false
}

function showAbout() {
    hideAll()
    window.localStorage.savedPage = 'about'
    aboutpage.hidden = false
}

function showLogin() {
    hideAll()
    window.localStorage.savedPage = 'login'
    loginpage.hidden = false
}

function showSignup() {
    hideAll()
    window.localStorage.savedPage = 'signup'
    signuppage.hidden = false
}