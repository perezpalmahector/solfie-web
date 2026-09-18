import Card from "./Card";

import {

ArrowRight,

Calculator

} from "lucide-react";

interface Props{

title:string;

description:string;

}

export default function ServiceCard({

title,

description

}:Props){

return(

<Card>

<div className="mb-8 inline-flex rounded-2xl bg-red-100 p-4">

<Calculator

size={30}

className="text-[#B3202D]"

/>

</div>

<h3 className="text-2xl font-bold">

{title}

</h3>

<p className="mt-5 leading-8 text-slate-600">

{description}

</p>

<div className="mt-8 flex items-center gap-2 font-semibold text-[#B3202D]">

Conocer más

<ArrowRight size={18}/>

</div>

</Card>

);

}