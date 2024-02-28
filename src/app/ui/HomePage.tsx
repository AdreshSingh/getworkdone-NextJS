interface task {
    taskCategory: String,
    taskTitle: String,
    taskBy: String,
    taskDate: String,
}

export const HomePage = () => {
    const data: task[] = [
        {
            taskCategory: "MS OFFICE",
            taskTitle: "Paragraph",
            taskBy: "Devank",
            taskDate: "29/07/2024"
        },
        {
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
                            <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="flex flex-col bg-orange-400  p-3 m-1 hover:border-2 border-green-400 rounded-lg w-50 ">
                                <div className="font-extrabold border-2 border-slate-400 p-8 rounded-md font-extrabolder text-2xl text-center text-black">{item.taskTitle}</div>
                                <div className="flex flex-row pt-2 justify-around">
                                    <div className="text-sm">{item.taskBy}</div>
                                    <div className="pl-2 text-sm ">{item.taskDate}</div>
                                </div>
                            </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    );
}