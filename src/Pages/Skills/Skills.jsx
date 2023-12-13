import 'aos/dist/aos.css';

const Skills = () => {
    return (
        <div className="bg-base-200 my-12">
            <div className="max-w-5xl mx-auto py-6">
                <h1 data-aos="zoom-in" className="text-3xl text-center font-bold text-blue-500">My Skills</h1>
                <div className="grid grid-cols-2 gap-10 my-5">
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className="space-y-4">
                        <h1 className="text-2xl font-bold">My Skills & Experiences.</h1>
                        <p className="text-justify text-lg">Experienced web developer specializing in front-end technologies, including HTML, CSS, Tailwind CSS, and React.js. Proficient in Firebase and Material-UI for dynamic and visually appealing applications. Comfortable with Node.js, Express.js, Next.js, and MongoDB for seamless full-stack development. Strong version control skills using Git. Passionate about pushing the boundaries of web development to create cutting-edge solutions.</p>
                        <div>
                            <button className="bg-blue-500 py-2 px-6 text-white font-medium rounded">GitHub</button>
                        </div>
                    </div>
                    <div data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className="space-y-2">
                        {/* javaScript */}
                        <div>
                            <div className="flex justify-between text-lg font-bold">
                                <h1>JavaScript</h1>
                                <h1>70%</h1>
                            </div>
                            <progress className="progress progress-info w-full" value="70" max="100"></progress>
                        </div>
                        {/* React.js */}
                        <div>
                            <div className="flex justify-between text-lg font-bold">
                                <h1>React.js</h1>
                                <h1>75%</h1>
                            </div>
                            <progress className="progress progress-info w-full" value="75" max="100"></progress>
                        </div>
                        {/* Tailwind CSS */}
                        <div>
                            <div className="flex justify-between text-lg font-bold">
                                <h1>Tailwind CSS</h1>
                                <h1>90%</h1>
                            </div>
                            <progress className="progress progress-info w-full" value="90" max="100"></progress>
                        </div>
                        {/* Node.js */}
                        <div>
                            <div className="flex justify-between text-lg font-bold">
                                <h1>Node.js</h1>
                                <h1>40%</h1>
                            </div>
                            <progress className="progress progress-info w-full" value="40" max="100"></progress>
                        </div>
                        {/* Express.js */}
                        <div>
                            <div className="flex justify-between text-lg font-bold">
                                <h1>Express.js</h1>
                                <h1>50%</h1>
                            </div>
                            <progress className="progress progress-info w-full" value="50" max="100"></progress>
                        </div>
                        {/* MongoDB */}
                        <div>
                            <div className="flex justify-between text-lg font-bold">
                                <h1>MongoDB</h1>
                                <h1>60%</h1>
                            </div>
                            <progress className="progress progress-info w-full" value="60" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;