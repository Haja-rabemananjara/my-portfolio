import imgpython from "/python.png";
import imghtml from "/html.png";
import imgcss from "/css.png";
import imgJS from "/JS.png";
import imgjava from "/java.svg";
import imgreact from "/react.png";
import imgVMware from "/vmware.png";
import imgCisco from "/ciscop.png";
import imgSQL from "/SQL.webp";
import imgPowerBI from "/PowerBI.jpeg";
import imgNextjs from "/Next.js.png";
import imgTS from "/Typescript.png";
import postgreSQL from "/postgresql.webp";
import imgDocker from "/Docker.svg";3
import imgNest from "/Nest.js.svg";

export const SkillsSection = () => {
    const skills = [
        { id: 1, name: "Python", image: imgpython },
        { id: 2, name: "HTML", image: imghtml },
        { id: 3, name: "CSS", image: imgcss },
        { id: 4, name: "JavaScript", image: imgJS },
        { id: 5, name: "TypeScript", image: imgTS },
        { id: 6, name: "Java", image: imgjava },
        { id: 7, name: "React.js", image: imgreact },
        { id: 8, name: "Next.js", image: imgNextjs },
        { id: 9, name: "VMware Workstation", image: imgVMware },
        { id: 10, name: "Cisco Packet Tracer", image: imgCisco },
        { id: 11, name: "SQL", image: imgSQL },
        { id: 12, name: "PostgreSQL", image: postgreSQL },
        { id: 13, name: "Power BI", image: imgPowerBI },
        { id: 14, name: "Docker", image: imgDocker },
        { id: 15, name: "Nest.js", image: imgNest },
    ]

    return (
        <section id="skills" className="py-24 px-4 relative" >
            <div className="container mx-auto max-w-5xl" >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center " >
                    < span> Compétences </span>
                    <div className="h-1 w-20 bg-blue-500 mx-auto mt-5" ></div>
                </h2>

                <div className="flex flex-wrap gap-4 justify-center items-center  mt-4 md:mt-0">
                    {skills.map((skills) => (
                        <div key={skills.id} className="flex justify-center items-center flex-col transition-transform duration-300 hover:scale-110">
                            <div className="w-30 h-30 p-2 rounded-full border-2 border-accent ">
                                <img src={skills.image} alt={skills.name} className="object-cover rounded-full h-full w-full " />
                            </div>
                            <span className="mt-2 text-sm">{skills.name}</span>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};