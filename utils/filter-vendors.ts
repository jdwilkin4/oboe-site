import { Vendor } from "../src/types";

const filterVendors = (vendors: Vendor[], vendorType: string) => {
  switch (vendorType) {
    case "music":
      return vendors.filter((vendor) => vendor.type === "sheet music");
    case "instruments":
      return vendors.filter((vendor) => vendor.type === "instruments");
    case "reeds":
      return vendors.filter((vendor) => vendor.type === "reeds");
    case "misc":
      return vendors.filter((vendor) => vendor.type === "misc");
    default:
      return vendors;
  }
};

export default filterVendors;
