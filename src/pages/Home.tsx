import {CustomNavbar} from "../components/navbar/navbar";
import {NavBanner} from "../components/navBanner/navBanner";
import {Logo} from "../components/logo/logo";


export function Home() {
    return (
        <>
            <CustomNavbar/>
            <NavBanner/>
            <Logo />
        </>
    );
}