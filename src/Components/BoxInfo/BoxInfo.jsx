import React from 'react';

const BoxInfo = () => {
    return (
        <div className="text-gray-600 bg-white">
                <div className="shadow-xl">
                    <div className="flex justify-center">

                        <div className="shadow-md p-4 w-[200px] mx-auto lg:w-[200px] flex-col   items-center">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                <img className='w-[100px] h-[100px]' src='https://i.ibb.co/tDZrMSz/money.png' alt="" />
                            </h2>
                            <p className="leading-relaxed">Satisfaction</p>
                        </div>

                        <div className="shadow-md p-4 w-[200px] mx-auto lg:w-[200px] flex-col   items-center">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                <img className='h-[100px]' src='https://i.ibb.co/Vp0BQ49/service.png' alt="" />
                            </h2>
                            <p className="leading-relaxed">Subscribes</p>
                        </div>

                        <div className="shadow-md p-4 w-[200px] mx-auto lg:w-[200px] flex-col   items-center">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                <img className='w-[100px] h-[100px]' src='https://i.ibb.co/P6L0fXY/support.png'alt="" />
                            </h2>
                            <p className="leading-relaxed">Downloads</p>
                        </div>

                        <div className="shadow-md p-4 w-[200px] mx-auto lg:w-[200px] flex-col   items-center">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                <img className='w-[100px] h-[100px]' src='https://i.ibb.co/G0vZ82b/2973322.png' alt="" />
                            </h2>
                            <p className="leading-relaxed">Products</p>
                        </div>

                    </div>
                </div>
        </div>
    );
};

export default BoxInfo;