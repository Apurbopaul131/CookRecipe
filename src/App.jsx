import './App.css';
import Banner from './Components/Banner/Bnaner';
import Header from './Components/Header/Header';
import RecipeCook from './Components/RecipeCook/RecipeCook';

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <Header></Header>
      <Banner></Banner>
      <RecipeCook></RecipeCook>
    </div>
  );
}

export default App;
