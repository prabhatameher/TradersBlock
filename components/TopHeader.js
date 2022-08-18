import { useTheme } from 'next-themes'

const TopHeader = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div className="min-w-full flex flex-row justify-end my-2 items-center">
            <div>
                <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="bg-gray dark:bg-gray border px-2 py-1 rounded-md text-sm"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >Toggle Mode</button>
            </div>
            <div>
                <input type='text' className='bg-white border rounded-md' />
            </div>
            <div className='bg-gray-400 rounded-full px-2 py-1 mx-1'>U</div>
        </div>
    );
}

export default TopHeader;