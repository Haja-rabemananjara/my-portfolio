import { WorkflowIcon, School } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
                    A propos
                    <div className="h-1 w-20 bg-blue-500 mx-auto mt-5" ></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold">Passioné par la Data | Cybersécurité</h3>

                        <p className="text-muted-foreground">
                            Je suis actuellement en formation en Architecture des Systèmes d’Information à Epitech.
                            Mon objectif est de contribuer à des projets alliant technologie, données et innovation.

                        </p>
                        <p className="text-muted-foreground">
                            Avec plus de 4 ans d'expériences dans le domaine de l'audit, comptabilité et de la finance,
                            je mettrais à profit mes compétences au sein d’un environnement où je pourrai continuer à apprendre et à évoluer.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <WorkflowIcon className="h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-2xl font-bold text-green-700 ">Expériences</h4>
                                    <span className="font-bold">Collaborateur Comptable & auditeur </span>Cabinet Clere ( 2024 - 2025)<br />
                                    <span className="font-bold">Auditeur </span>Delta Audit (2022 - 2024)<br />
                                    <span className="font-bold">Auditeur </span>Forvis Mazars (2021 2022)
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <School className="h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-2xl font-bold text-pink-700 ">Formations</h4>
                                    <span className="font-bold">Epitech </span>Architecte SI ( 2025 - En cours)<br />
                                    <span className="font-bold">STUDI </span>Système et réseaux (2025)<br />
                                    <span className="font-bold">Aix-Marseille Université  </span>Formation DSCG (2024 - 2025)
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>



        </section>
    );
};