//import './App.css';

import Feed from './components/Feed/Feed';
import MainHeader from './components/Header/MainHeader';

import data from './data/data.json'

function App() {
  //console.log(JSON.stringify(data));
  const categoryData = data.categories;
  console.log(categoryData);
  return (
    <div className="App">
      <MainHeader categories={categoryData} />
      <Feed posts={data.feed}/>
    </div>
  );
}

export default App;
