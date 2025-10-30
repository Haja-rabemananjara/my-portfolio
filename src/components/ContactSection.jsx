import { Mail, Phone, Send } from "lucide-react";
import { ArrowUpCircleIcon } from "lucide-react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactSection = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_v7lkubd', 'template_c8hr0kj', form.current, {
                publicKey: 'XNlpLQ2DkGWYEkxli',
            })
            .then(
                () => {
                    toast.success('Message envoyé avec succès !');
                    e.target.reset();
                },
                (error) => {
                    toast.error('Échec de l’envoi du message.');
                    console.error('FAILED...', error.text);
                },
            );
        e.target.reset()
    };

    return (
        <div>
            <section
                id="contact"
                className="py-24 px-4 relatice bg-secondary/30">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Contacts
                    </h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto mt-5" ></div>

                    <p className="text-center text-muted-foreground mt-7 mb-12 max-w-3xl mx-auto">
                        N'hesitez pas à me contacter si vous souhaiter collaborer avec moi
                        ou si vous souhaitez avoir plus d'informations à mon sujet.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-semibold mb-6">
                                {" "} Mes informations
                            </h3>

                            <div className="space-y-6 justify-center">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Mail className="h-6 w-6 " />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-left">Email</h4>
                                        <a
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                            href="mailto:rabemananjarahaja7@gmail.com">
                                            rabemananjarahaja7@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-left">Email</h4>
                                        <a
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                            href="mailto:hajarabema@proton.me">
                                            hajarabema@proton.me
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Phone className="h-6 w-6 " />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-left">Téléphone</h4>
                                        <a
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                            href="tle:+33 6 23 90 97 16">
                                            +33 6 23 90 97 16
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card p-8 rounded-lg shadow-xs">
                            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                <h3 className="text-2xl font-semibold mb-6">Message</h3>

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium">Nom</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="user_name"
                                        required
                                        className="mt-2 w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-white"
                                        placeholder="Votre Nom ..."
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="user_email"
                                        required
                                        className="mt-2 w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-white"
                                        placeholder="exemple@gmail.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        className="mt-2 w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-white resize-none"
                                        placeholder="Votre message ..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full items-center justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center flex gap-2 "
                                >
                                    <Send size={16} />Envoyer
                                </button>
                            </form>
                        </div>
                    </div>
                </div >
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />

            </section >

            <div className="flex justify-center items-center">
                <a
                    href="#home"
                    classNam="rounded-full bg-primary/10 hover:bg-primary/20 text-white transition-colors">
                    <ArrowUpCircleIcon />
                </a>
            </div>
        </div>
    )
};