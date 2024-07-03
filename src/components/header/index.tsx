'use client'
import Image from "next/image";
import { HeaderContainer } from "./styles";
import { Button, Input } from "reactstrap";

export default function Header() {
    return <header>
        <HeaderContainer>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <Input type="text" placeholder="Search anything" />
        <div className="d-flex">
            <Button type="button" outline color="white">Login</Button>
            <Button type="button" outline color="white" >Signup</Button>
        </div>
        </HeaderContainer>
    </header>
}