import Link from "next/link";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

export default function Categories(props: any) {
    const { params : { subcategories } } = props;

    return <div className="m-4">
        <Breadcrumb>
            {
                subcategories.map((category: string, index: number) => (
                    <BreadcrumbItem key={category} active={index === subcategories.length - 1}>
                        {
                            index !== subcategories.length -1 ? <Link href={`/categories/${category}`}>
                            {category.replace('-', ' ').toUpperCase()}
                            </Link> : <>{category.replace('-', ' ').toUpperCase()}</>
                        }
                    </BreadcrumbItem>
                ))
            }
        </Breadcrumb>
    </div>
}