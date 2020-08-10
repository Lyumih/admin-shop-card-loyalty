export interface LinkProps {
  label: string
  href: string
}

export const HOME_LINK: LinkProps = {
  label: "Главная",
  href: "/"
}

export const PAGE_LINKS: Array<LinkProps> = [
  {
    label: "Зарегистрировать магазин", 
    href: "/shop"
  }
]