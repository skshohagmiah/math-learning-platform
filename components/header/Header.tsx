"use client";

import {  useState } from "react";
import Link from "next/link";


import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import { ModeToggle } from "../theme/ModeToggle";
import { Button } from "../ui/button";
import MobileHeader from "./MobileHeader";

const Header: React.FC = () => {
  const t = useTranslations("Header");


  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">{t("title")}</Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/lessons" className="text-gray-800 dark:text-gray-200">
            {t("lessons")}
          </Link>
          <div>
            <LocaleSwitcher />
          </div>
          <ModeToggle />
          <Link href="/login" className="text-gray-800 dark:text-gray-200">
            <Button>{t("login")}</Button>
          </Link>
        </div>
        <div className="md:hidden">
          <MobileHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
