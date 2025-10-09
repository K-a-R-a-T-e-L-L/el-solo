import { useEffect, useState } from "react"

export const useGetSizingWidthWindow = () => {
    const [state, setState] = useState(0);

    useEffect(() => {
        const getWindowWidth = () => {
            setState(window.innerWidth);
        };

        getWindowWidth();

        window.addEventListener('resize', getWindowWidth);

        return () => {
            window.removeEventListener('resize', getWindowWidth)
        }
    }, []);

    return [state];
};