import { TOKEN_NAME } from "../../dom/token";

export const FAQ_DATA = [
  {
    question: `How can I purchase a ${TOKEN_NAME}?`,
    answer: "1 - On the auction start date you must connect your ethereum wallet at https://app.sushi.com/miso.\n 2 - Indicate on the tab the amount of tokens you want to buy. \n3 - Sign the transaction in your ethereum wallet.\n 4 - Once the auction ends, you must make the claim to get your tokens in your wallet.",
    id: 1,
  },
  {
    question: "What are the start and end dates of the auction?",
    answer: `The ${TOKEN_NAME} IDO will run for 3 days, starting on April 26 2022 18UTC, and ending on April 29 2022 18UTC.`,
    id: 2,
  },
  {
    question: "What is an IDO?",
    answer: "An IDO, which stands for Initial Dex Offering, is a fundraising approach that pools the investment capital of retail investors. The currency is released through SushiSwap’s decentralized exchange, and 50% of the proceeds of the IDO will be destined to provide liquidity.",
    id: 3,
  },
  {
    question: "What is the starting price and reserve price of the token auction?",
    answer: "The starting price will be 0.000045 ETH, and it will be launched through a Dutch auction.\n The reserve price will be 0.000003 ETH. This is the minimum price at which the auction is descending. Set by the auction creator, this gives the batch of tokens a total value that it needs to reach for the auction to be successful.",
    id: 4,
  },
  {
    question: "What is a MISO?",
    answer: "Miso is SushiSwap's token launching platform. Miso provides the necessary infrastructure through reliable and open source contracts. You can learn more here: https://instantmiso.gitbook.io/miso",
    id: 5,
  },
  {
    question: "What is a Dutch auction?",
    answer: "Dutch Auctions are a centuries old system, aimed at finding the true market value of a completely novel item. In the case of MISO token auctions, the price is set at a higher value per token than expected and descends over time, with the eventual price being settled on once all tokens have been sold. Practically, this means participants individually decide at which point they're happy with a token price and commit their funds. Through this mechanism, the total end value of our public sale is not known until the auction sales are fully completed.",
    id: 6,
  },
  {
    question: "What is the Supply & Genesis Distribution scheme like?",
    answer: `Total supply: 235.000.000 ${TOKEN_NAME} \n\n\u2022 Community treasury 40% 94.0M ${TOKEN_NAME} \n\u2022 IDO + Liquidity Pool 10% 23.5M ${TOKEN_NAME} \n\u2022 Airdrop 5% 11.8M ${TOKEN_NAME} \n\u2022 Team 30 % 70.5 M ${TOKEN_NAME} \n\u2022 Seed investors 15% 35.3M ${TOKEN_NAME}`,
    id: 7,
  },  {
    question: "How many tokens will be offered for sale in the IDO?",
    answer: `There will be 23.5 Million ${TOKEN_NAME} available to purchase during the IDO auction, representing 10% of the total supply.`,
    id: 8,
  },
  {
    question: "Will there be liquidity following the token launch?",
    answer: `After our public auction, the tokens will be available to trade on SushiSwap at the price that resulted from the Dutch auction. 50% of the proceeds will be used to provide liquidity of ${TOKEN_NAME} tokens to our SushiSwap liquidity pool. In this way this pool will become our long-term liquidity venue.`,
    id: 9,
  },
  {
    question: "When and at what price will the tokens be launched in the market?",
    answer: `The final price of the tokens will be revealed at the end of the Dutch auction, which is the price with which ${TOKEN_NAME} will be released to the market directly after the auction is completed.`,
    id: 10,
  },
]