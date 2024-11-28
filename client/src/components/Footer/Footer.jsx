import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
            <div className="w-full flex justify-center p-4">
                <hr className=" border-gray-200  dark:border-gray-700 " />
                <span className="block text-xs text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024 
                    <a 
                        href="https://datxenngay.com" 
                        className="hover:underline"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        datxenngay.com
                    </a>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}
