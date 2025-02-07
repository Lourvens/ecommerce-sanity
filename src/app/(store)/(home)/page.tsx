import ProductCard from "@/app/(store)/(home)/components/card";
import { getAllProducts } from "@/lib/products/getAllProducts";
import CouponBanner from "./components/couponBanner";
import CategorySelector from "./components/categorySelector";

export default async function Home() {
  const products = await getAllProducts();
  
  // const couponCode = await getAccessibleCouponCode()

  return (
    <div className="px-6">
      <CouponBanner />
      <div>
        <CategorySelector />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
