import PropTypes from 'prop-types';
import { CiTimer } from "react-icons/ci";
import { SlEnergy } from "react-icons/sl";
import './Recipes.css';
const Recipes = ({recipe, handleCook}) => {
    const {
        recipe_image,
        recipe_name,
        short_description,
        ingredients,
        preparing_time,
        calories
    } = recipe;
    return (
        <div className='border-2 border-[#28282833] p-5 rounded-xl space-y-3'>
            <img src={recipe_image} alt="" className='w-[320px] h-52 rounded-md' />
            <div>
                <h3 className='text-lg text-[#282828] font-semibold'>{recipe_name}</h3>
                <p className='text-sm text-[#878787]'>{short_description}</p>
            </div>
            <div>
                <h3 className='text-xl font-medium text-[#282828]'>Ingredients:{ingredients.length}</h3>
                <ul className='list-disc m-5'>
                    {
                        ingredients.map((ingredient,id)=><li key={id}>{ingredient}</li>)
                    }
                </ul>
            </div>
            <div className='flex gap-5'>
                <p className='flex items-center gap-1'><CiTimer /><span>{preparing_time} minutes</span></p>
                <p className='flex items-center gap-1'><SlEnergy /><span>{calories} calories</span></p>
            </div>
            <button onClick={()=>handleCook(recipe)} className="btn bg-[#0BE58A] rounded-full">Want to cook</button>
        </div>
    );
};
Recipes.propTypes = {
    recipe:PropTypes.object.isRequired,
    handleCook:PropTypes.func.isRequired
}
export default Recipes;