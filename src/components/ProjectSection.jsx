import { FiGithub as Github } from "react-icons/fi";

const projects = [
    {
        id: 1,
        title: "Hangman",
        description: "Jeu du pendu élaborer avec Python.",
        image: "/hangman.jpg",
        tags: ["Python", "First game"],
        demoUrl: "#",
        githubUrl: "",
    },
    {
        id: 2,
        title: "Jobboard - Xjob",
        description: "Site web de recrutement, permettant aux recruteurs de créer des annonces et aux candidats de postuler",
        image: "/Xjob.png",
        tags: ["React", "Tailwindcss", "Shadcn/ui", "Django", "SQLLite", "Group-project"],
        demoUrl: "#",
        githubUrl: "",
    },
    {
        id: 3,
        title: "Le Kas - 2D Game",
        description: "LE KAS est un jeu de plateforme 2D développé en Java (Swing) où vous incarnez Lucas, un cambrioleur qui vient de dérober des bijoux au musée du Louvre.",
        image: "/le-kas.png",
        tags: ["Java", "Group-project"],
        demoUrl: "#",
        githubUrl: "https://github.com/Haja-rabemananjara/LE-KAS---2D-GAME",
    },
    {
        id: 4,
        title: "ChatApp",
        description: "ChatApp est une application web de chat développée avec Spring Boot - Websocket et Angular.",
        image: "/ChatApp.png",
        tags: ["Java", "Spring Boot", "Websocket", "Angular", "Tailwindcss"],
        demoUrl: "#",
        githubUrl: "https://github.com/Haja-rabemananjara/Chat-app",
    }
]

export const ProjectSection = () => {

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span>Projets</span>
                    <div className="h-1 w-20 bg-blue-500 mx-auto mt-5"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div 
                            key={project.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-4 flex-1 flex flex-col">
                                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span 
                                            key={tag}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto pt-4 border-t">
                                    <a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}