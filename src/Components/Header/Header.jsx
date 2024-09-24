import { FaRegUser } from 'react-icons/fa';
import './Header';

const Header = () => {
  return (
  
  <div className="navbar bg-base-100">
        <div className="flex-1">
        <a className="text-3xl text-[#150B2B] font-bold">CookRecipe</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered rounded-full"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-[#0BE58A] btn-circle flex justify-center"
          >
            <div className="rounded-full flex justify-center border-2 border-black p-1">
              <FaRegUser className="text-3xl" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;