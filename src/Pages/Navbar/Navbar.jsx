import { NavLink } from "react-router-dom";
import './Navbar.css'
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";


const Navbar = () => {
    useEffect(() => {
        Aos.init({ duration: '500', delay: '200' })
    }, [])
    const links = <div className="flex text-lg justify-center gap-5 items-center font-medium">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
    </div>
    return (
        <div data-aos="fade-down" className="navbar max-w-5xl mx-auto bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="font-semibold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="hidden lg:flex text-4xl font-bold">Hasanur</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="font-semibold menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <a className="text-4xl font-bold">Hasanur</a>
            </div>
        </div>
    );
};

export default Navbar;