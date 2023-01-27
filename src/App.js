import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This app was coded by Ketty and is{" "}
          <a
            href="https://github.com/KettySalt/react-matt-weather"
            target="_blank"
            rel="noreferrer"
            className="align-middle"
          >
            open sourced{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
