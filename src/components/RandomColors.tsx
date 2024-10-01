import React,{useState} from "react";

const ModelColor = () : string =>{

    const colos = '0123456789ABCDEF';
    let color ='#';
    for(let i=0;i<6;i++){
        color +=colos[Math.floor(Math.random()*6)]
    }
    return color
}

const GenteratorColors : React.FC = ()=>{
    const [Color,setColor] = useState<string>(ModelColor())

    const handleSubmit = () =>{
        setColor(ModelColor)
    }

    return(
        <div className="h-[850px] flex flex-col border justify-center items-center" style={{backgroundColor : Color }}>
            <h1 className="text-white text-4xl pb-10">Color Code : {Color}</h1>
            <button type="submit" onClick={handleSubmit} className="bg-white px-6 py-4 rounded-xl">Generator Color</button>
        </div>
    )
} 

export default GenteratorColors;