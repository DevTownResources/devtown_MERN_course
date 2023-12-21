import { useState } from "react";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import Search from "./components/Search";
import Recipe from "./components/Recipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (searchTerm) => {
    setRecipes([]);
    setLoader(true);
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=e57ce14d&app_key=fb9063a7966d7bd1fa3921eca5e34f57`
      );
      const data = await response.json();
      console.log(data);
      setRecipes(data.hits);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="App">
      <Header />
      <Search handleSubmit={handleSubmit} />

      {loader && <div className="text-center bold">Loading...</div>}

      <div className="flex flex-wrap container mx-auto align-center justify-center">
        {recipes.length > 0 &&
          recipes.map((recipe) => (
            <Recipe key={recipe.recipe.uri} recipe={recipe.recipe} />
          ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
