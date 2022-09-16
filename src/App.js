import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import NoteList from "./components/NoteList/NoteList";

import "./App.css";
function App() {
  return (
    <div className='App'>
      <Header />
      <main className='main__container'>
        <Form />
        <NoteList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
