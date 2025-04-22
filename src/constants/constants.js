export const navMenu = [
    {
        id: 1,
        name: 'QOZONLAR',
        img: '/images/6a751b6c-5fdf-49ff-a579-569f09927146_removalai_preview 1.png',
        nameRu: 'КАЗАНЫ'
    },
    {
        id: 2,
        name: 'SKAVAROTKALAR',
        img: '/images/image.png',
        nameRu: 'СКОВОРОДЫ'
    },
    {
        id: 3,
        name: 'PICHOQLAR',
        img: '/images/0b1d2b30-53ce-427e-8ba8-f8aa0c07d604_removalai_preview.png',
        nameRu: 'НОЖИ'
    },
    {
        id: 4,
        name: 'OSHXONA NABORLAR',
        img: '/images/bf28ba1f-8a63-40a4-b13e-a8a7043563a6_removalai_preview.png',
        nameRu: 'КУХОННЫЕ НАБОРЫ'
    },
    {
        id: 5,
        name: 'QOSHIQLAR',
        img: '/images/Removal-173.png',
        nameRu: 'ЛОЖКИ'
    },
    {
        id: 6,
        name: 'QOZON NABORLAR',
        img: '/images/3e7bd21f-49f7-4a75-8991-52fbce1c82d8_removalai_preview.png',
        nameRu: 'НАБОРЫ КАЗАНОВ'
    },
    {
        id: 7,
        name: 'KASTRULKALAR',
        img: '/images/77f0b30b-c80c-47d8-85af-5cad6c6fb1ce_removalai_preview.png',
        nameRu: 'КАСТРЮЛИ'
    },
    {
        id: 8,
        name: 'KASTRULKA NABORLAR',
        img: '/images/d0e72209-a575-4e6b-b491-205c49bbad48_removalai_preview.png',
        nameRu: 'НАБОРЫ КАСТРЮЛЬ'
    },
    {
        id: 9,
        name: 'KICHIK TURDAGI MAISHIY TEXNIKALAR',
        img: '/images/b4d960c6-7a30-4f52-867a-e05c9af37129_removalai_preview.png',
        nameRu: 'МЕЛКАЯ БЫТОВАЯ ТЕХНИКА'
    },
    {
        id: 10,
        name: 'MANTIQASQONLAR',
        img: '/images/cb6c3fc9-7b39-4253-8580-4af06b3f6b50_removalai_preview.png',
        nameRu: 'МАНТОВАРКИ'
    },
    {
        id: 11,
        name: 'BLINITSALAR',
        img: '/images/dfe31243-dc52-43c7-b65c-68f51569c285_removalai_preview.png',
        nameRu: 'БЛИННИЦЫ'
    }
].map(item => ({
    ...item,
    slug: `/catalog/${item.name.toLowerCase().replace(/\s+/g, '-')}`,
    slugRu: `/catalog/${item.nameRu.toLowerCase().replace(/\s+/g, '-')}`
}));

import img from '/public/images/prodImg.png'

export const products = [
    // QOZONLAR
    { id: 1, name: 'Choyan qora qozon 5L', category: 'QOZONLAR', tags: ['qozon', 'choyan'], brand: 'uzum', rating: { rate: 4.2, count: 12 }, img: img },
    { id: 2, name: 'Qozon Kukmara 8L', category: 'QOZONLAR', tags: ['kukmara'], brand: 'kukmara', rating: { rate: 4.5, count: 8 }, img: img },
    { id: 3, name: 'Texnomart qozon 6L', category: 'QOZONLAR', tags: ['texnomart'], brand: 'texnomart', rating: { rate: 4.0, count: 5 }, img: img },
    { id: 4, name: 'Qozon bosch alyumin', category: 'QOZONLAR', tags: ['bosch', 'alyum'], brand: 'bosch', rating: { rate: 3.9, count: 3 }, img: img },
    { id: 5, name: 'Uzum qozon premium', category: 'QOZONLAR', tags: ['premium'], brand: 'uzum', rating: { rate: 4.8, count: 20 }, img: img },

    // SKAVAROTKALAR
    { id: 6, name: 'Skavarotka tosh bilan', category: 'SKAVAROTKALAR', tags: ['tosh'], brand: 'texnomart', rating: { rate: 4.3, count: 7 }, img: img },
    { id: 7, name: 'Kukmara skavarotka 26cm', category: 'SKAVAROTKALAR', tags: ['kukmara'], brand: 'kukmara', rating: { rate: 4.7, count: 15 }, img: img },
    { id: 8, name: 'Uzum skavarotka non-stick', category: 'SKAVAROTKALAR', tags: ['non-stick'], brand: 'uzum', rating: { rate: 4.6, count: 11 }, img: img },
    { id: 9, name: 'Bosch skavarotka premium', category: 'SKAVAROTKALAR', tags: ['bosch'], brand: 'bosch', rating: { rate: 4.4, count: 9 }, img: img },
    { id: 10, name: 'Skavarotka alyumin', category: 'SKAVAROTKALAR', tags: ['alyum'], brand: 'texnomart', rating: { rate: 4.0, count: 6 }, img: img },

    // PICHOQLAR
    { id: 11, name: 'Pichoq to‘plami 5 dona', category: 'PICHOQLAR', tags: ['pichoq'], brand: 'bosch', rating: { rate: 4.5, count: 18 }, img: img },
    { id: 12, name: 'Kukmara oshxona pichoqlari', category: 'PICHOQLAR', tags: ['kukmara'], brand: 'kukmara', rating: { rate: 4.2, count: 10 }, img: img },
    { id: 13, name: 'Pichoq Classic', category: 'PICHOQLAR', tags: ['classic'], brand: 'uzum', rating: { rate: 3.9, count: 4 }, img: img },
    { id: 14, name: 'Texnomart professional', category: 'PICHOQLAR', tags: ['professional'], brand: 'texnomart', rating: { rate: 4.1, count: 7 }, img: img },
    { id: 15, name: 'Uzum pichoqlar to‘plami', category: 'PICHOQLAR', tags: ['to‘plam'], brand: 'uzum', rating: { rate: 4.3, count: 13 }, img: img },

    // OSHXONA NABORLAR
    { id: 16, name: 'Oshxona nabori 10 dona', category: 'OSHXONA NABORLAR', tags: ['nabor'], brand: 'texnomart', rating: { rate: 4.6, count: 14 }, img: img },
    { id: 17, name: 'Uzum oshxona seti', category: 'OSHXONA NABORLAR', tags: ['set'], brand: 'uzum', rating: { rate: 4.4, count: 8 }, img: img },
    { id: 18, name: 'Kukmara idish nabori', category: 'OSHXONA NABORLAR', tags: ['idish'], brand: 'kukmara', rating: { rate: 4.5, count: 6 }, img: img },
    { id: 19, name: 'Oshxona professional', category: 'OSHXONA NABORLAR', tags: ['professional'], brand: 'bosch', rating: { rate: 4.2, count: 4 }, img: img },
    { id: 20, name: 'Bosch universal nabor', category: 'OSHXONA NABORLAR', tags: ['universal'], brand: 'bosch', rating: { rate: 4.7, count: 9 }, img: img },

    // QOSHIQLAR
    { id: 21, name: 'Qoshiqlar nabori', category: 'QOSHIQLAR', tags: ['qoshiq'], brand: 'uzum', rating: { rate: 4.3, count: 11 }, img: img },
    { id: 22, name: 'Texnomart qoshiq seti', category: 'QOSHIQLAR', tags: ['set'], brand: 'texnomart', rating: { rate: 4.1, count: 6 }, img: img },
    { id: 23, name: 'Kukmara qoshiq 6 dona', category: 'QOSHIQLAR', tags: ['kukmara'], brand: 'kukmara', rating: { rate: 4.4, count: 7 }, img: img },
    { id: 24, name: 'Bosch qoshiq premium', category: 'QOSHIQLAR', tags: ['premium'], brand: 'bosch', rating: { rate: 4.5, count: 5 }, img: img },
    { id: 25, name: 'Uzum qoshiqlar classic', category: 'QOSHIQLAR', tags: ['classic'], brand: 'uzum', rating: { rate: 4.6, count: 10 }, img: img },

    // QOZON NABORLAR
    { id: 26, name: 'Qozon nabori 3 dona', category: 'QOZON NABORLAR', tags: ['qozon', 'nabor'], brand: 'uzum', rating: { rate: 4.6, count: 10 }, img: img },
    { id: 27, name: 'Kukmara qozonlar seti', category: 'QOZON NABORLAR', tags: ['kukmara'], brand: 'kukmara', rating: { rate: 4.7, count: 7 }, img: img },
    { id: 28, name: 'Texnomart qozon to‘plami', category: 'QOZON NABORLAR', tags: ['to‘plam'], brand: 'texnomart', rating: { rate: 4.3, count: 6 }, img: img },
    { id: 29, name: 'Bosch qozon nabor', category: 'QOZON NABORLAR', tags: ['bosch'], brand: 'bosch', rating: { rate: 4.2, count: 4 }, img: img },
    { id: 30, name: 'Uzum premium qozon set', category: 'QOZON NABORLAR', tags: ['premium'], brand: 'uzum', rating: { rate: 4.8, count: 12 }, img: img },

    // KASTRULKALAR
    { id: 31, name: 'Kukmara kastrulka 3L', category: 'KASTRULKALAR', tags: ['kukmara'], brand: 'kukmara', rating: { rate: 4.4, count: 6 }, img: img },
    { id: 32, name: 'Uzum kastrulka mini', category: 'KASTRULKALAR', tags: ['mini'], brand: 'uzum', rating: { rate: 4.1, count: 5 }, img: img },
    { id: 33, name: 'Texnomart kastrulka 5L', category: 'KASTRULKALAR', tags: ['5L'], brand: 'texnomart', rating: { rate: 4.3, count: 7 }, img: img },
    { id: 34, name: 'Bosch kastrulka classic', category: 'KASTRULKALAR', tags: ['classic'], brand: 'bosch', rating: { rate: 4.0, count: 4 }, img: img },
    { id: 35, name: 'Uzum premium kastrulka', category: 'KASTRULKALAR', tags: ['premium'], brand: 'uzum', rating: { rate: 4.6, count: 9 }, img: img },

    // KASTRULKA NABORLAR
    { id: 36, name: 'Kastrulka nabori 6 dona', category: 'KASTRULKA NABORLAR', tags: ['nabor'], brand: 'texnomart', rating: { rate: 4.2, count: 6 }, img: img },
    { id: 37, name: 'Bosch kastrulka seti', category: 'KASTRULKA NABORLAR', tags: ['set'], brand: 'bosch', rating: { rate: 4.5, count: 5 }, img: img },
    { id: 38, name: 'Kukmara kastrulka to‘plam', category: 'KASTRULKA NABORLAR', tags: ['to‘plam'], brand: 'kukmara', rating: { rate: 4.3, count: 4 }, img: img },
    { id: 39, name: 'Uzum kastrulka universal', category: 'KASTRULKA NABORLAR', tags: ['universal'], brand: 'uzum', rating: { rate: 4.7, count: 8 }, img: img },
    { id: 40, name: 'Texnomart kastrulka premium', category: 'KASTRULKA NABORLAR', tags: ['premium'], brand: 'texnomart', rating: { rate: 4.4, count: 6 }, img: img },

    // KICHIK TURDAGI MAISHIY TEXNIKALAR
    { id: 41, name: 'Blender Bosch mini', category: 'KICHIK TURDAGI MAISHIY TEXNIKALAR', tags: ['blender'], brand: 'bosch', rating: { rate: 4.6, count: 9 }, img: img },
    { id: 42, name: 'Texnomart elektr choynak', category: 'KICHIK TURDAGI MAISHIY TEXNIKALAR', tags: ['choynak'], brand: 'texnomart', rating: { rate: 4.3, count: 7 }, img: img },
    { id: 43, name: 'Uzum toster klassik', category: 'KICHIK TURDAGI MAISHIY TEXNIKALAR', tags: ['toster'], brand: 'uzum', rating: { rate: 4.2, count: 6 }, img: img },
    { id: 44, name: 'Kukmara elektr kofevarka', category: 'KICHIK TURDAGI MAISHIY TEXNIKALAR', tags: ['kofe'], brand: 'kukmara', rating: { rate: 4.1, count: 4 }, img: img },
    { id: 45, name: 'Bosch mikser kompakt', category: 'KICHIK TURDAGI MAISHIY TEXNIKALAR', tags: ['mikser'], brand: 'bosch', rating: { rate: 4.7, count: 10 }, img: img },

    // MANTIQASQONLAR
    { id: 46, name: 'Mantikasqon 3 qavatli', category: 'MANTIQASQONLAR', tags: ['3 qavat'], brand: 'texnomart', rating: { rate: 4.5, count: 7 }, img: img },
    { id: 47, name: 'Kukmara mantovar 2 qavat', category: 'MANTIQASQONLAR', tags: ['kukmara'], brand: 'kukmara', rating: { rate: 4.4, count: 5 }, img: img },
    { id: 48, name: 'Uzum manti pishirgich', category: 'MANTIQASQONLAR', tags: ['manti'], brand: 'uzum', rating: { rate: 4.3, count: 4 }, img: img },
    { id: 49, name: 'Bosch manti nabori', category: 'MANTIQASQONLAR', tags: ['bosch'], brand: 'bosch', rating: { rate: 4.6, count: 6 }, img: img },
    { id: 50, name: 'Texnomart mantovar mini', category: 'MANTIQASQONLAR', tags: ['mini'], brand: 'texnomart', rating: { rate: 4.2, count: 3 }, img: img },

    // BLINITSALAR
    { id: 51, name: 'Blinitsa elektr Uzum', category: 'BLINITSALAR', tags: ['elektr'], brand: 'uzum', rating: { rate: 4.7, count: 9 }, img: img },
    { id: 52, name: 'Texnomart blinnitsa klassik', category: 'BLINITSALAR', tags: ['klassik'], brand: 'texnomart', rating: { rate: 4.3, count: 5 }, img: img },
    { id: 53, name: 'Kukmara blinitsa tosh', category: 'BLINITSALAR', tags: ['tosh'], brand: 'kukmara', rating: { rate: 4.5, count: 6 }, img: img },
    { id: 54, name: 'Bosch blinnitsa premium', category: 'BLINITSALAR', tags: ['premium'], brand: 'bosch', rating: { rate: 4.6, count: 7 }, img: img },
    { id: 55, name: 'Uzum mini blinnitsa', category: 'BLINITSALAR', tags: ['mini'], brand: 'uzum', rating: { rate: 4.4, count: 5 }, img: img },
];

export const comments = [
    {
        id: 1,
        userName: 'Laylo A.',
        comment: '"VICALINA mahsulotlaridan juda mamnunman! Oshxonam uchun sotib olgan idish-tovoqlar sifati yuqori va juda qulay. Taom pishirish ancha osonlashdi!"',
        img: '/images/us1.png',
    },
    {
        id: 2,
        userName: 'Olimjon R.',
        comment: '"Chindan ham ishonchli brend! Skovorodkalari mustahkam va uzoq vaqt xizmat qiladi. Pishirish jarayonida hech qanday muammo yo‘q, tavsiya qilaman!"',
        img: '/images/us2.png',
    },
    {
        id: 3,
        userName: 'Madina S.',
        comment: '"VICALINA mahsulotlarini ishlatib, oshxonada professional oshpazdek his qilyapman. Dizayni zamonaviy, sifati esa juda zo‘r! Albatta yana xarid qilaman."',
        img: '/images/us3.png',
    },
    {
        id: 4,
        userName: 'Javohir T.',
        comment: '"Men VICALINA’dan bir nechta pichoq to‘plamini oldim — juda o‘tkir va qulay. Har kuni ishlataman, sifati haqiqatan ham a’lo!"',
        img: '/images/us4.png',
    },
    {
        id: 5,
        userName: 'Dilnoza K.',
        comment: '"Qozonlarini sotib oldim, og‘ir, lekin shu tufayli issiqlikni zo‘r ushlab turadi. Taomlar mazali chiqadi, oilam ham mamnun!"',
        img: '/images/us5.png',
    },
    {
        id: 6,
        userName: 'Rustam B.',
        comment: '"Avval boshqa brendlar bilan ko‘p qiynalganman, lekin VICALINA bilan oshxonadagi ishlar zavqqa aylangan. Juda minnatdorman!"',
        img: '/images/us6.png',
    },
];