import React, { useState, useEffect } from "react";
import Panel from "@/components/QuestionPanel";
import Navbar from "@/components/Navbar";

function FAQ() {
  const [state, setState] = useState(null);

  return (
    <div className="h-screen overflow-auto bg-primary scrollContent">
      <Navbar />
      <div className="lg:p-32 py-14 px-5">
        <div className="flex items-center space-x-4 mt-10">
          <h1 className="text-2xl lg:text-5xl text-white font-bold uppercase font-berlin">
            Frequently asked questions
          </h1>
        </div>
        <div className="mt-6 lg:mt-10 px-0 lg:px-32">
          <Panel
            index={1}
            state={state}
            setState={setState}
            question={"How long has Froggies Token existed?"}
            answer={
              <p>
                FROGGIES Token was initially launched back in November 2021 on
                the Ethereum chain. Later a bridge was created to the BSC to
                allow for cross chain transactions and cheaper gas fees. <br />{" "}
                In October 2022 Froggies Token decided to migrate the legacy ETH
                and BSC contract into one new BSC contract. The main reasons for
                this were lower gas fees, a stronger liquidity pool, and the
                greater possibilities of on chain development.
              </p>
            }
          />
          <Panel
            index={2}
            state={state}
            setState={setState}
            question={"What is our contract address?"}
            answer={
              <p>
                0x7029994f28fd39ff934A96b25591D250A2183f67 <br />
                Chain: Binance Smart Chain
              </p>
            }
          />
          <Panel
            index={3}
            state={state}
            setState={setState}
            question={"How secure is investing in Froggies Token?"}
            answer={
              <div>
                <p>
                  During the creation of our smart contract, we have taken
                  investor security in mind and we have provided several
                  measures:
                </p>
                <ul className="list-disc ml-5 mt-2 space-y-2">
                  <li>
                    Tax cannot be set higher than 15% state._maxTaxFee =
                    1500;(1500 means 15%)
                  </li>
                  <li>Our Liquidity Pool is fully locked</li>
                  <li>
                    Our team members have been KYC by Nanuqe:
                    https://t.co/ksVl2DC0XR
                  </li>
                  <li>Some team members are doxxed</li>
                </ul>
              </div>
            }
          />
          <Panel
            index={4}
            state={state}
            setState={setState}
            question={"Is Froggies Token listed on a centralized exchange?"}
            answer={
              <div>
                <p>
                  Yes, we are listed on the rapidly expanding Asian exchange
                  Coinstore. Froggies Token is paired with USDT and can be spot
                  traded; https://www.coinstore.com/#/spot/FRGSTUSDT
                </p>
              </div>
            }
          />
          <Panel
            n={5}
            state={state}
            setState={setState}
            question={
              "How to buy Froggies Token through the PancakeSwap website?"
            }
            answer={
              <div>
                <p>
                  Go to:
                  <a href=" https://pancakeswap.finance/swap?outputCurrency=0x7029994f28fd39ff934A96b25591D250A2183f67&inputCurrency=BNB">
                    https://pancakeswap.finance/swap?outputCurrency=0x7029994f28fd39ff934A96b25591D250A2183f67&inputCurrency=BNB
                  </a>
                  <ul className="list-disc ml-5 mt-2 space-y-2">
                    <li>Connect your preferred wallet</li>
                    <li>
                      Select any input currency (default should be BNB, our
                      pair)
                    </li>
                    <li>Search for FRGST, if it does not show up:</li>
                    <li>Select Manage Tokens</li>
                    <li>Go to the second tab &apos;Tokens&apos;</li>
                    <li>Fill out the FRGST contract address</li>
                    <li>Select Import</li>
                    <li>
                      Enter the amount of BNB you want to invest, or amount of
                      FRGST you want to buy.
                    </li>
                    <li>
                      Make sure under the settings &apos;Slippage
                      Tolerance&apos; is set to 12%
                    </li>
                    <li>Select Swap</li>
                    <li>Approve the contract pop-up</li>
                  </ul>
                </p>
              </div>
            }
          />

          <Panel
            index={7}
            state={state}
            setState={setState}
            question={
              "How to fix the 'insufficient output' error on Pancakeswap?"
            }
            answer={"Increase the slippage tolerance to 12%"}
          />
          <Panel
            index={8}
            state={state}
            setState={setState}
            question={
              "How can I become a liquidity provider and earn a piece of the pool?"
            }
            answer={
              <div>
                <ul className="list-disc ml-5 mt-2 space-y-2">
                  <li>
                    Visit the Liquidity page{" "}
                    <a href="https://pancakeswap.finance/liquidity">
                      (https://pancakeswap.finance/liquidity)
                    </a>
                  </li>
                  <li>Click the Add Liquidity button.</li>
                  <li>
                    For the top Input, click &apos;Select a currency&apos;. -
                    Choose BNB
                  </li>
                  <li>
                    For the bottom input, click &apos;Select a currency&apos;. -
                    Choose FRGST
                  </li>
                  <li>
                    Enter an amount on one of the tokens under “Input”. ...
                  </li>
                  <li>
                    If one of the tokens does not have enough balance. ...
                  </li>
                  <li>Click the Enable CAKE button.</li>
                  <li>DONE!</li>
                </ul>
              </div>
            }
          />
          <Panel
            index={9}
            state={state}
            setState={setState}
            question={"How can I help?"}
            answer={
              "Tell your friends & family about Froggies. Social media is a wonderful place. You can also email your proposal to Marketing@froggiestoken.com"
            }
          />
          <Panel
            index={10}
            state={state}
            setState={setState}
            question={"How do I see $FRGST in my wallet?"}
            answer={
              <div>
                <p>
                  Open TrustWallet and select &apos;Add Tokens&apos;. In the
                  left top of your screen select the + icon. Select BNB Smart
                  Chain at the Network selection and fill out our contract
                  address followed by &apos;Save&apos;. <br /> <br /> Open
                  Metamask and select &apos;import token&apos;. Select
                  &apos;Custom Token&apos; and fill out the contract address
                  followed by import.
                </p>
              </div>
            }
          />
          <Panel
            index={11}
            state={state}
            setState={setState}
            question={"How can I get free $FRGST?"}
            answer={
              <div>
                <p>
                  P2E <br /> Play our P2E https://everlost.io as much as you
                  want and earn $FRGST while burning other memetokens. <br />
                  <br />
                  AMBASSADOR <br /> Read more on how the program works by simply
                  joining the Telegram group, read the rules/tasks and start
                  taking your piece of the monthly prize pool!
                  <br />
                  <br />
                  <a href="https://t.me/FroggiesAmbassadors">
                    https://t.me/FroggiesAmbassadors
                  </a>
                  <br />
                  <br />
                  PARTICIPATE <br /> $FRGST Rewards are up for grabs every day
                  to those who participate in the community. Create posts,
                  memes, enter contests, help a fellow Froggie in need, or even
                  tip other people with your own tokens and it might rain $FRGST
                  on you!
                  <br /> <br /> GIVEAWAYS & EVENTS <br /> Enter $FRGST giveaways
                  on our twitter and you might have a chance to win 👀
                </p>
              </div>
            }
          />
          <Panel
            index={12}
            state={state}
            setState={setState}
            question={
              "What if something is unclear, or you have an urgent query?"
            }
            answer={
              <div>
                Please join our Telegram group. Our core team members are always
                available to support with anything in regard to Froggies Token:
                <a href="https://t.me/officialfroggiestoken">
                  https://t.me/officialfroggiestoken
                </a>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
