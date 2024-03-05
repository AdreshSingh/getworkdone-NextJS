import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';

import { FaFire } from 'react-icons/fa';
import { Avatar } from './Avatar';

// const SideIcons = (icons: any) => {
//     return (<div>{icons.icon}</div>);
// }

const Tryit = (icon:any) => {
    return (
        <div className='w-full bg-purple-400 p-4 border-2 border-slate-400 rounded-md hover:bg-blue-200 hover:text-black focus:ring-1 outline-none'>
            {icon.icons}
        </div>)
}

export const Dashboard = () => {
    return (
        <div className="fixed flex h-screen w-16 bg-green-500 flex-col">
            <Tryit icon={<Avatar>Devank</Avatar>} />
            <Tryit icon={<FaFire fontSize={'24px'} />} />
            <Tryit icon={<BsFillLightningFill fontSize={'24px'} />} />
            <Tryit icon={<BsGearFill fontSize={'24px'} />} />
            <Tryit icon={<FaFire fontSize={'24px'} />} />
        </div>
    );
}