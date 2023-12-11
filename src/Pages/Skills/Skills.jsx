
const Skills = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl text-center font-bold text-blue-500">My Skills</h1>
            <div className="grid grid-cols-2 gap-5 my-5">
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold">My Skills & Experiences.</h1>
                    <p className="text-justify">Experienced web developer specializing in front-end technologies, including HTML, CSS, Tailwind CSS, and React.js. Proficient in Firebase and Material-UI for dynamic and visually appealing applications. Comfortable with Node.js, Express.js, Next.js, and MongoDB for seamless full-stack development. Strong version control skills using Git. Passionate about pushing the boundaries of web development to create cutting-edge solutions.</p>
                    <div>
                        <button className="bg-blue-500 py-2 px-6 text-white font-medium rounded">GitHub</button>
                    </div>
                </div>
                <div>
                    {/* javaScript */}
                    <div>
                        <div className="flex justify-between text-lg font-bold">
                            <h1>JavaScript</h1>
                            <h1>75%</h1>
                        </div>
                        <progress className="progress progress-info w-full" value="75" max="100"></progress>
                    </div>
                    {/* javaScript */}
                    <div>
                        <div className="flex justify-between text-lg font-bold">
                            <h1>JavaScript</h1>
                            <h1>75%</h1>
                        </div>
                        <progress className="progress progress-info w-full" value="75" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;