import Image from 'next/image';
import DGlogo from "../public/DG-logo.svg";
import {LoadData} from "@/app/utils";
import Item from "@/app/item";

export default async function Home() {
    const URL = 'https://strapi.cherenkov.xyz/api/itv-pic-header-texts'

    const page = await LoadData(URL);

    return (
        <main
            className='flex items-center justify-center min-h-screen from-indigo-200 via-indigo-700 to-indigo-800 bg-gradient-to-br'>
            <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl'>
                <div className='max-w-md mx-auto space-y-6'>
                    <Image className='h-20' priority src={DGlogo} alt="Logo"/>
                </div>
                <div>
                    <Item page = { page } url = { URL }/>
                </div>
            </div>

        </main>
    );
}

