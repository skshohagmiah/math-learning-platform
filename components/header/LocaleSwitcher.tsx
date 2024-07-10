'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
const LocaleSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();

  const switchLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.replace(`${newLocale}`);
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