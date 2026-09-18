import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{

variant?:"primary"|"secondary";

}

export default function Button({

children,

variant="primary",

className,

...props

}:Props){

return(

<button

{...props}

className={clsx(

"rounded-xl px-7 py-4 font-semibold transition-all duration-300",

variant==="primary"
? "bg-[#800000] text-white hover:bg-[#650000] shadow-lg"
: "border-2 border-white bg-white text-[#800000] hover:bg-transparent hover:text-white hover:border-white shadow-lg",

className

)}

>

{children}

</button>

);

}