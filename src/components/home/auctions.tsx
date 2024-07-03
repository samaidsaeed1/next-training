"use client"
import Auction from "@/components/home/auction";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, ButtonGroup, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { PaginationWrapper } from "./styles";
import SortAndFilter from "./sortAndFilter";
import { useState } from "react";

const SCROLL_CONFIG = {scroll: false};

export default function Auctions(props: any) {

  const router = useRouter();
  const searchParams = useSearchParams();
  const [sortOrder, setSortOrder] = useState(searchParams.get('order') || 'desc')
  const sortBy = searchParams.get('sortBy');
  let page = Number(searchParams.get('page'));
  if (page === 0) page = 1;
  const isDataAvailable = props.auctions.length > 0

  const handleNextPage = (nextPage: number) => {
    let newParams = `page=${nextPage}`;
    if(nextPage > 1 && searchParams.get('page')) {
      newParams = searchParams.toString().replace(`page=${page}`, `page=${nextPage}`)
    }
    router.replace(`/?${newParams}`, SCROLL_CONFIG);
  }

  const handleSort = (key: string) => {
    router.replace(`/?page=${page}&sortBy=${key}&order=${sortOrder}`, SCROLL_CONFIG);
  }

  const onChangeOrder = (value: string) => {
    if(sortBy) {
      router.replace(`/?page=${page}&sortBy=${sortBy}&order=${value}`, SCROLL_CONFIG);
    }
    setSortOrder(value)
  }

  const handleSearch = (keyword: string) => {
    router.replace(`/?filter=${keyword}`, SCROLL_CONFIG);
  }

  return <>
  <div className="row">
    <div className="col-3 col-md-3">
      <SortAndFilter 
        sortBy={sortBy} 
        sortOrder={sortOrder} 
        handleSort={handleSort} 
        setSortOrder={onChangeOrder}
        handleSearch={handleSearch} />
    </div>
    <div className="col-9 col-md-9">
    {
        isDataAvailable ? props.auctions.map((auction: any) => (
          <Auction auction={auction} key={auction.ref}/>
        )) : <p>No Sales Available</p>
      }
    {
      isDataAvailable && <PaginationWrapper>
      <Pagination className="mt-3">
        {
          [1,2,3,4,5].map((num: number) => (
            <PaginationItem key={num} active={num === page}>
              <PaginationLink onClick={() => handleNextPage(num)}>
                {num}
              </PaginationLink>
            </PaginationItem>
          ))
        }
      </Pagination>
      </PaginationWrapper>
    }
    </div>
  </div>
  </>
}