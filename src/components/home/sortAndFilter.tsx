"use client"
import { useState } from "react";
import { Button, ButtonGroup, Input, InputGroup } from "reactstrap";

export default function SortAndFilter(props: any) {

    const { sortBy, sortOrder, handleSort, setSortOrder, handleSearch } = props;
    const [keyword, setKeyword] = useState('');

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
            <ButtonGroup className="my-2">
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
            <br />
            <b>Quick Search</b>
            <div>
                <InputGroup>
                    <Input 
                        placeholder="Search sales or sellers"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        />
                    <Button color="primary" outline onClick={() => {handleSearch(keyword)}}>
                        Go
                    </Button>
                </InputGroup>
                <br />
            </div>
        </>
    )
}