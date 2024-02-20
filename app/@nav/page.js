import React from 'react';
import {navbar} from "../_data/_data.json"
import Item from "./item"
import logo from "@/public/DG-logo.svg";
import Image from "next/image";
const Nav = (props) => {

    return (
            <nav
                className="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-white shadow-md border-slate-500  transition duration-700 ease-out"
            >
                <div className="flex justify-between p-4">
                    <Image className='h-12' priority src={logo} alt="Logo"/>
                    <div className="flex items-center space-x-4 text-lg font-semibold tracking-tight">

                        {(navbar.data !== null || true) ?
                            navbar.data.map(_ => (
                                <div key={_.id}>
                                    <Item name = {_.name}/>
                                </div>
                        )):<></>}
                    </div>
                    <div className="flex items-center space-x-4 text-lg font-semibold tracking-tight">
                        <button
                            className="px-6 py-2 text-black transition duration-700 ease-out bg-white border border-black rounded-lg hover:bg-black hover:border hover:text-white"
                        >Sign in
                        </button
                        >
                        <button
                            className="px-6 py-2 text-white transition duration-500 ease-out bg-blue-700 rounded-lg hover:bg-blue-800 hover:ease-in hover:underline"
                        >Sign up
                        </button
                        >
                    </div>
                </div>
            </nav>
    );
}
export default Nav;