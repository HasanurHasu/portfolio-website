import { FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaSquarePhone, FaTelegram, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Banner = () => {
    return (
        <div className=" bg-base-200">
            <div className="h-[500px] max-w-5xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between">
                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="  rounded-lg shadow-2xl" />
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
                        <a href="https://www.facebook.com/hasanurhasu121" target="_blank"><FaFacebook className=" text-2xl" /></a>
                        <a href="https://www.facebook.com/hasanurhasu121" target="_blank"><FaInstagram className=" text-2xl" /></a>
                        <a href="https://www.facebook.com/hasanurhasu121" target="_blank"><FaTwitter className=" text-2xl" /></a>
                        <a href="https://www.facebook.com/hasanurhasu121" target="_blank"><FaLinkedin className=" text-2xl" /></a>
                        <a href="https://www.facebook.com/hasanurhasu121" target="_blank"><FaTelegram className=" text-2xl" /></a>
                    </div>
                    <div>
                        <button className="bg-blue-500 py-2 px-6 text-white font-medium rounded my-4">Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;