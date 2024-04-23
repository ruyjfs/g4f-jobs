export type MenuType = {
  label: string;
  current: boolean;
  url: string;
  color:
    | "warning"
    | "secondary"
    | "primary"
    | "success"
    | "danger"
    | "foreground"
    | undefined;
};

export const menu: MenuType[] = [
  {
    label: "Home",
    current: false,
    url: "/",
    color: "foreground",
  },
  {
    label: "myActivities",
    current: false,
    url: "/user/activities",
    color: "foreground",
  },
  {
    label: "projects",
    current: false,
    url: "/projects",
    color: "foreground",
  },
  {
    label: "activities",
    current: false,
    url: "/activities",
    color: "foreground",
  },
  {
    label: "logout",
    current: false,
    url: "/logout",
    color: "danger",
  },
];
