import photo from '../../assets/photo.png'
import 'aos/dist/aos.css';

const About = () => {

    return (
        <div data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="max-w-5xl mx-auto my-6">
            <h1 className="text-3xl text-blue-500 font-bold">About</h1>
            <p className="text-4xl">A little about me.</p>
            <div className="flex items-center mt-6">
                <div className='flex-1'>
                    <img src={photo} alt="" className='w-96' />
                </div>
                <div className='flex-1'>
                    <h1 className='text-3xl font-bold text-blue-500'>About</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae nostrum maxime illo. Eius quam quaerat distinctio assumenda, sunt libero, numquam, odio dicta ut impedit vel sed repellat ipsam. Provident quis inventore ipsum cum deserunt repudiandae incidunt perspiciatis, cupiditate rerum, suscipit blanditiis eligendi libero, aliquam id laudantium modi fugit magnam voluptates a. Magnam minima eveniet eum quaerat omnis. Culpa, asperiores natus?</p>
                    <div>
                        <button className="bg-blue-500 py-2 px-6 text-white font-medium rounded my-4">Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;