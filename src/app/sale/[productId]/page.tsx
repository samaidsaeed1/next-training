import { fetchSaleById, fetchUpcomingAuctions } from "@/api/common"
import BuyNow from "@/components/sale/buyNow";
import SaleSlider from "@/components/sale/saleImagesSlider";
import { cookies } from "next/headers";
import { Button } from "reactstrap";

export async function generateStaticParams() {
    const sales: any = await fetchUpcomingAuctions();
    return sales.map((sale: any) => ({
        productId: sale.id,
      }))
}

export default async function Sale(props: any) {
    const { params: { productId } } = props;
    const sale: any = await fetchSaleById(productId);
    const images = [
        sale.thumbnail,
        sale.image1,
        sale.image2,
        sale.image3
    ]
    const cookieStore = cookies();
    const isUKUser = cookieStore.get('isUserFromUK')?.value;

    return <div className="container mt-5">
        <div className="row">
            <div className="col-8">
                <SaleSlider items={images}/>
            </div>
            <div className="col-4">
            <h1>{sale.title}</h1>
            <p>Price: {sale.price}</p>
            <p>Sold By: {sale.seller}</p>
            <BuyNow isUKUser={isUKUser}/>
            </div>
        </div>
    </div>
}