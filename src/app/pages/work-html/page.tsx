import { Task, task } from "../../ui/task";

export default  () => {
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