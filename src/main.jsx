import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {NoteContextProvider} from "./context/note-context.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NoteContextProvider>
    <App />
  </NoteContextProvider>,
);
