import Navbar from '../components/Navbar';
export default function Home() {
    return (
        <>
            <Navbar />
            <section className="z-30 mt-44">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 z-10 relative lg:text-center text-left">
                    <a href="#" className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-purple-700 bg-purple-100 rounded-full dark:bg-purple-900 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800">
                        <span className="text-xs bg-purple-600 rounded-full text-white px-4 py-1.5 me-3">New</span> 
                        <span className="text-sm font-medium">Check out our new features!</span> 
                        <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                    </a>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Transform Your Business with Powerful Web Solutions</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">At SoraWeb, we create innovative websites that help businesses grow and reach a wider audience online.</p>
                    <div className="flex justify-left lg:justify-center  gap-3">
                        <button type="button" className="px-6 py-3 text-xl font-medium text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-xl text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Order Now !</button>
                        <button type="button" className="px-6 py-3 flex gap-3 text-xl font-medium text-gray-900 focus:outline-none rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 items-center">
                            <svg className="w-6 h-6 text-gray-400 hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 18V6l8 6-8 6Z"/>
                            </svg>
                            Who Are We?
                        </button>
                    </div>
                </div>
                <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            </section>
        </>
    );
}
