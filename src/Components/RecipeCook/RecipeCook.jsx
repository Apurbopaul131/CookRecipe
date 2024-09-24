import { useEffect, useState } from 'react';
import Cook from '../Cook/Cook';
import Recipes from '../Recipes/Recipes';
import './RecipeCook.css';
const RecipeCook = () => {
  const [recipies, setRecipes] = useState([]);
  const [cooks, setCook] = useState([]);
  const [cooking, setCooking] = useState([]);

  const handleCook = (cookItem) => {
    if (cooks.find(({ recipe_id }) => recipe_id == cookItem.recipe_id)) {
      alert('The item alradey added');
    } else {
      setCook([...cooks, cookItem]);
    }
  };

  const handlePrepare = (prepareItem) => {
    const newCook = cooks.filter(({ recipe_id }) => recipe_id !== prepareItem.recipe_id);
    setCook(newCook);
    setCooking([...cooking, prepareItem]);
  };

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="space-y-4 my-10">
      <h3 className="text-4xl text-[#150B2B] text-center font-bold">Our Recipes</h3>
      <p className="text-lg text-[#150B2B99] text-center">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna
        volutpat curabitur elementum mauris aenean neque.
      </p>
      <div className="md:flex gap-6">
        <div className="w-2/3 mx-auto md:w-1/3 lg:w-2/3 grid gird-cols-1 lg:grid-cols-2 gap-10">
          {recipies.map((recipe) => (
            <Recipes key={recipe.recipe_id} handleCook={handleCook} recipe={recipe}></Recipes>
          ))}
        </div>
        <Cook cooks={cooks} cooking={cooking} handlePrepare={handlePrepare}></Cook>
      </div>
    </div>
  );
};

export default RecipeCook;
