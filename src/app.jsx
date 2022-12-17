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
    <div className="container mx-auto">
      <h1 className="py-4 text-4xl font-bold text-gray-700 text-center">
        Welcome back!
      </h1>
      <hr className="max-w-2xl mx-auto mb-4 bg-gray-800" />
      <div object="">
        <div className="flex justify-center">
          <button className="flex items-center justify-center rounded border border-yellow-700 bg-yellow-200 font-bold px-12 py-3 text-yellow-700 hover:bg-yellow-700 hover:text-yellow-200 hover:border-yellow-200  focus:ring ">
            New category
          </button>
        </div>
        <article className="flex flex-col">
          <div>
            <div className="my-4 border-4 border-blue-300 rounded p-4 hover:border-blue-700">
              <h3 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Category name:
              </h3>
              <p className="text-sm text-gray-500 pb-1" contentEditable>
                Category description here!
              </p>
              <div array="" key="movies" sortable="">
                <div>
                  <h4 className="font-medium" contentEditable>Movie title</h4>
                  <p className="text-sm text-gray-500 pb-1" contentEditable>
                    Did you like the movie?
                  </p>
                </div>
              </div>
              <button
                className="rounded border font-medium border-blue-900 bg-blue-900 px-4 py-2 text-white hover:bg-transparent hover:text-blue-900 hover:border-blue-900"
                new:movie=""
              >
                Add movie
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

