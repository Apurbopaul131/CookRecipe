import PropTypes from 'prop-types';
import Cooking from '../Cooking/Cooking';
import WantCook from '../wantCook/wantCook';
import './Cook.css';
const Cook = ({cooks,handlePrepare,cooking}) => {

    console.log(cooks);
    return (
        <div className='md:w-1/3'>
           <WantCook cooks={cooks} handlePrepare={handlePrepare}></WantCook>
           <Cooking cooking={cooking}></Cooking>
        </div>
    );
};

Cook.propTypes = {
    cooks:PropTypes.array.isRequired,
    handlePrepare:PropTypes.func.isRequired,
    cooking:PropTypes.array.isRequired
}
export default Cook;