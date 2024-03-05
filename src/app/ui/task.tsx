export interface task {
    id?: number,
    taskCategory?: String,
    taskTitle: String,
    taskBy: String,
    taskDate: String,
}



export const Task = (item: task) => {
    return (
        <div className="flex flex-col bg-gradient-to-l from-rose-500 to-purple-500  p-3 m-1 border-2 hover:border-2 transition-all duration-75 border-slate-200 hover:border-green-500 rounded-lg w-50 ">
            <div className="font-extrabold border-2 border-slate-400 p-8 rounded-md text-2xl text-center text-black">{item.taskTitle}</div>
            <div className="flex flex-row pt-2 justify-around">
                <div className="text-sm">{item.taskBy}</div>
                <div className="pl-2 text-sm ">{item.taskDate}</div>
            </div>
        </div>
    )
}