import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function GoToTop() {
    const pathName = useLocation().pathname;
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    
    useEffect(() => {
        onTop()
    }, [pathName]);

    return null;
}

export default GoToTop;