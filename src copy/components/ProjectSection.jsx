

const projects = [
    {
        id: 1,
        title: "Hangman",
        description: "Jeu du pendu élaborer avec Python.",
        image: "/hangman.jpg",
        tags: ["Python", "First game"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 1,
        title: "Jobboard - Xjob",
        description: "Site web de recrutement, permettant aux recruteurs de créer des annonces et aux candidats de postuler",
        image: "/Xjob.png",
        tags: ["React", "Tailwindcss", "Shadcn/ui", "Django", "SQLLite", "Group-project"],
        demoUrl: "#",
        githubUrl: "#",
    }
]

export const ProjectSection = () => {

    return (
        <section id="projects" className="py-24 px-4 relative" >
            <div className="container mx-auto max-w-5xl" >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center " >
                    < span> Projets </span>
                    <div className="h-1 w-20 bg-blue-500 mx-auto mt-5" ></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (

                        <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                            key={key}>
                            <div className="h-48 overflow-hidden">
                                <img src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <h3 className="text-xl font-semibold mb-3 mt-3">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-3">{project.description}</p>

                            <div className="p-4">
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>



                            <div className="flex justify-between items-center mb-2 pl-4">
                                <div className="flex space-x-3">
                                    {/* <a href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20} />
                                    </a> */}

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>



        </section>
    );


}
