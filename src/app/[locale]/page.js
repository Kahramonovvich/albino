import AboutComponent from "@/components/AboutComponent";
import Header from "@/components/Header";
import Map from "@/components/Map";
import Partners from "@/components/Partners";
import StaticCommentsComponent from "@/components/StaticCommentsComponent";
import TopProducts from "@/components/TopProducts";
const BASE_URL = process.env.API_BASE_URL;

export default async function page({ params }) {

  const locale = await params?.locale;
  const langMap = { uz: 1, ru: 2 };
  const languageId = langMap[locale] || 1;
  const resProducts = await fetch(`${BASE_URL}/api/Products/GetAllProducts?languageId=${languageId}`, {
    next: { tags: ['products'] }
  });
  const text = await resProducts.text();
  let products;

  try {
    products = JSON.parse(text);
  } catch (e) {
    console.error('Ошибка парсинга JSON:', text);
    products = [];
  };

  return (
    <div className="home">
      <Header languageId={languageId} />
      <Partners />
      <AboutComponent languageId={languageId} />
      <TopProducts products={products} languageId={languageId} />
      <StaticCommentsComponent />
      <Map />
    </div>
  );
};