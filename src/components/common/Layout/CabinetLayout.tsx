// app/components/Layout/CabinetLayout.js

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Sidebar from "../Sidebar";
import Link from "next/link";
interface IProps {
  children: React.ReactNode;
  role: string;
}
const CabinetLayout: React.FC<IProps> = ({ children, role }) => {
  return (
    <div className=" min-h-screen container">
      <Breadcrumb className="my-5">
        <BreadcrumbList className="text-[14px] ">
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/client/home">Главная</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/client/home">Авторизация</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Кабинет</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex">
        <Sidebar role={role} />
        <main className="flex-1 px-2">{children}</main>
      </div>
    </div>
  );
};

export default CabinetLayout;
