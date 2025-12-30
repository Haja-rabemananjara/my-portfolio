import { FaFileDownload, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useEffect, useState } from "react";

export const HomeSection = () => {

    const texts = [
        "Data",
        "Cybersécurité et Infrastructure IT",
        "Développement Web"
    ];

    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const fadeTimeout = setTimeout(() => setFade(false), 2000);
        const switchTimeout = setTimeout(() => {
            setIndex((prev) => (prev + 1) % texts.length);
            setFade(true);
        }, 2500);

        return () => {
            clearTimeout(fadeTimeout);
            clearTimeout(switchTimeout);
        };
    }, [index]);

    return (
        <section
            id="home"
            className="relative flex flex-col items-center justify-center px-4 mt-20 mb-70"
        >
            <div className="items-center rounded">
                <img src="carré.jpg"
                    className="h-50 w-50 object-cover border-8 border-yellow-500 shadow-xl "
                    style={{ borderRadius: "50%" }} />
            </div>

            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
                        <span className="opacity-5 animate-fade-in"> Bonjour, je suis </span>
                        <span className="text-blue-500 opacity-0 animate-fade-in-delay-1"> {" "}Haja</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> {" "}Rabemananjara</span>
                    </h1>

                    <div className="my-2 mb-4 flex items-center justify-center font-semibold text-primary drop-shadow md:text-lg opacity-0 animate-fade-in-delay-2">
                        <span
                            className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            {texts[index]}
                        </span>
                    </div>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Étudiant à Epitech et passionné par les technologies,
                        je construis mon parcours entre cybersécurité, data et développement web.
                        J’aime apprendre, expérimenter et relever de nouveaux défis techniques.
                    </p>

                    <div className="flex items-center justify-center space-x-6 opacity-0 animate-fade-in-delay-4" >
                        <a
                            className="cursor-pointer w-16 h-16 rounded-full bg-icon-bg shadow-md flex items-center justify-center hover:scale-110 transition"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/haja-rabemananjara-301445186/"
                        >
                            <FaLinkedin className="text-[#0A66C2]" size={50} />
                        </a>

                        <a className="cursor-pointer w-16 h-16 rounded-full bg-icon-bg shadow-md flex items-center justify-center hover:scale-110 transition"
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/Haja-rabemananjara?tab=repositories"
                        >
                            <FaGithub className="text-[#0A66C2]" size={50} />
                        </a>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-delay-4" >
                        <a href="CV.pdf" download="CV Haja Rabemananjara">
                            <button
                                type="button"
                                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center flex gap-2 items-center justify-center"
                            >
                                <FaFileDownload />
                                Télécharger CV
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section >
    )
}