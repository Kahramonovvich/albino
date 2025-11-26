'use client'
import { Modal } from "@mui/material";
import Image from "next/image"
import { useState } from "react";
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';

const content = {
    uz: {
        text: `Albino kompaniyasi 2009-yildan buyon chet elning Beltop, Vicalina, Torix, Sonifer va shu kabi 100 ga yaqin brendlarning 1300 dan ortiq mahsulotlarni, ya’ni oshxona anjomlari, chinni idishlar va elektr jihozlarini O‘zbekiston bo‘ylab yetkazib bermoqda. Ayniqsa, hozirgi kunda Germaniya sifati bilan ko‘pgina davlatlarda tanilgan Vicalina brendining O‘zbekistondagi yagona va katta dillerimiz. Vicalina asosan idish-tovoq (nerjaveyka va granit qoplamli idishlar), oshxona anjomlari va boshqa shunga o‘xshash mahsulotlar bilan shug‘ullanadi. Brend mahsulotlari orasida qozonlar, elektr bo‘lmagan choynaklar, pishirish to‘plamlari mavjud. Vicalina o‘zining sifati va dizayni bilan mashhur. Shuningdek, bizning hamkor brendlarimiz orasida Beltop ham alohida o‘rin egallaydi. Beltop – bu zamonaviy hayot uchun mo‘ljallangan, yuqori sifatli kichik maishiy texnikalarni ishlab chiqaruvchi brend bo‘lib, uning mahsulotlari qulaylik, ishonchlilik va zamonaviy dizayn uyg‘unligini o‘zida mujassam etgan. Har bir Beltop mahsuloti uy bekalari va professional foydalanuvchilar uchun qulaylik va samaradorlikni ta’minlaydi. Yana bir hamkor brendimiz bu Albino.  Albino – chinni va shisha buyumlari bilan tanilgan, har bir detalda mukammallikni ko‘zlagan brenddir. Bizning mahsulotlarimiz zamonaviy dizayn, mustahkamlik va ekologik xavfsizlikni o‘zida mujassam etgan bo‘lib, sizning dasturxoningizga go‘zallik va qulaylik olib kiradi. Albino kompaniyasi O‘zbekiston, Xitoy, Rossiya, Eron kabi davlatlardan olingan mahsulotlarni O‘zbekiston bo‘ylab istalgan tovarni istagan hajmda ta’minlab bera oladi.`,
        button: "Bog’lanish"
    },
    ru: {
        text: `С 2009 года компания Albino поставляет по всему Узбекистану более 1300 товаров от почти 100 зарубежных брендов, включая кухонные принадлежности, фарфор и бытовую технику от Beltop, Vicalina, Torix, Sonifer и других.
        Особенно стоит отметить бренд Vicalina, известный во многих странах своим немецким качеством. Мы являемся единственным и крупнейшим официальным дилером Vicalina в Узбекистане. Основные продукты бренда — посуда из нержавеющей стали и с гранитным покрытием, кухонные наборы и сопутствующие товары. В ассортимент входят казаны, чайники (неэлектрические), комплекты для готовки. Продукция Vicalina славится своим качеством и дизайном.
        Компания Albino способна обеспечить поставки товаров из Узбекистана, Китая, России, Ирана в любых объёмах по всей территории страны.`,
        button: "Связаться"
    }
};

export default function AboutComponent({ languageId }) {
    const lang = languageId === 2 ? content.ru : content.uz;

    const [openNum, setOpenNum] = useState(false);

    const handleCloseNum = () => setOpenNum(false);

    return (
        <div className="aboutComponent mt-[50px]">
            <Modal
                open={openNum}
                onClose={handleCloseNum}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="box flex items-center w-3/4 md:w-auto gap-x-5 bg-white p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg">
                    <PhoneInTalkRoundedIcon />
                    <a
                        href="tel:+998555000098"
                        className='text-lg font-semibold'
                    >
                        +998 55 500 00 98
                    </a>
                </div>
            </Modal>
            <div className="container">
                <div className="box flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-14 items-center">
                    <div className="img relative w-full h-[300px] md:w-[590px] md:h-[590px] overflow-hidden rounded-lg">
                        <Image
                            fill
                            alt="about"
                            src={'/images/about.png'}
                            style={{ objectFit: 'contain' }}
                            unoptimized
                        />
                    </div>

                    <div className="text flex-1 flex flex-col gap-y-6 md:gap-y-[26px] text-sm md:text-lg px-2 md:px-0">
                        <div className="box whitespace-pre-line">
                            <h3 className="leading-relaxed">
                                {lang.text}
                            </h3>
                        </div>
                        <button
                            className="px-8 md:px-10 py-3 md:py-4 bg-customRed rounded-full w-max text-white font-semibold"
                            onClick={() => setOpenNum(true)}
                        >
                            {lang.button}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
};