import CategorySkeleton from "@/components/skeletons/CategorySelectorSkeleton";
import CouponBannerSkeleton from "@/components/skeletons/couponBannerSkeleton";

export default function Loading() {
  return (
    <div className="min-h-screen px-4">
      <CouponBannerSkeleton />
      <CategorySkeleton />
    </div>
  );
}
