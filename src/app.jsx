const USERNAME = 'spencerprice@csu.fullerton.edu'
const PASSWORD = 'Project_04'

const pb = new PocketBase('http://127.0.0.1:8090')

let authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)
console.log(authData)

/* Eventlistener and function to create a new user */
if (document.querySelector('#signupForm')) {
  document.querySelector('#signupForm').addEventListener('submit', async function() {
    event.preventDefault()
    let data = {
      'username': document.getElementById('userIn').value,
      'email': document.getElementById('emailIn').value,
      'password': document.getElementById('passwordIn').value,
      'passwordConfirm': document.getElementById('passwordIn').value
    }
    try {
      const record = await pb.collection('users').create(data)
    } catch (error) {
      alert("Username and/or e-mail exist already.")
      return
    }
    alert("Account created.")
    authenticate(data.username, data.password, false)
  })
}

/* Eventlistener for login form */
if (document.querySelector('#loginForm')) {
  document.querySelector('#loginForm').addEventListener('submit', async function () {
    event.preventDefault()
    authenticate(document.getElementById('userLogin').value, document.getElementById('passwordLogin').value, true)
  })
}

/* Authenticates user for Login */
async function authenticate(ident, pass, login) {
  if (ident && pass) {
    pb.authStore.clear()
    try {
      authData = await pb.collection('users').authWithPassword(ident, pass)
    } catch {
      if (login) {
        alert("Failed to log in.")
      }
      return
    }
    if (login) {
      alert("Successfully logged in.")
    }
  }
}

/* Ensures root is present before attempting to load react app */
function checkRoot() {
  if (document.getElementById('root')) {
    const root = ReactDOM.createRoot(document.getElementById('root'))

    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  }
}

checkRoot()

function App () {
  return (
    <div className='App'>
      <h1>Good luck, Guys. Im counting on you.</h1>
      <h1>Test Test</h1>
    </div>
  )
}

