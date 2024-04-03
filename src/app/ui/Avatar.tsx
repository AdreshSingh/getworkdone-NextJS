export const Avatar=(props:any)=>{
    const chukd=props.children ;
    return (<div className=" text-center font-bold rounded-lg border-white border-2">{chukd[0].toUpperCase()}</div>);
}