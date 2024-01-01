import { primary } from "@/Contexts/ColorContext";
import { usePage } from "@inertiajs/react";
import { alpha } from "@mui/material";
import LogoEverprimary from "resources/assets/logo";


function Footer() {
  const {props} = usePage()
  return (
    <footer className="w-full h-[400px] bg-footer bg-cover flex justify-between px-[120px] p-[30px] shadow-md z-[1000]">
      <div className="flex flex-col gap-[20px]">
        <div className="text-[32px] font-[700] text-primary-main-dark flex">
        <LogoEverprimary size={40} primary={alpha(primary, 0.7)} />
          Garden
        </div>
        <div className="w-[300px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        Contact Us
        <div className="flex flex-col">
          <span>{props.admin.phone}</span>
          <span>{props.admin.email}</span>
        </div>
      </div>
      <div></div>
    </footer>
  );
}

export default Footer;
