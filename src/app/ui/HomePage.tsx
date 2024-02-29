interface task {
    id?: number,
    taskCategory?: String,
    taskTitle: String,
    taskBy: String,
    taskDate: String,
}



const Task = (item: task) => {
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
export const HomePage = () => {
    const data: task[] = [
        {
            id: 1,
            taskCategory: "MS OFFICE",
            taskTitle: "Paragraph",
            taskBy: "Devank",
            taskDate: "29/07/2024"
        },
        {
            id: 2,
            taskCategory: "MS OFFICE",
            taskTitle: "Paragraph",
            taskBy: "Devank",
            taskDate: "30/07/2024"
        }
    ]
    return (
        <div className="pl-16">
            {
                data.map((item) => {
                    return (
                        <>
                            <div className="bg-purple-300 text-white font-extrabold p-2 w-">{
                                item.taskCategory
                            }</div>
                            <div className="grid grid-cols-1 md:grid-cols-3 bg-indigo-500">
                                <Task key={item.id} taskTitle={item.taskTitle} taskBy={item.taskBy} taskDate={item.taskDate} />
                            </div>
                        </>
                    )
                })
            }
        </div>
    );
}