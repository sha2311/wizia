import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { assets } from "../assets/asset";


 function Navmenu() {

 
  return (
   <section className="md:h-[84px] md:max-w-[1440px] max-w-[375px] h-[68px]">
     <Navbar position="static" className="bg-transparent border-b border-[#183A40] ">
      <NavbarBrand>
      <img className="cursor-pointer" src={assets.logo} alt="" />
      </NavbarBrand>
      <NavbarContent className="hidden md:flex lg:mr-36 gap-5" justify="center">
        <NavbarItem>
          <Link className="font-work text-[#FFFFFF] text-base " href="#">
          About Us
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link className="font-work text-[16px]  text-[#FFFFFF]" href="#" >
          Pricing
          </Link >
        </NavbarItem>
        <NavbarItem>
          <Link className="font-work  text-[#FFFFFF] text-base"  href="#">
          Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-work text-[16px] text-[#FFFFFF] " href="#">
          Solutions
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className="bg-primary rounded-full font-work font-medium text-sm hidden md:flex" href="#" variant="flat">
          Book a Demo
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="bg-transparent text-white border-white border-1 rounded-full" variant="bordered">
          Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
   </section>
  );
}
export default Navmenu