import Link from 'next/link'
import {BiPowerOff} from 'react-icons/bi'
export const NavBar=()=>{
    const user= null;
    return(
        <div className="grid grid-cols-2 place-content-center p-7">
                <h1 className='text-center text-4xl'>GetWorkDone</h1>
                <p className="flex flex-row justify-end ml-10">
                    {
                        user ===null ? <Link href={'/pages/signup'} className=' text-red-500 ring-1 ring-red-500 hover:ring-green-400 rounded-3xl duration-75 transition-all'>
                        <BiPowerOff fontSize="26px" />
                        </Link>
                        :
                        <Link href={'/pages/login'} className='hover:text-green-300 text-red-500 ring-1 ring-red-500 hover:ring-green-400 rounded-3xl duration-75 transition-all'>
                    <BiPowerOff fontSize="26px" />
                    </Link>
                    }
                </p>
        </div>
    )
}