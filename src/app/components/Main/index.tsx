import Advantages from "../Advantages";
import Home from "../Home";
import { I18nType } from "@/types/i18n";
import ListServices from "../ListServices";
import Portfolio from "../Portfolio";
import Contacts from "../Contacts";

interface MainProps {
    t: I18nType
};

const Main = ({t}: MainProps) => {
    return(
        <main className="flex flex-1 flex-col w-full h-full relative">
            <Home t={t}/>
            <Advantages t={t}/>
            <ListServices t={t}/>
            <Portfolio t={t}/>
            <Contacts t={t}/>
        </main>
    );
};

export default Main;