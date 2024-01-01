import { Avatar } from "@mui/material";
import { useState } from "react";
import Overview from "./Overview";
import Setting from "./Setting";
import { AccountCircle, Email, LocationOn } from "@mui/icons-material";
import { Head, Link, usePage } from "@inertiajs/react";
import ClientLayout from "@/Layouts/ClientLayout";
import AdminLayout from "@/Layouts/AdminLayout";
import { formatCurrency } from "@/Functions/FormatCurrency";

function ProfilePage() {
  const [tab, setTab] = useState("Overview");
  const {props} = usePage()
  const user = props.auth.user

  return (
    <AdminLayout>
      <Head title="Profile"/>
      <section className="header__top">
        <span className="header__top--header">Profile</span>
        <div className="header__top--breadcrumbs">
          <Link href="/">
            Home
          </Link>
          <span>/</span>
          <span>Profile</span>
        </div>
      </section>
      <section className="w-full card px-[20px] flex gap-[30px] flex-col">
        <div className="flex gap-[20px] py-[20px]">
          <Avatar
            src={user?.avatar}
            variant="rounded"
            sx={{ width: 150, height: 150 }}
          />
          <div className="flex flex-col justify-between pb-[10px]">
            <div className="flex flex-col">
              <span className="text-[24px] font-[600]">{user?.name}</span>
              <span className="text-[14px] text-gray-500 flex gap-[10px] items-center font-[600]">
                <span className="flex items-center gap-[5px]">
                  <AccountCircle sx={{ fontSize: 18 }} />
                  <span>{user?.role}</span>
                </span>
                <span className="flex items-center gap-[5px]">
                  <LocationOn sx={{ fontSize: 18 }} />
                  {user?.address}
                </span>
                <span className="flex items-center gap-[5px]">
                  <Email sx={{ fontSize: 18 }} />
                  {user?.email}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-[20px]">
              <div className="h-[50px] min-w-[100px] pl-[5px] pr-[15px] border rounded border-dashed flex flex-col justify-between">
                  <span className="text-[14px] text-primary/70">Revenue</span>
                  <span className="text-[21px]">{formatCurrency(props.revenue)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[40px] flex items-center gap-[20px]">
          <span
            className={`text-[18px] font-[600] h-full flex-center border-b-4 cursor-pointer ${
              tab === "Overview"
                ? "text-primary/70 border-primary/70"
                : "text-gray-500 border-transparent"
            }`}
            onClick={() => setTab("Overview")}
          >
            Overview
          </span>
          <span
            className={`text-[18px] font-[600] h-full flex-center border-b-4 cursor-pointer ${
              tab === "Setting"
                ? "text-primary/70 border-primary/70"
                : "text-gray-500 border-transparent"
            }`}
            onClick={() => setTab("Setting")}
          >
            Setting
          </span>
        </div>
      </section>
      {tab === "Overview" && <Overview/>}
      {tab === "Setting" && <Setting />}
    </AdminLayout>
  );
}

export default ProfilePage;
