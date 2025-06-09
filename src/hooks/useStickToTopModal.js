import { useEffect, useState } from 'react';

export default function useStickToTopModal() {
    const modalClassName = "modal-stick-top";
    const [stickToTop, setStickToTop] = useState(false);

    useEffect(() => {

        const handleResize = () => {
            let isKeyboardOpen = false;
          
            if (window.visualViewport && window.visualViewport.height) {
              // اگر visualViewport موجود بود، ازش استفاده کن
              isKeyboardOpen = window.visualViewport.height < window.innerHeight;
            }
          
            setStickToTop(isKeyboardOpen);
          };
          

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        modalClassName,
        stickToTop,
    };
}
