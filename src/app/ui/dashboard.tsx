import { BsPlus, BsFillLightningFill, BsGearFill, BsFiletypeHtml, BsWordpress } from 'react-icons/bs';

import { FaFire } from 'react-icons/fa';
import { Avatar } from './Avatar';
import Link from 'next/link';

// const SideIcons = (icons: any) => {
//     return (<div>{icons.icon}</div>);
// }

const Tryit = (data:any) => {
    return (
        <div className='w-full bg-purple-400 p-4 border-2 border-slate-400 rounded-md hover:bg-blue-200 hover:text-black focus:ring-1 outline-none'>
            {data.icon}
        </div>)
}

export const Dashboard = () => {
    return (
        <div className="fixed flex h-screen w-16 bg-green-500 flex-col">
            <Tryit icon={<Avatar>Devank</Avatar>} />
            <Link href={'pages/work-html'}><Tryit icon={<BsFiletypeHtml fontSize={"24px"} />} /></Link>
            <Link href={'pages/work-html'}><Tryit icon={<BsWordpress fontSize={"24px"} />} /></Link>
            <Tryit icon={<FaFire fontSize={'24px'} />} />
            <Tryit icon={<BsFillLightningFill fontSize={'24px'} />} />
            <Tryit icon={<BsGearFill fontSize={'24px'} />} />
            <Tryit icon={<FaFire fontSize={'24px'} />} />
        </div>
    );
}