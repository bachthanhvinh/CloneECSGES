import type { ComponentType } from "react";
import { ABOUT_SECTIONS, PATHS } from "./paths";

export interface AnchorItem {
  hash: string;
  labelKey: string;
}

export interface AppRoute {
  path: string;
  Name?: string;
  loader: () => Promise<{ default: ComponentType }>;
  children?: AppRoute[];
  anchors?: AnchorItem[];
}

export const appRoutes: AppRoute[] = [
  {
    path: PATHS.HOME,
    loader: () => import("../pages/Home"),
  },
  {
    path: PATHS.ABOUT,
    Name: "Về ECS",
    loader: () => import("../pages/About"),
    anchors: [
      { hash: ABOUT_SECTIONS.JOURNEY, labelKey: "Hành trình phát triển" },
      { hash: ABOUT_SECTIONS.VISION, labelKey: "Tâm nhìn" },
      { hash: ABOUT_SECTIONS.MISSION, labelKey: "Sứ mệnh" },
      { hash: ABOUT_SECTIONS.VALUES, labelKey: "Giá trị cốt lõi" },
      { hash: ABOUT_SECTIONS.NUMBERS, labelKey: "Những con số ấn tượng" },
    ],
  },
  {
    path: PATHS.FIELDS,
    Name: "Lĩnh vự hoạt động",
    loader: () => import("../pages/Fields"),
    // children: [
    //   {
    //     path: PATHS.CAREER_GUIDANCE,
    //     Name: "Hướng nghiệp",
    //     loader: () => import("../pages/Fields/CareerGuidance"),
    //   },
    //   {
    //     path: PATHS.ADMISSION,
    //     Name: "Tuyển sinh",
    //     loader: () => import("../pages/Fields/Admission"),
    //   },
    //   {
    //     path: PATHS.TRAINING,
    //     Name: "Đào tạo",
    //     loader: () => import("../pages/Fields/Training"),
    //   },
    //   {
    //     path: PATHS.JOBS,
    //     Name: "Việc làm",
    //     loader: () => import("../pages/Fields/Jobs"),
    //   },
    //   {
    //     path: PATHS.MEDIA,
    //     Name: "Truyền thông",
    //     loader: () => import("../pages/Fields/Media"),
    //   },
    // ],
  },
  {
    path: PATHS.PARTNERS,
    Name: "Đối tác",
    loader: () => import("../pages/Partners"),
  },
  {
    path: PATHS.SUSTAINABILITY,
    Name: "Phát triển bền vững ",
    loader: () => import("../pages/Sustainability"),
    children: [
      {
        path: PATHS.PEOPLE,
        Name: "Con người ECS",
        loader: () => import("../pages/Sustainability/People"),
      },
      {
        path: PATHS.CULTURE,
        Name: "Văn hóa ECS",
        loader: () => import("../pages/Sustainability/Culture"),
      },
      {
        path: PATHS.SOCIAL_RESPONSIBILITY,
        Name: "Trách nghiệm xã hội",
        loader: () => import("../pages/Sustainability/SocialResponsibility"),
      },
    ],
  },
  {
    path: PATHS.NEWS,
    Name: "Tin tức",
    loader: () => import("../pages/News"),
  },
  {
    path: PATHS.JOBS,
    Name: "Tuyển dụng",
    loader: () => import("../pages/Jobs"),
  },
  {
    path: PATHS.SEARCH,
    Name: "Tìm kiếm",
    loader: () => import("../pages/Search"),
  },
];
