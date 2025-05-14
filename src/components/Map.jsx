'use client'
import Image from "next/image";
import Vector from '@icons/Vector.svg'
import ShareIcon from '@icons/ri_share-line.svg'
import { Rating } from "@mui/material";

const address = [
    {
        name: 'Toshkent',
        icon1: <Vector />,
        icon2: <ShareIcon />,
        address: 'Namangan vil, Kosonsoy 34-A uy'
    },
    {
        name: 'Andijon',
        icon1: <Vector />,
        icon2: <ShareIcon />,
        address: 'Namangan vil, Kosonsoy 34-A uy'
    },
    {
        name: 'Farg’ona',
        icon1: <Vector />,
        icon2: <ShareIcon />,
        address: 'Namangan vil, Kosonsoy 34-A uy'
    },
    {
        name: 'Samarqand',
        icon1: <Vector />,
        icon2: <ShareIcon />,
        address: 'Namangan vil, Kosonsoy 34-A uy'
    },
];

export default function Map({ languageId }) {
    return (
        <div className="map mt-[50px]">
            <div className="container">
                <h3 className="font-semibold text-4xl mb-[50px]">
                    Filial
                </h3>
                <div className="box flex items-center justify-between gap-x-40">
                    <div className="left flex-1">
                        {address.map((item) => (
                            <div key={item.name} className="box flex justify-between border-b pb-5 mt-[22px] first-of-type:mt-0">
                                <div className="box flex flex-col">
                                    <p className="text-customRed text-2xl">
                                        <span className="font-medium">Albino,</span> {item.name}
                                    </p>
                                    <div className="box flex items-center gap-x-1 my-[2px]">
                                        <p className="font-medium text-[#0000004F]">5.0</p>
                                        <Rating name="read-only" value={5} readOnly />
                                    </div>
                                    <p className="text-xl text-[#00000082]">
                                        {item.address}
                                    </p>
                                </div>
                                <div className="box flex flex-col gap-y-2.5">
                                    <div className="box bg-customRed w-10 h-10 rounded-full flex items-center justify-center">
                                        {item.icon1}
                                    </div>
                                    <div className="box bg-customRed w-10 h-10 rounded-full flex items-center justify-center">
                                        {item.icon2}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="img relative w-[645px] h-[510px] md:block hidden">
                        <Image
                            fill
                            src={'/images/map.png'}
                            alt="map"
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};