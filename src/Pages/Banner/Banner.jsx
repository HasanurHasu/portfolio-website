import { FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaSquarePhone, FaTelegram, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import photo from '../../assets/man.png'
import 'aos/dist/aos.css';

const Banner = () => {
    return (
        <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className=" bg-base-200">
            <div className="h-[500px] max-w-5xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between">
                <img src={photo} className="w-[600px]" />
                <div className="space-y-2">
                    <h1 className="text-6xl font-bold">Hasanur Rahman</h1>
                    <h1 className="text-3xl font-bold"><span className="text-red-400">M</span><span className="text-blue-400">E</span><span className="text-green-400">R</span><span className="text-yellow-400">N</span> Stack Developer</h1>
                    <div className="py-6">
                        <div className="flex items-center gap-2">
                            <FaSquarePhone className="text-2xl text-blue-500" />
                            <p className="text-xl">+8801787733127</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdEmail className="text-2xl text-blue-500" />
                            <p className="text-xl">hasanurhasu127@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaLocationDot className="text-2xl text-blue-500" />
                            <p className="text-xl">Dinajpur, Bangladesh</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <a href="https://www.facebook.com/hasanurhasu121" target="_blank" rel="noreferrer"><FaFacebook className=" text-2xl" /></a>
                        <a href="https://www.facebook.com/hasanurhasu121" target="_blank" rel="noreferrer"><FaInstagram className=" text-2xl" /></a>
                        <a href="https://www.facebook.com/hasanurhasu121" target="_blank" rel="noreferrer"><FaTwitter className=" text-2xl" /></a>
                        <a href="https://www.facebook.com/hasanurhasu121" target="_blank" rel="noreferrer"><FaLinkedin className=" text-2xl" /></a>
                        <a href="https://www.facebook.com/hasanurhasu121" target="_blank" rel="noreferrer"><FaTelegram className=" text-2xl" /></a>
                    </div>
                    <div>
                        <a href="https://drive.google.com/file/d/1Wn3eGjMaeq5c5biY8X1GWA9v61-hhSHj/view" target="_blank" rel="noreferrer"> <button className="bg-blue-500 py-2 px-6 text-white font-medium rounded my-4">Download CV</button></a>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;