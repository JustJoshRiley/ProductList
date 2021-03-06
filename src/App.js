import './App.css';
import { useState } from 'react';
import data, {uniqueCategories, categoriesWithCounts, categoriesAndCounts} from './data';
import Header from './Header';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Inventory from './Inventory';

function App() {
  
  const [category, setCategory] = useState()

  return (
    <div className="App">

      <Header
        title="World Class Products"
        productCount={data.length}
        categoryCount={uniqueCategories.length}
      />
      
      <CategoryList 
      category={category}
      onClick={newCategory => setCategory(newCategory)
      }
      />
      
      <ProductList category={category} />
      
      <Inventory />
    </div>
  );
}

export default App;
