import React from 'react';
import ImageDaiSan from '../../assets/daisan.png';
import ImageHSBC from '../../assets/hsbc.png';
import ImagePetroLimex from '../../assets/petrolimex.webp';
import ImageSHB from '../../assets/shb.png';
import ImageSunWell from '../../assets/sunwell.webp';
import ImageTechComBank from '../../assets/techcombank.webp';

export default function HeaderHome3() {
  return (
    <div>
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl flex justify-center items-center p-4 pb-8 mx-auto motion-preset-blur-right ">
                <div className="grid grid-cols-3 gap-12 sm:gap-16 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                    <a href="#" className="flex items-center justify-center">
                        <img src={ImageDaiSan} alt="DaiSan" className="h-8 md:h-16 hover:text-gray-900 dark:hover:text-white" />
                    </a>
                    <a href="#" className="flex items-center justify-center">
                        <img src={ImageHSBC} alt="HSBC" className="h-8 md:h-16 hover:text-gray-900 dark:hover:text-white" />
                    </a>
                    <a href="#" className="flex items-center justify-center">
                        <img src={ImagePetroLimex} alt="PetroLimex" className="h-8 md:h-16 hover:text-gray-900 dark:hover:text-white" />
                    </a>
                    <a href="#" className="flex items-center justify-center">
                        <img src={ImageSHB} alt="SHB" className="h-8 md:h-16 hover:text-gray-900 dark:hover:text-white" />
                    </a>
                    <a href="#" className="flex items-center justify-center">
                        <img src={ImageSunWell} alt="SunWell" className="h-8 md:h-16 hover:text-gray-900 dark:hover:text-white" />
                    </a>
                    <a href="#" className="flex items-center justify-center">
                        <img src={ImageTechComBank} alt="TechComBank" className="h-8 md:h-16 hover:text-gray-900 dark:hover:text-white" />
                    </a>
                </div>
            </div>
        </section>
    </div>
  );
}
