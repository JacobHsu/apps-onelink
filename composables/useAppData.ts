import type { AppItem, SocialLink, AppCategory } from "./data/appCategories";
import { demoData } from "./data/appCategories";

export const useAppData = () => {
  const cachedDemoData = useState<Record<string, AppCategory>>("demoData", () => {
    return demoData;
  });

  return {
    demoData: cachedDemoData.value,
  };
};
