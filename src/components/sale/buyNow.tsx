"use client"

import { Button } from "reactstrap"
import { BuyNowWrapper } from "./styles"
import { cookies } from "next/headers"

export default function BuyNow(props: any) {
    const { isUKUser } = props;
    return <BuyNowWrapper>
    <Button color="primary" outline>Buy Now</Button>
    <Button color="secondary">Add To Imaginary {isUKUser === 'true' ? 'Bucket' : 'Cart'}</Button>
    </BuyNowWrapper>
}