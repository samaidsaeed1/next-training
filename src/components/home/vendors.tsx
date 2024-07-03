import { fetchPopularVendors } from "@/api/common";
import { get } from "lodash";
import Image from "next/image";

export default async function PopularVendors() {

  const vendors = await fetchPopularVendors();  

  return <>
  {
        vendors.map((vendor: any) => (
          <div className="row mb-3" key={`vendor-${vendor.id}`}>
             <div className="col-3 col-md-2 col-lg-2">
            <div className="d-flex justify-content-center align-content-center">
                <div className="w-100 h-100 text-center">
                    <a href="/">
                        <Image 
                        src={get(vendor, "avatar", "")} 
                        alt={vendor.name} 
                        height={200}
                        width={200}
                        />
                    </a>
                </div>
            </div>
        </div>
        <div className="col-9 col-md-6 col-lg-7">
            <h3 className="mt-0 mb-1 truncate-two-lines">
                <a href={vendor.name}>
                    {vendor.name}
                </a>
            </h3>
            <p className="mb-0">
                {vendor.location}
            </p>
        </div>
          </div>
        ))
      }
  </>
}