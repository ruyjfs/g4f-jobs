import { usePathname, useRouter } from "next/navigation";

export default function useNavigate() {
  const router = useRouter();
  const pathname = usePathname();

  function redirect(url: string) {
    router.push(`${getFirstPathname()}${url}`);
  }

  const onRedirect = (url: string) => () => {
    router.push(url);
  };

  function getFirstPathname() {
    return `/${pathname.split("/")[1]}`;
  }

  const isCurrent = (url: string) => {
    let cleanPathname = pathname;
    ["/pt-BR", "/en"].forEach(
      (item) => (cleanPathname = cleanPathname.replace(item, ""))
    );

    return (
      url === pathname.replace("pt-BR", "").replace("en", "") ||
      url === cleanPathname
    );
  };

  return { redirect, onRedirect, getFirstPathname, isCurrent };
}
