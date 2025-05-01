import { useEffect, useState } from 'react';

export function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

        const handleChange = (e:any) => {
            setIsMobile(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);

        // Inizializza subito
        setIsMobile(mediaQuery.matches);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };

    }, [breakpoint]);

    return !isMobile;
}
