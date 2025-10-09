'use client';
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface LanguageSwitcherProps {
    currentLocale: string
};

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLocale }) => {

    const [isRuLanguage, setIsRuLanguage] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    const changeLng = () => {
        setIsRuLanguage(currentLocale === 'ru' ? true : false)
        const newLocale = currentLocale === 'ru' ? 'en' : 'ru';
        const newPath = pathname.replace(
            `/${currentLocale}`,
            `/${newLocale}`
        );
        router.push(newPath);
    };

    useEffect(() => {
        setIsRuLanguage(currentLocale === 'ru' ? true : false);
    }, [currentLocale]);

    return (
        <button className={`w-[50px] h-[22px] bg-[#2be2b10d] fixed top-7 right-7 max-md:left-7 max-sm:left-1 max-sm:top-1 rounded-[2px] overflow-hidden border-1 z-21
        border-solid border-[#00ffff11] hover:border-[#00ffff4e] active:scale-[0.98] transition-all duration-200`} title="Select language" onClick={changeLng}>
            <div
                className={`h-full aspect-square text-black text-[12px] grid place-items-center top-0 absolute
                bg-[#ff00ff] ${isRuLanguage ? 'translate-x-0' : 'translate-x-[28px]'} transition-transform duration-300 ease-in-out font-bold`}>
                {isRuLanguage ? 'RU' : 'EN'}
            </div>
        </button>
    )
};

export default LanguageSwitcher;