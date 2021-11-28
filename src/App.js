import logo from "@/logo.svg";
import "./App.css";
import { getRequest, postRequest } from "@api/axios";
function App() {
  const getFunc = async () => {
    const get = await getRequest("posts");
    console.log(get);
  };

  const postFunc = async () => {
    const post = await postRequest("posts", {
      title: "khw",
      body: "khw970421",
      userId: 1,
    });
    console.log(post);
  };

  getFunc();
  postFunc();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
