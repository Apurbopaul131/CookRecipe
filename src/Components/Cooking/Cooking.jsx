import PropTypes from 'prop-types';
const Cooking = ({cooking}) => {
    console.log(cooking.length);
    let totalTime = 0;
    let totalCalories = 0;
cooking.forEach(({preparing_time,calories}) => {
        totalTime = totalTime + preparing_time;
        totalCalories = totalCalories + calories;
    });
    return (
        <div>
            <div className="overflow-hidden">
            <h1 className='text-2xl font-semibold text-[#282828] text-center'>Currently Cooking:{cooking.length}</h1>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
    {
        cooking.map((cook,idx)=><tr className='border-none' key={idx}>
        <th>{idx+1}</th>
        <td>{cook.recipe_name}</td>
        <td>{cook.preparing_time}</td>
        <td>{cook.calories}</td>
    </tr>)
    }
    <tr>
        <td></td>
        <td></td>
        <td>Total Time:{totalTime} Minutes</td>
        <td>Total Calories:{totalCalories} Calories</td>
    </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};
Cooking.propTypes ={
    cooking:PropTypes.array.isRequired
}
export default Cooking;