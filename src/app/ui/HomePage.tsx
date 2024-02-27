export const HomePage=()=>{
    return(
        <div className="pl-16">
            <div className="bg-purple-300 text-white font-extrabold p-2 w-">MSOFFICE</div>
            <div className="flex flex-col bg-orange-400  p-3 m-1 hover:border-2 border-green-400 rounded-lg">
                <div className="font-extrabold border-2 border-slate-400 p-8 rounded-md font-extrabolder text-2xl">Task Title</div>
                <div className="flex flex-row pt-2 justify-around">
                    <div className="text-sm">Task By</div>
                    <div className="pl-2 text-sm ">Task Date</div>
                </div>
            </div>
        </div>
    );
}