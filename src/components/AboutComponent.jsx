'use client'
import Image from "next/image"

export default function AboutComponent() {
    return (
        <div className="aboutComponent mt-[50px]">
            <div className="container">
                <div className="box flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-14 items-center">

                    <div className="img relative w-full h-[300px] md:w-[590px] md:h-[590px]">
                        <Image
                            fill
                            alt="about"
                            src={'/images/about.png'}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>

                    <div className="text flex-1 flex flex-col gap-y-6 md:gap-y-[26px] text-sm md:text-lg px-2 md:px-0">
                        <div className="box">
                            <h3 className="leading-relaxed">
                                Albino kompaniyasi 2009-yildan buyon xorijning Vicalina, Torix, Sonifer va shu kabi 100ga yaqin brendlarning 1300 dan ortiq mahsulotlarni, yani oshxona anjomlari, chinni idishlar va elektr jixozlarini O'zbekiston bo'ylab yetkazib bermoqda.
                                Ayniqsa hozirgi kunda Germaniya sifati bilan ko'pgina davlatlarga tanilgan Vicalina brendining O'zbekistondagi yagona va katta dilerimiz. Vicalina asosan idish-tovoq (nerjaveyka va granit qoplamli idishlar), oshxona anjomlari va boshqa shunga o'xshash mahsulotlar bilan shug'ullanadi. Brend mahsulotlari orasida qozonlar, elektr bo'lmagan choynaklar, pishirish to'plamlari mavjud. Vicalina o'zining sifati va dizayni bilan mashhur.
                                Albino kompaniyasi O'zbekiston, Xitoy, Rossiya, Eron kabi davlatlardan olingan mahsulotlarni O'zbekiston bo'ylab istalgan tovarni istagan hajmda ta'minlab bera oladi.
                            </h3>
                        </div>
                        <button className="px-8 md:px-10 py-3 md:py-4 bg-customRed rounded-full w-max text-white font-semibold">
                            Bog’lanish
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}