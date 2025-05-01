# EventTickets Simple - EasyA x Polkadot Harvard Hackathon

**Demo Video:** [![Watch the video](https://img.youtube.com/vi/dDj35tQRchw/0.jpg)](https://www.youtube.com/watch?v=dDj35tQRchw)

## Short Summary

Offers simple on-chain event ticketing on Polkadot Asset Hub (Westmint) using a custom Solidity contract via its EVM layer, enabling verifiable ticket sales.

## Full Description

**Problem:** Managing event ticket sales transparently and ensuring verifiable ownership on-chain can be complex. This project aimed to create a simple, functional demonstration of a decentralized ticketing solution deployable on core Polkadot infrastructure.

**Solution:** `EventTickets_Simple` is a custom Solidity smart contract deployed to the Westmint Asset Hub testnet. It allows an owner to create events with a name, price (in WND), supply limit, and timed sale window. Users interact via a basic web frontend (HTML/JS/Ethers.js) and MetaMask to purchase tickets on-chain during the active sale period. Ownership is recorded immutably on Westmint.

**Polkadot Use:** Deployed directly onto the **Westmint Asset Hub Testnet**, leveraging its native **EVM compatibility layer** (powered by `pallet-revive`) and the **PolkaVM** execution engine. Interactions occur via Westmint's standard EVM JSON-RPC endpoint, with gas fees paid in testnet **WND**, all while benefiting from the shared security provided by the Westend Relay Chain.


## Deployed Contract Details

* **Network:** Westmint (Polkadot Asset Hub Testnet - EVM Chain ID `420420421`)
* **Contract Address:** `0x6b347a5FCDf33E4A711B04d5937C66E2aA050281`
* **Block Explorer Link (Subscan):** `https://assethub-westend.subscan.io/account/0x6b347a5fcdf33e4a711b04d5937c66e2aa050281`


## Running the Demo Locally

To run the frontend demo and interact with the deployed contract on Westmint:

1.  **Prerequisites:**
    * A web browser (like Chrome or Brave) with the [MetaMask extension](https://metamask.io/) installed.
    * Python 3 installed (for running a simple local web server).
    * MetaMask configured with the **Westmint Asset Hub Testnet**:
        * Network Name: `Westmint Asset Hub EVM` (or similar)
        * RPC URL: `https://westmint-rpc.polkadot.io/` 
        * Chain ID: `420420421`
        * Currency Symbol: `WND`
    * An account imported into MetaMask funded with sufficient testnet WND for gas fees (faucet info available in Polkadot documentation).

2.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/ttheaa/harvard-access-logger.git](https://github.com/ttheaa/harvard-access-logger.git)
    cd harvard-access-logger
    ```

3.  **Start Local Server:** Navigate into the directory containing `index.html` (if it's not the root, `cd` into it first) and run:
    ```bash
    python3 -m http.server 8000
    ```
    *(If `python3` doesn't work, try `python -m http.server 8000`)*

4.  **Access Demo:** Open your web browser and navigate to:
    `http://localhost:8000`

5.  **Interact:**
    * Use the "Connect Wallet" button (ensure MetaMask is set to Westmint).
    * Use "Fetch Event Details" to load info from the deployed contract (for the Event ID configured in `app.js`).
    * Use "Check My Ticket" to verify ownership for the connected account.
    * Use "Buy Ticket" if a sale is active for the configured event ID.

## How it Works (User Flow in Demo)

1.  **Connect Wallet:** Initiates connection request to MetaMask (on Westmint).
2.  **Fetch Details:** Reads event data (name, price, supply, times) from the contract's public view functions using Ethers.js.
3.  **Buy Ticket:** Constructs and sends a transaction via MetaMask (including the correct WND `value`) to the contract's `buyTicket` payable function.
4.  **Check Ownership:** Reads the `hasTicket` mapping in the contract for the user's address and the specific event ID.

*(The `EventTickets_Simple.sol` contract contains the on-chain logic for sale validation, ownership tracking (`userHasTicket` mapping), supply management, and owner-only functions like `createEvent` and `withdrawFees`. See `contracts/EventTickets_Simple.sol`)*

## Technical Explanation

* **Smart Contract:** Solidity v0.8.20 (`contracts/EventTickets_Simple.sol`)
* **Deployment/Interaction Tools:** Remix IDE (`remix.polkadot.io`), MetaMask
* **Frontend:** HTML, CSS, JavaScript, Ethers.js v6.11.1
* **Deployment Network:** Westmint (Polkadot Asset Hub Testnet - EVM Chain ID `420420421`)
* **Polkadot Tech Used:** Westmint Asset Hub Parachain, `pallet-revive` (EVM Compatibility Layer), PolkaVM (WASM Execution Engine), Westmint EVM JSON-RPC Endpoint, WND (Testnet Gas Token), Subscan (Block Explorer)
* **Unique Polkadot Feature:** The ability to deploy and run standard Solidity/EVM contracts directly on a core system parachain (Asset Hub) using native tooling, thanks to `pallet-revive` and PolkaVM.

## Screenshots
![Alt text description](https://github.com/ttheaa/harvard-access-logger/blob/main/Screenshot%202025-04-28%20at%202.22.08%20pm.png?raw=true)
![image]([https://user-images.githubusercontent.com/...](https://github.com/ttheaa/harvard-access-logger/blob/main/Screenshot%202025-04-28%20at%202.23.36%20pm.png?raw=true)

## Future Vision

This project serves as a foundation for a more robust ticketing system on Polkadot. Future enhancements could include tiered tickets (VIP/Standard), on-chain check-in mechanisms, integration with Polkadot's identity system, or exploring NFT-based tickets (PSP34 standard) directly on Asset Hub.
