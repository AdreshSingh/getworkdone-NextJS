import { Task, task } from "../../ui/task";

export default function  Page(){
    const data: task[] = [
        {
            id: 1,
            taskCategory: "HTML",
            taskTitle: "Simple Page",
            taskBy: "Devank",
            taskDate: "17/04/2024"
        },
        {
            id: 2,
            taskCategory: "HTML",
            taskTitle: "Simple Page-2",
            taskBy: "Devank",
            taskDate: "17/04/2024"
        }
    ]
    return (
        <div className="pl-16">
            {
 data.map((item) => {
    return (
            <>
         <div key={item.id} className="bg-purple-300 text-white font-extrabold p-2 w-">
            {item.taskCategory}</div>
            <div className="grid grid-cols-1 md:grid-cols-3 bg-indigo-500">
            <Task key={item.id} taskTitle={item.taskTitle} taskBy={item.taskBy} taskDate={item.taskDate} />
            </div>
            </>)
            })
            }
        </div>
    );
}