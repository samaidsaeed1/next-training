import { format } from "date-fns";
import { get } from "lodash";
import Image from "next/image";

export default function Auction(props: any) {
    const { auction } = props;

    return (
        <div className="row mt-4">
        <div className="col-3 col-md-2 col-lg-2">
            <div className="d-flex justify-content-center align-content-center">
                <div className="w-100 h-100 text-center">
                    <a href="/">
                        <Image 
                        src={get(auction, "thumbnail", "")} 
                        alt={auction.title} 
                        height={200}
                        width={200}
                        />
                    </a>
                </div>
            </div>
        </div>
        <div className="col-9 col-md-6 col-lg-7">
            <h3 className="mt-0 mb-1 truncate-two-lines">
                <a href={auction.title}>
                    {auction.title}
                </a>
            </h3>
            <p className="mb-0">
                <a href={auction.seller}>
                    {auction.seller}
                </a>
            </p>
            <p className="mb-0">
                {auction.price}
            </p>
        </div>
        <div className="col-12 col-md-4 col-lg-3">
            <button type="button" className="d-block my-2 btn btn-primary">View Item</button>
        </div>
    </div>
    )
}