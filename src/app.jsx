const USERNAME = 'spencerprice@csu.fullerton.edu'
const PASSWORD = 'Project_04'

const pb = new PocketBase('http://127.0.0.1:8090')

const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)
console.log(authData)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function App () {
  return (
    <div className='App'>
      <h1>Good luck, Guys. Im counting on you.</h1>
      <h1>Test Test</h1>
    </div>
  )
}

