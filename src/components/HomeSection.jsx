import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"

export const HomeSection = () => {
    return (
        <section
            id="Home"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
                        <span className="opacity-5 animate-fade-in"> Bonjour, je suis </span>
                        <span className="text-blue-500 opacity-0 animate-fade-in-delay-1"> {" "}Haja</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> {" "}Rabemananjara</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Étudiant à Epitech et passionné par les technologies,
                        je construis mon parcours entre cybersécurité, data et développement web.
                        J’aime apprendre, expérimenter et relever de nouveaux défis techniques.
                    </p>

                    <div className="flex items-center justify-center space-x-6">
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

                </div>

            </div>

        </section>
    )
}