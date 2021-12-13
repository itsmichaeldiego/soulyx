import { calculateHeight } from "./utils";

export const CHART_DATA = [
  {
    name: "2021",
    stacks: [
      { value: calculateHeight(10), label: "IDO + LP", color: "#F2B8AB" },
      { value: calculateHeight(5), label: "SEED INVESTORS", color: "#ECECEC" },
    ]
  },
  {
    name: "2022",
    stacks: [
      { value: calculateHeight(10), label: "SEED INVESTORS", color: "#F2B8AB" },
      { value: calculateHeight(15), label: "TEAM", color: "#ECECEC" },
    ]
  },
  {
    name: "2023",
    stacks: [
      // NOTE: `fixedLabel` attribute shouldn't legally exist
      // it's only purpose is to match first 'Community Treasure' position with design
      { value: calculateHeight(10), label: "COMMUNITY\nTREASURY", color: "#EEDBD6", fixedLabel: true },
      { value: calculateHeight(5), label: "AIRDROP", color: "#F2B8AB" },
      { value: calculateHeight(13), label: "TEAM", color: "#ECECEC" },
    ]
  },
  {
    name: "2024",
    stacks: [
      { value: calculateHeight(30), label: "COMMUNITY\nTREASURY", color: "#F6A897" },
      { value: calculateHeight(2.5), label: "AIRDROP", color: "#ECECEC" },
    ]
  },
];

export const Y_AXIS_LABELS = ['0.0%', '10%', '20%', '30%'];