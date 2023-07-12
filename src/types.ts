export type Vendor = {
  name: string;
  url: string;
  description: string;
  type: "sheet music" | "instruments" | "misc" | "reeds";
};

export type Conference = {
  name: string;
  url: string;
};
