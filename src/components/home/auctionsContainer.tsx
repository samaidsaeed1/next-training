import { fetchUpcomingAuctions } from "@/api/common";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Auctions from "./auctions";
import { get } from "lodash";
import { getQueryStringFromParams } from "@/utils";

export default async function AuctionsContainer(props: any) {
  const query = getQueryStringFromParams(props.searchParams);
  const auctions = await fetchUpcomingAuctions(query);

  return (
      <Suspense fallback={<Loading />}>
      <Auctions auctions={auctions}/>
      </Suspense>
  );
}