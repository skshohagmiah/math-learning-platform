"use client";

import { useState } from "react";
import Link from "next/link";

import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import { ModeToggle } from "../theme/ModeToggle";
import { Button } from "../ui/button";
import MobileHeader from "./MobileHeader";
import { Hash } from "lucide-react";

const Header: React.FC = () => {
  const t = useTranslations("Header");

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link
            href="/"
            className="text-green-500 capitalize text-2xl flex items-center"
          >
            <Hash />
            Math<span className="text-blue-500">Shikhe</span>
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <ModeToggle />
          <div>
            <LocaleSwitcher />
          </div>
          <Link href="/feedback" className="text-gray-800 dark:text-gray-200 hidden md:block">
            {t("feedback")}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
