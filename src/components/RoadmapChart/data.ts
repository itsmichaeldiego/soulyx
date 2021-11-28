import { calculateHeight } from "./utils";

export const CHART_DATA = [
  {
    name: "2021",
    stacks: [
      { value: calculateHeight(2), label: "Airdrop", color: "#EEDBD6" },
      { value: calculateHeight(10), label: "IDO + LP", color: "#F2B8AB" },
      { value: calculateHeight(5), label: "Investors", color: "#E5E5E5" },
    ]
  },
  {
    name: "2022",
    stacks: [
      { value: calculateHeight(2), label: "Airdrop", color: "#EEDBD6" },
      { value: calculateHeight(11), label: "Team", color: "#F2B8AB" },
      { value: calculateHeight(12.5), label: "Partners", color: "#E5E5E5" },
    ]
  },
  {
    name: "2023",
    stacks: [
      // NOTE: `fixedLabel` attribute shouldn't legally exist
      // it's only purpose is to match first 'Community Treasure' position with design
      { value: calculateHeight(10), label: "Community Treasure", color: "#EEDBD6", fixedLabel: true },
      { value: calculateHeight(1.5), label: "Airdrop", color: "#F2B8AB" },
      { value: calculateHeight(7.5), label: "Team", color: "#F6A897" },
      { value: calculateHeight(9), label: "Partners", color: "#E5E5E5" },
    ]
  },
  {
    name: "2024",
    stacks: [
      { value: calculateHeight(30), label: "Community Treasure", color: "#F6A897" },
      { value: calculateHeight(2.5), label: "Airdrop", color: "#E5E5E5" },
    ]
  },
];

export const Y_AXIS_LABELS = ['0.0%', '10%', '20%', '30%'];