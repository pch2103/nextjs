import Image from 'next/image';
import DGlogo from "../public/DG-logo.svg";
export default function Home() {
    return (
        <main
            className='flex items-center justify-center min-h-screen from-indigo-200 via-indigo-700 to-indigo-800 bg-gradient-to-br'>
            <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl'>
                <div className='max-w-md mx-auto space-y-6'>
                    <Image className='h-24' priority src={DGlogo} alt="Logo" />
                </div>
            </div>
        </main>
    );
}
