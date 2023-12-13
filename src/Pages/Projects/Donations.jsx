import donation from '../../assets/donation.png'
import 'aos/dist/aos.css';

const Donations = () => {
    return (
        <div data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className='max-w-5xl mx-auto py-4'>
            <div className='grid grid-cols-2 gap-5'>
                <div className='flex justify-center items-center' style={{ backgroundColor: 'rgba(33, 158, 188, 0.2)' }}>
                    <img src={donation} alt="" className='w-96' />
                </div>
                <div className='space-y-4 text-lg'>
                    <h1 className='text-4xl font-bold text-blue-500'>Donation Campaign</h1>
                    <p>This project is a full-stack delivery system web application built to streamline parcel bookings,deliveries, and management. It includes features for users, delivery personnel, and administrators.</p>
                    <ul className="list-decimal ml-4">
                        <li>You can search for donations by category by clicking the search button.</li>
                        <li>You can see your donation in a Pie Chart Graph.</li>
                        <li>Category-wise title, background, category background color..</li>
                    </ul>
                    <div className='flex flex-wrap gap-2'>
                        <h1 className='px-1 rounded border-blue-500 border-2 text-center'>#JS</h1>
                        <h1 className='px-1 rounded border-blue-500 border-2 text-center'>#React</h1>
                        <h1 className='px-1 rounded border-blue-500 border-2 text-center'>#React Router</h1>
                        <h1 className='px-1 rounded border-blue-500 border-2 text-center'>#Tailwind CSS</h1>
                    </div>
                    <div className="flex mt-5 gap-3">
                        <a href="https://donation-campaign-hasanurhasu.netlify.app/" target="_blank" rel="noreferrer">
                            <p className="hover:underline hover:text-blue-500 cursor-pointer">View Site</p>
                        </a>
                        <a href="https://github.com/HasanurHasu/donation-campaign-assignment" target="_blank" rel="noreferrer">
                            <p className="hover:underline hover:text-blue-500 cursor-pointer">Client Repo</p>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donations;