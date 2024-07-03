"use client"
import { Button, ButtonGroup } from "reactstrap";

export default function SortAndFilter(props: any) {

    const { sortBy, sortOrder, handleSort, setSortOrder } = props;

    return (
        <>
            <b>Sort Order</b>
            <br />
            <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
                <option value='desc'>Desending</option>
                <option value='asc'>Acending</option>
            </select>
            <br />
            <b>Sort By</b>
            <br />
            <ButtonGroup className="mt-2">
                <Button
                    color="primary"
                    outline
                    onClick={() => handleSort('title')}
                    active={sortBy === 'title'}
                >
                    Title
                </Button>
                <Button
                    color="primary"
                    outline
                    onClick={() => handleSort('seller')}
                    active={sortBy === 'seller'}
                >
                    Vendor
                </Button>
                <Button
                    color="primary"
                    outline
                    onClick={() => handleSort('price')}
                    active={sortBy === 'price'}
                >
                    Price
                </Button>
            </ButtonGroup>
        </>
    )
}