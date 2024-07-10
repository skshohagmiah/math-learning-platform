import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import { ModeToggle } from "../theme/ModeToggle";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

const MobileHeader = () => {
    const t = useTranslations("Header")
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className="flex items-start justify-start flex-col space-x-4">
                <Link
                  href="#lessons"
                  className="text-gray-800 dark:text-gray-200 p-2 ml-4"
                >
                  {t("lessons")}
                </Link>
                  <LocaleSwitcher />
                <div className="flex items-center gap-2 my-2 ml-8">
                <ModeToggle />
                <p>Change theme</p>
                </div>
                <Link
                  href="/login"
                  className="text-gray-800 dark:text-gray-200 ml-4"
                >
                  <Button>{t("login")}</Button>
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileHeader;
