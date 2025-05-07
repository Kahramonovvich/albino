'use client'
import Image from "next/image"

const content = {
    uz: {
        text: `Albino kompaniyasi 2009-yildan buyon xorijning Vicalina, Torix, Sonifer va shu kabi 100ga yaqin brendlarning 1300 dan ortiq mahsulotlarni, yani oshxona anjomlari, chinni idishlar va elektr jixozlarini O'zbekiston bo'ylab yetkazib bermoqda.
        Ayniqsa hozirgi kunda Germaniya sifati bilan ko'pgina davlatlarga tanilgan Vicalina brendining O'zbekistondagi yagona va katta dilerimiz. Vicalina asosan idish-tovoq (nerjaveyka va granit qoplamli idishlar), oshxona anjomlari va boshqa shunga o'xshash mahsulotlar bilan shug'ullanadi. Brend mahsulotlari orasida qozonlar, elektr bo'lmagan choynaklar, pishirish to'plamlari mavjud. Vicalina o'zining sifati va dizayni bilan mashhur.
        Albino kompaniyasi O'zbekiston, Xitoy, Rossiya, Eron kabi davlatlardan olingan mahsulotlarni O'zbekiston bo'ylab istalgan tovarni istagan hajmda ta'minlab bera oladi.`,
        button: "Bog’lanish"
    },
    ru: {
        text: `С 2009 года компания Albino поставляет по всему Узбекистану более 1300 товаров от почти 100 зарубежных брендов, включая кухонные принадлежности, фарфор и бытовую технику от Vicalina, Torix, Sonifer и других.
        Особенно стоит отметить бренд Vicalina, известный во многих странах своим немецким качеством. Мы являемся единственным и крупнейшим официальным дилером Vicalina в Узбекистане. Основные продукты бренда — посуда из нержавеющей стали и с гранитным покрытием, кухонные наборы и сопутствующие товары. В ассортимент входят казаны, чайники (неэлектрические), комплекты для готовки. Продукция Vicalina славится своим качеством и дизайном.
        Компания Albino способна обеспечить поставки товаров из Узбекистана, Китая, России, Ирана в любых объёмах по всей территории страны.`,
        button: "Связаться"
    }
};

export default function AboutComponent({ languageId }) {
    const lang = languageId === 2 ? content.ru : content.uz;

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
                        <div className="box whitespace-pre-line">
                            <h3 className="leading-relaxed">
                                {lang.text}
                            </h3>
                        </div>
                        <button className="px-8 md:px-10 py-3 md:py-4 bg-customRed rounded-full w-max text-white font-semibold">
                            {lang.button}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
};