import { useState } from "react";

let useIsVeg = (Veg) =>{
    const [isVeg , setIsVeg] = useState(null);
    if (Veg === "VEG") {
       setIsVeg(true);
    } else {
       setIsVeg(false);
    }
    return isVeg;
  }

  export default useIsVeg;