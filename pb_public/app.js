const USERNAME = "spencerprice@csu.fullerton.edu";
const PASSWORD = "Project_04";
const pb = new PocketBase("http://127.0.0.1:8090");
let authData = null;
console.log(authData);
try {
  console.log(pb.authStore.model.id);
} catch {
  console.log("No user loaded");
}
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
    authData = await authenticate(data.username, data.password, false);
    console.log(authData);
    console.log(pb.authStore.model.id);
    loadDefault(pb.authStore.model.id);
  });
}
if (document.querySelector("#loginForm")) {
  document.querySelector("#loginForm").addEventListener("submit", async function() {
    event.preventDefault();
    authData = await authenticate(document.getElementById("userLogin").value, document.getElementById("passwordLogin").value, true);
    console.log(authData);
    console.log(pb.authStore.model.id);
  });
}
if (document.querySelector("#toLogout")) {
  document.querySelector("#toLogout").addEventListener("click", function() {
    pb.authStore.clear();
    if (!document.getElementById("root")) {
      location.reload();
    }
    window.localStorage.savedPage = "login";
    return true;
  });
}
async function loadDefault(id) {
  const baseData = {
    "catName": "Category Name",
    "catDesc": "Category Description",
    "title": "Movie Title",
    "opinion": "What was your opinion of the movie?"
  };
  const loadData = {
    "movie1": JSON.stringify(baseData),
    "user": id
  };
  const defDat = await pb.collection("user_movie_reviews").create(loadData);
}
async function authenticate(ident, pass, login) {
  let authTmp = null;
  if (ident && pass) {
    pb.authStore.clear();
    try {
      authTmp = await pb.collection("users").authWithPassword(ident, pass);
    } catch {
      if (login) {
        alert("Failed to log in.");
      }
      return null;
    }
    if (login) {
      alert("Successfully logged in.");
    }
  }
  return authTmp;
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
  return /* @__PURE__ */ React.createElement("div", { className: "container mx-auto" }, /* @__PURE__ */ React.createElement("h1", { className: "py-4 text-4xl font-bold text-gray-700 text-center" }, "Welcome back!"), /* @__PURE__ */ React.createElement("hr", { className: "max-w-2xl mx-auto mb-4 bg-gray-800" }), /* @__PURE__ */ React.createElement("div", { object: "" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement("button", { className: "flex items-center justify-center rounded border border-yellow-700 bg-yellow-200 font-bold px-12 py-3 text-yellow-700 hover:bg-yellow-700 hover:text-yellow-200 hover:border-yellow-200  focus:ring " }, "New category")), /* @__PURE__ */ React.createElement("article", { className: "flex flex-col" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "my-4 border-4 border-blue-300 rounded p-4 hover:border-blue-700" }, /* @__PURE__ */ React.createElement("h3", { className: "text-2xl font-medium text-gray-900 title-font mb-2" }, "Category name:"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500 pb-1", contentEditable: true }, "Category description here!"), /* @__PURE__ */ React.createElement("div", { array: "", key: "movies", sortable: "" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "font-medium", contentEditable: true }, "Movie title"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500 pb-1", contentEditable: true }, "Did you like the movie?"))), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "rounded border font-medium border-blue-900 bg-blue-900 px-4 py-2 text-white hover:bg-transparent hover:text-blue-900 hover:border-blue-900",
      "new:movie": ""
    },
    "Add movie"
  ))))));
}
