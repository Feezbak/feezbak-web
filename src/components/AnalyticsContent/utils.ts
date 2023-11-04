export const links = (storyId: string) => [
  { title: "Stories", url: "/dashboard" },
  { title: "Analytics", url: `/analytics/${storyId}` },
];

export const getMobileMenuLinks = (storyId: string) => [
  { title: "Analytics", url: `/analytics/${storyId}` },
  { title: "Stories", url: "/dashboard" },
  { title: "My Profile", url: "/profile" },
];
