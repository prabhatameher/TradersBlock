import Link from "next/link";
import { useRouter } from 'next/router'

const LeftNav = () => {
    const router = useRouter()
    return (
        <div className="basis-1/6 text-left bg-blue-800 dark:bg-gray min-h-full">
            <div className='text-center py-5'>
                <h2 className='text-2xl text-white'>Traders.Block</h2>
            </div>
            <hr />
            <div className='flex flex-col ml-5 my-3'>
                <div  className={router.asPath==='/dashboard' ? 'bg-white  text-blue-900 py-2 px-2' : 'py-2 px-2 text-white'}>
                    <Link href='/dashboard' >
                        <a>Dashboard</a>
                    </Link>
                </div>
                <div className={router.asPath==='/assets' ? 'bg-white  text-blue-900 py-2 px-2' : 'py-2 px-2 text-white'}>
                    <Link href='/assets' >
                        <a>Assests</a>
                    </Link>
                </div>
                <div className={router.asPath==='/transaction-hall' ? 'bg-white  text-blue-900 py-2 px-2' : 'py-2 px-2 text-white'}>
                    <Link href='/transaction-hall' >
                        <a>Trasnsaction Hall</a>
                    </Link>
                </div>
                <div className={router.asPath==='/personal-info' ? 'bg-white  text-blue-900 py-2 px-2' : 'py-2 px-2 text-white'}>
                    <Link href='/presonal-info' >
                        <a>Personal Info</a>
                    </Link>
                </div>
                <div className={router.asPath==='/kyc' ? 'bg-white  text-blue-900 py-2 px-2' : 'py-2 px-2 text-white'}>
                    <Link href='/kyc' >
                        <a>KYC</a>
                    </Link>
                </div>
                <div className={router.asPath==='/myteam' ? 'bg-white  text-blue-900 py-2 px-2' : 'py-2 px-2 text-white'}>
                    <Link href='/myteam' >
                        <a>Myteam</a>
                    </Link>
                </div>
                <div className={router.asPath==='/settings' ? 'bg-white  text-blue-900 py-2 px-2' : 'py-2 px-2 text-white'}>
                    <Link href='/settings' >
                        <a>Settings</a>
                    </Link>
                </div>
            </div>
            <hr />
            <div className='mx-10 my-3 text-white'>
                <h2>Logout</h2>
            </div>
        </div>
    );
}

export default LeftNav;