import type { ComponentType } from "react";
import { PATHS } from "./paths";

export interface AppRoute {
  path: string;
  labelKey?: string;
  loader: () => Promise<{ default: ComponentType }>;
  children?: AppRoute[];
}

export const appRoutes: AppRoute[] = [
  {
    path: PATHS.HOME,
    loader: () => import("../pages/Home"),
  },
  {
    path: PATHS.ABOUT,
    labelKey: "Về ECS",
    loader: () => import("../pages/About"),
  },
  {
    path: PATHS.FIELDS,
    labelKey: "Lĩnh vự hoạt động",
    loader: () => import("../pages/Fields"),
    children: [
      {
        path: PATHS.CAREER_GUIDANCE,
        labelKey: "Hướng nghiệp",
        loader: () => import("../pages/Fields/CareerGuidance"),
      },
      {
        path: PATHS.ADMISSION,
        labelKey: "Tuyển sinh",
        loader: () => import("../pages/Fields/Admission"),
      },
      {
        path: PATHS.TRAINING,
        labelKey: "Đào tạo",
        loader: () => import("../pages/Fields/Training"),
      },
      {
        path: PATHS.JOBS,
        labelKey: "Việc làm",
        loader: () => import("../pages/Fields/Jobs"),
      },
      {
        path: PATHS.MEDIA,
        labelKey: "Truyền thông",
        loader: () => import("../pages/Fields/Media"),
      },
    ],
  },
  {
    path: PATHS.PARTNERS,
    labelKey: "Cộng tác",
    loader: () => import("../pages/Partners"),
  },
];
