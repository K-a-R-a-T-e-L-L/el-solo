import Image from "next/image";
import Link from "next/link";
import style from './styles.module.css';
import { ContactsI18nType } from "@/types/i18n";
import { useEffect } from "react";
import { animatedElements } from "@/app/lib/observer";

interface ContactsProps {
    t: ContactsI18nType;
};

const Contacts = ({ t }: ContactsProps) => {

    const columnFirst = t.contacts.listContacts.slice(0, 3);
    const columnSecond = t.contacts.listContacts.slice(3);

    useEffect(() => {
        animatedElements('.hidden_text_contacts', 'animated');
    }, []);

    return (
        <section className="w-full pt-[100px] pb-[100px] pl-10" id="contacts">
            <article className="w-full h-full flex flex-col justify-center gap-y-20 max-xl:gap-y-10 perspective-[1000px]">
                <h2 className={`text-[32px] max-xl:text-[22px] text-[#00FFD1] ${style.title_pulse} hidden_text_contacts`} style={{ fontFamily: 'RubikWetPaint', animationDelay: `2s` }}>{t.contacts.title}</h2>
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-18 w-full h-full">
                    <div className="w-full h-full flex flex-col gap-y-18 justify-between">
                        {columnFirst.length > 0 && columnFirst.map((el, i) => {
                            return (
                                <Link className="w-[80%] flex gap-x-10 relative hover:translate-x-1 transition-all duration-305 ease-in-out cursor-pointer active:scale-[0.97]" href={el.url} target="_blank" key={i}>
                                    <div className="relative w-[15%] min-w-[50px] aspect-[1/1]">
                                        <Image src={`/images/${el.src}_icon.png`} alt={el.alt} className="object-contain" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                    </div>
                                    <div className="w-[82%] flex flex-col justify-evenly gap-y-2">
                                        <h3 className="text-[22px] max-xl:text-[18px] text-cyan-600 hidden_text_contacts" style={{ fontFamily: 'RubikWetPaint', animationDelay: `${2.5 + 0.5 * i}s` }}>{el.name}</h3>
                                        <p className="text-cyan-950 break-words hover:text-violet-950 hidden_text_contacts" style={{ animationDelay: `${2.5 + 0.5 * i}s` }}>{el.url}</p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                    <div className="w-full h-full flex flex-col gap-y-15 justify-between">
                        {columnSecond.length > 0 && columnSecond.map((el, i) => {
                            return (
                                <Link className="w-[80%] flex gap-x-10 relative hover:translate-x-1 transition-all duration-305 ease-in-out cursor-pointer active:scale-[0.98]" href={el.url} target="_blank" key={i}>
                                    <div className="relative w-[15%] min-w-[50px] aspect-[1/1]">
                                        <Image src={`/images/${el.src}_icon.png`} alt={el.alt} className="object-contain" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                    </div>
                                    <div className="w-[82%] flex flex-col justify-evenly gap-y-2">
                                        <h3 className="text-[22px] max-xl:text-[18px] text-cyan-600 hidden_text_contacts" style={{ fontFamily: 'RubikWetPaint', animationDelay: `${2.5 + 0.5 * i}s` }}>{el.name}</h3>
                                        <p className="text-cyan-950 break-words hover:text-violet-950 hidden_text_contacts" style={{ animationDelay: `${2.5 + 0.5 * i}s` }}>{el.url}</p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Contacts;