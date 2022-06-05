//import './App.css';

import MainHeader from './components/Header/MainHeader';

import data from './data/Data.json'

function App() {
  //console.log(JSON.stringify(data));
  const categoryData = data.categories;
  console.log(categoryData);
  return (
    <div className="App">
      <MainHeader categories={categoryData} />
    </div>
  );
}

export default App;
