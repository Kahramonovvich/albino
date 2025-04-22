'use client'
import Image from "next/image"
import CheckIcon from '@icons/check 1.svg'

export default function AboutComponent() {
    return (
        <div className="aboutComponent mt-[50px]">
            <div className="container">
                <div className="box flex gap-x-14 items-center">
                    <div className="img relative w-[590px] h-[590px]">
                        <Image
                            fill
                            alt="about"
                            src={'/images/about.png'}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <div className="text flex-1 flex flex-col gap-y-[26px]">
                        <h2 className="font-semibold text-[40px] leading-tight">
                            100% Trusted
                            <br />
                            Organic Food Store
                        </h2>
                        <div className="box">
                            <div className="flex gap-x-3">
                                <div className="box flex items-center justify-center w-6 h-6 bg-customRed rounded-full">
                                    <CheckIcon />
                                </div>
                                <div className="box flex-1">
                                    <p className="font-medium text-lg leading-normal">Healthy & natural food for lovers of healthy food.</p>
                                    <p className="text-sm leading-normal text-[#808080] mt-2.5">
                                        Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="flex gap-x-3">
                                <div className="box flex items-center justify-center w-6 h-6 bg-customRed rounded-full">
                                    <CheckIcon />
                                </div>
                                <div className="box flex-1">
                                    <p className="font-medium text-lg leading-normal">Healthy & natural food for lovers of healthy food.</p>
                                    <p className="text-sm leading-normal text-[#808080] mt-2.5">
                                        Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="px-10 py-4 bg-customRed rounded-full w-max text-white font-semibold">
                            Bog’lanish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
