import Header from "./components/pages/header.jsx";
import Footer from "./components/pages/footer.jsx";
import Form from "./components/form/form.jsx";
import NoteList from "./components/note/note-list.jsx";

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
