import restaurant from '../../assets/restaurant.png'
import 'aos/dist/aos.css';
const Restaurant = () => {
    return (
        <div data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className='max-w-5xl mx-auto py-4'>
            <div className='grid grid-cols-2 gap-5'>
                <div className='flex justify-center items-center' style={{backgroundColor:'rgba(33, 158, 188, 0.2)'}}>
                    <img src={restaurant} alt="" className='w-96' />
                </div>
                <div className='space-y-4 text-lg'>
                    <h1 className='text-4xl font-bold text-blue-500'>Restaurant Management</h1>
                    <p>This project is a full-stack delivery system web application built to streamline parcel bookings,deliveries, and management. It includes features for users, delivery personnel, and administrators.</p>
                    <ul className="list-decimal ml-4">
                        <li>Contribute to the menu by adding new food items.</li>
                        <li>Register and login to access user-specific features.</li>
                        <li>Users can manage profile, including viewing added food items, adding new items, and
                            viewing ordered items.</li>
                    </ul>
                    <div className='flex flex-wrap gap-2'>
                        <h1 className='px-1 rounded border-blue-500 border-2 text-center'>#JS</h1>
                        <h1 className='px-1 rounded border-blue-500 border-2 text-center'>#React</h1>
                        <h1 className='px-1 rounded border-blue-500 border-2 text-center'>#React Router</h1>
                        <h1 className='px-1 rounded border-blue-500 border-2 text-center'>#Firebase</h1>
                        <h1 className='px-1 rounded border-blue-500 border-2 text-center'>#Tailwind CSS</h1>
                        <h1 className='px-1 rounded border-blue-500 border-2 text-center'>#Node</h1>
                        <h1 className='px-1 rounded border-blue-500 border-2 text-center'>#Express</h1>
                        <h1 className='px-1 rounded border-blue-500 border-2 text-center'>#MongoDB</h1>
                    </div>
                    <div className="flex mt-5 gap-3">
                        <a href="https://restaurant-management-88cad.web.app/" target="_blank" rel="noreferrer">
                            <p className="hover:underline hover:text-blue-500 cursor-pointer">View Site</p>
                        </a>
                        <a href="https://github.com/HasanurHasu/restaurant-management-client-side-assignment" target="_blank" rel="noreferrer">
                            <p className="hover:underline hover:text-blue-500 cursor-pointer">Client Repo</p>
                        </a>
                        <a href="https://github.com/HasanurHasu/restaurant-management-server-side-assignment" target="_blank" rel="noreferrer">
                            <p className="hover:underline hover:text-blue-500 cursor-pointer">Server Repo</p>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Restaurant;