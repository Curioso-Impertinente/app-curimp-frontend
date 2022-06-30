//import './App.css';

import Feed from './components/Feed/Feed';
import MainHeader from './components/Header/MainHeader';

import data from './data/data.json'

function App() {
  const categoryData = data.categories;
  console.log(categoryData);
  return (
    <div className="App container mx-auto" style={{maxWidth: "768px"}}>
      <MainHeader categories={categoryData} />
      <Feed posts={data.feed}/>
    </div>
  );
}

export default App;
