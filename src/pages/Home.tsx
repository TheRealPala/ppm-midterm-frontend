import {CustomNavbar} from "../components/navbar/navbar";
import {NavBanner} from "../components/navBanner/navBanner";
import {Logo} from "../components/logo/logo";
import {NavDropdown} from "../components/navDropdown/navDropdown";


export function Home() {
    return (
        <>
            <CustomNavbar/>
            <NavBanner/>
            <Logo />

            <div className={"w-100 d-flex align-items-center justify-content-center"}>
                <NavDropdown />
            </div>
        </>
    );
}