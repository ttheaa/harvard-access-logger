# EventTickets Simple - EasyA x Polkadot Harvard Hackathon

**Demo Video:** https://youtu.be/dDj35tQRchw

## Short Summary

EventTickets Simple offers a basic on-chain event ticketing service, allowing users to purchase timed-sale tickets on Polkadot Asset Hub (Westmint) using a custom Solidity smart contract via its EVM compatibility layer.

## Full Description

**Problem:** Managing event ticket sales transparently and ensuring verifiable ownership on-chain can be complex. This project aimed to create a simple, functional demonstration of a decentralized ticketing solution deployable on core Polkadot infrastructure.

**Solution:** `EventTickets_Simple` is a custom Solidity smart contract. It allows a designated owner to create events with a name, a single ticket price (in WND), a maximum supply, and specific start/end times for the sale. Users can connect via an EVM-compatible wallet (like MetaMask) and call the `buyTicket` function, sending the required WND amount. The contract validates the purchase (time window, supply, price, prevents double-buying) and records ticket ownership on the Westmint blockchain. A basic web frontend using HTML/JS and Ethers.js was created to interact with the deployed contract.

**Polkadot Use:** The project leverages Polkadot's infrastructure by deploying the Solidity contract directly onto the **Westmint Asset Hub Testnet**. This utilizes Westmint's native **EVM compatibility layer** (enabled by `pallet-revive`) and the **PolkaVM** execution engine. Interactions happen via Westmint's EVM JSON-RPC endpoint, with gas fees paid in testnet WND, all secured by the Westend Relay Chain.

## How it Works (Frontend + Contract)

1.  **Connect:** User connects MetaMask wallet to the web UI, ensuring it's set to the Westmint Asset Hub Testnet.
2.  **Fetch Details:** User clicks "Fetch Event Details" to query the contract (via Ethers.js) for the latest event's name, price, supply, and sale times.
3.  **Buy Ticket:** If the sale is active and tickets are available, the user clicks "Buy Ticket". MetaMask prompts them to confirm the transaction, sending the correct WND value to the contract's `buyTicket` function.
4.  **Contract Logic:** The smart contract verifies the sale window, supply, payment amount, and checks if the user already owns a ticket before recording the purchase (`userHasTicket` mapping) and incrementing the `issuedSupply`.
5.  **Verify Ownership:** The user can click "Check My Ticket" to query the contract's `hasTicket` view function and confirm their purchase status on the UI.
6.  **Owner Actions:** The contract owner (deployer) can create new events using `createEvent` and withdraw accumulated WND fees using `withdrawFees`.

## Technical Explanation

* **Smart Contract:** Solidity (v0.8.20) - `EventTickets_Simple.sol`
* **Deployment/Interaction Tools:** Remix IDE (`remix.polkadot.io`), MetaMask
* **Frontend:** HTML, CSS, JavaScript, Ethers.js (v6.11.1)
* **Deployment Network:** Westmint (Westend Asset Hub Testnet - Chain ID `420420421`)
* **Polkadot Tech Used:**
    * Westmint Asset Hub Parachain
    * `pallet-revive` (EVM Compatibility Layer)
    * PolkaVM (Execution Engine)
    * Westmint EVM JSON-RPC Endpoint
    * WND (Testnet Gas Token)
    * Subscan (Block Explorer for Verification)

* **Unique Polkadot Feature:** Native EVM compatibility via `pallet-revive`/PolkaVM directly on the Asset Hub system parachain, enabling standard EVM tooling usage.

## Satisfying Requirement 7 (Custom, Functional Contract)

This submission includes `EventTickets_Simple`, a **custom** Solidity smart contract built for this hackathon (not boilerplate). It is **fully-functional**, deployed on **Polkadot Asset Hub** (Westmint testnet's EVM layer). Functionality is proven via the **Demo Video** showing successful interaction through the web UI connected to the Westmint network and MetaMask.

## Screenshots

*(Insert 1-2 screenshots of your web UI interacting with the contract - e.g., showing event details loaded, showing "You Own Ticket: Yes" after purchase)*

```![UI Screenshot 2](URL_TO_YOUR_SCREENSHOT_2.png)`

## Explanation Video

*(Insert link to your Loom video explaining the code, repo structure, demo, and tech used)*

`[YOUR LOOM EXPLANATION VIDEO LINK HERE]`

## Deployed Contract Details

* **Network:** Westmint (Asset Hub Testnet - Chain ID 420420421)
* **Contract Address:** `[YOUR DEPLOYED EventTickets_Simple 0x... ADDRESS HERE]`
* **Block Explorer Link (Subscan):** `[YOUR SUBSCAN LINK FOR THE DEPLOYED CONTRACT HERE]`

## Future Vision

This functional contract provides a solid base for a Web3 ticketing solution on Polkadot. With more time, we'd implement tiered tickets (VIP, General), add on-chain check-ins, link to Polkadot Identity, and explore NFT tickets (PSP34) on Asset Hub, building towards a full, decentralized event management platform.
