'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

const LocaleSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('LocaleSwitcher');

  const switchLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    
    // Remove the current locale from the pathname
    const currentPathname = pathname.replace(`/${locale}`, '');

    // Construct the new path with the new locale
    const newPath = `/${newLocale}${currentPathname}`;
    
    router.push(newPath);
  };

  return (
    <select
      value={locale}
      onChange={switchLocale}
      className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded"
    >
      <option value="en">English</option>
      <option value="bn">বাংলা</option>
    </select>
  );
};

export default LocaleSwitcher;