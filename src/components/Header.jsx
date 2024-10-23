
const Header = () => {
    return (
        <nav className="flex items-center justify-between w-11/12 mx-auto my-5">
            <div className="flex gap-4">
                <h2 className="text-color-primary text-3xl font-black">Recipe Calories</h2>
            </div>
            <div className="hidden md:block">
                <ul className="flex gap-6 text-base text-color-secondary">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="flex items-center gap-5">
                <div>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
                <p className="w-8 h-8 flex items-center justify-center bg-btn-primary rounded-full cursor-pointer">
                    <i className="fa-regular fa-user text-white"></i>
                </p>
            </div>
        </nav>
    );
};

export default Header;