import Link from 'next/link'
import {BiPowerOff} from 'react-icons/bi'
export const NavBar=()=>{
    return(
        <div className="grid grid-cols-2 place-content-center p-7">
                <h1 className='text-center'>GetWorkDone</h1>
                <p className="flex flex-row justify-end ml-10">
                    <Link href={'/pages/login/login'}>
                    <BiPowerOff fontSize="26px" />
                    </Link>
                </p>
        </div>
    )
}