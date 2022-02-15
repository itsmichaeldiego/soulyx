import { calculateHeight } from "./utils";

export const CHART_DATA = [
  {
    name: "2022",
    stacks: [
      { value: calculateHeight(10), label: "FAIR LAUNCH AUCTIONS", color: "#F2B8AB" },
      { value: calculateHeight(5), label: "SEED INVESTORS", color: "#EEDBD6" },
    ]
  },
  {
    name: "2023",
    stacks: [
      { value: calculateHeight(5), label: "COMMUNITY\nTREASURY", color: "#F2B8AB" },
      { value: calculateHeight(5), label: "SEED INVESTORS", color: "#EEDBD6" },
      { value: calculateHeight(15), label: "TEAM", color: "#ECECEC" },
    ]
  },
  {
    name: "2024",
    stacks: [
      // NOTE: `fixedLabel` attribute shouldn't legally exist
      // it's only purpose is to match first 'Community Treasure' position with design
      { value: calculateHeight(10), label: "COMMUNITY\nTREASURY", color: "#F2B8AB" },
      { value: calculateHeight(5), label: "AIRDROP", color: "#EEDBD6" },
      { value: calculateHeight(13), label: "TEAM", color: "#ECECEC" },
    ]
  },
  {
    name: "2025",
    stacks: [
      { value: calculateHeight(25), label: "COMMUNITY\nTREASURY", color: "#F2B8AB" },
      { value: calculateHeight(7), label: "TEAM", color: "#ECECEC" },
    ]
  },
];

export const Y_AXIS_LABELS = ['0.0%', '10%', '20%', '30%'];