import { colorCombinations } from "@/app/(dashboard)/workspace/constants";

const getWorkspaceColor = (id: string) => {
  const charSum = id.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const colorIndex = charSum % colorCombinations.length;
  return colorCombinations[colorIndex];
};

export default getWorkspaceColor;