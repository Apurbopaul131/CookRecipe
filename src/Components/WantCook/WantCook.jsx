
import './WantCook.css';

const wantCook = ({cooks,handlePrepare}) => {
    console.log(cooks);
    return (
        <div className="overflow-hidden">
            <h1 className='text-2xl font-semibold text-[#282828] text-center'>Want to cook:{cooks.length}</h1>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
        cooks.map((cook,idx)=><tr className='border-none' key={idx}>
        <th>{idx+1}</th>
        <td>{cook.recipe_name}</td>
        <td>{cook.preparing_time}</td>
        <td>{cook.calories}</td>
        <td><button className="btn rounded-full bg-[#0BE58A]" onClick={()=>handlePrepare(cook)}>prepare</button></td>
    </tr>)
    }
    </tbody>
  </table>
</div>
    );
};

export default wantCook;