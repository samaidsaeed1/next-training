import HomepageSlider from "@/components/home/slider";
import Auctions from "@/components/home/auctionsContainer";
import { Suspense } from "react";
import PopularVendors from "@/components/home/vendors";

export default async function Home({
  params,
  searchParams,
}: any) {

  return (
     <section className="mt-3 p-5">
      <HomepageSlider width='max'/>
      <h1 className="mt-2">Upcoming Sales</h1>
      <Suspense fallback={<p>Loading Sales</p>}>
      <Auctions params={params} searchParams={searchParams}/>
      </Suspense>
      <h1 className="mt-2">
        Popular Vendors
      </h1>
      <Suspense fallback={<p>Loading popular vendors</p>}>
        <PopularVendors />
      </Suspense>
    </section>
  );
}
