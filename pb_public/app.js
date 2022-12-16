const USERNAME = "spencerprice@csu.fullerton.edu";
const PASSWORD = "Project_04";
const pb = new PocketBase("http://127.0.0.1:8090");
const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD);
console.log(authData);
if (document.querySelector("#signupForm")) {
  document.querySelector("#signupForm").addEventListener("submit", async function() {
    event.preventDefault();
    let data = {
      "username": document.getElementById("userIn").value,
      "email": document.getElementById("emailIn").value,
      "password": document.getElementById("passwordIn").value,
      "passwordConfirm": document.getElementById("passwordIn").value
    };
    try {
      const record = await pb.collection("users").create(data);
    } catch (error) {
      alert("Username and/or e-mail exist already.");
      return;
    }
    alert("Account created.");
  });
}
function checkRoot() {
  if (document.getElementById("root")) {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(App, null))
    );
  }
}
checkRoot();
function App() {
  return /* @__PURE__ */ React.createElement("div", { className: "App" }, /* @__PURE__ */ React.createElement("h1", null, "Good luck, Guys. Im counting on you."), /* @__PURE__ */ React.createElement("h1", null, "Test Test"));
}
