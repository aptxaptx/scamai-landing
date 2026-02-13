import { createNavigation } from "next-intl/navigation";

import { defaultLocale, locales } from "./config";

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  defaultLocale,
  localePrefix: "always",
});
