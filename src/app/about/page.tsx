"use client";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

function Page() {
  const t = useTranslations();

  const onClick = async (locale: Locale) => {
    await setUserLocale(locale);
  };

  return (
    <main>
      <h1>{t("about")}</h1>
      <button onClick={() => onClick("en")}>English</button>
      <button onClick={() => onClick("vi")}>Vietnamese</button>
      <div>
        <button
          onClick={async () => {
            await signOut({
              callbackUrl: "/",
            });
          }}
        >
          Logout
        </button>
      </div>
    </main>
  );
}

export default Page;
