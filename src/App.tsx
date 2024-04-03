import ArticlesWrapper from "./components/ArticlesWrapper";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold underline text-center mb-4">Fake News App</h1>
        <ArticlesWrapper />
      </div>
    </div>
  );
}

export default App;
