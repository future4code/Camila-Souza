import { useState } from "react";

const useToggle = () =>{
    const [toggled, setToggled] = useState(false);

    const handleToggle = () => {
        setToggled(!toggled)
    }
    return [toggled, handleToggle]
}
export default useToggle;