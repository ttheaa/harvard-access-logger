// --- Constants ---
const contractAddress = "0x6b347a5FCDf33E4A711B04d5937C66E2aA050281"; // <-- PASTE YOUR DEPLOYED ADDRESS
const contractAbi = `[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "AlreadyOwnsTicket",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "eventId",
				"type": "uint256"
			}
		],
		"name": "buyTicket",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_eventName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_maxSupply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_saleStartTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_saleEndTime",
				"type": "uint256"
			}
		],
		"name": "createEvent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "EventDoesNotExist",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InsufficientPayment",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NoFeesToWithdraw",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotOwner",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SaleEnded",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SaleNotActive",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SoldOut",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "eventId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "maxSupply",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "saleStartTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "saleEndTime",
				"type": "uint256"
			}
		],
		"name": "EventCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "FeesWithdrawn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "eventId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "TicketBought",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "withdrawFees",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "events",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxSupply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "issuedSupply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "saleStartTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "saleEndTime",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getEventCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "eventId",
				"type": "uint256"
			}
		],
		"name": "getEventDetails",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxSupply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "issuedSupply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "saleStartTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "saleEndTime",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "eventId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "hasTicket",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextEventId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
`; // <-- ABI 
const targetNetworkId = 420420421; // Westmint Asset Hub EVM Chain ID

// --- Application State ---
let provider;
let signer;
let contract;
let userAddress;

// --- DOM Element References ---
const connectButton = document.getElementById('connectButton');
const statusSpan = document.getElementById('status');
const accountSpan = document.getElementById('account');
const networkSpan = document.getElementById('network');

const fetchEventButton = document.getElementById('fetchEventButton');
const eventDetailsDiv = document.getElementById('eventDetails');
const eventNameSpan = document.getElementById('eventName');
const eventPriceSpan = document.getElementById('eventPrice');
const eventSupplySpan = document.getElementById('eventSupply');
const eventMaxSupplySpan = document.getElementById('eventMaxSupply');
const eventStartSpan = document.getElementById('eventStart');
const eventEndSpan = document.getElementById('eventEnd');

const checkTicketButton = document.getElementById('checkTicketButton');
const ticketStatusSpan = document.getElementById('ticketStatus');

const buyPriceSpan = document.getElementById('buyPrice');
const buyTicketButton = document.getElementById('buyTicketButton');
const buyStatusP = document.getElementById('buyStatus');

// --- Initial UI State ---
fetchEventButton.disabled = true;
checkTicketButton.disabled = true;
buyTicketButton.disabled = true;

// Check if ethers is loaded (optional sanity check)
if (typeof ethers === 'undefined') {
    alert('Ethers.js library not loaded. Ensure the script tag is in index.html.');
} else {
    console.log("Ethers.js loaded:", ethers.version);
}

// --- Connect to Wallet ---
async function connectWallet() {
    statusSpan.textContent = "Connecting...";
    accountSpan.textContent = "N/A";
    networkSpan.textContent = "N/A";
    fetchEventButton.disabled = true;
    checkTicketButton.disabled = true;
    buyTicketButton.disabled = true;

    if (typeof window.ethereum === 'undefined') {
        statusSpan.textContent = "MetaMask not installed!";
        alert("Please install MetaMask!");
        return;
    }

    try {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        userAddress = accounts[0];

        // Get provider and signer
        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner(); // Gets the user's account

        // Check Network
        const network = await provider.getNetwork();
        networkSpan.textContent = `${network.name} (ID: ${network.chainId})`;

        if (network.chainId !== BigInt(targetNetworkId)) {
            statusSpan.textContent = "Wrong Network!";
            alert(`Please switch MetaMask to Asset-Hub Westend Testnet (Chain ID ${targetNetworkId})`);
            // You could add logic here to *request* a network switch
            // await window.ethereum.request({
            //    method: 'wallet_switchEthereumChain',
            //    params: [{ chainId: ethers.toBeHex(targetNetworkId) }],
            // });
            return; // Stop if wrong network
        }

        // Create Contract instance
        contract = new ethers.Contract(contractAddress, contractAbi, signer);
        console.log("Contract instance created:", contract);

        // Update UI
        statusSpan.textContent = "Connected";
        accountSpan.textContent = userAddress;
        connectButton.textContent = "Wallet Connected";
        connectButton.disabled = true; // Don't need to connect again

        // Enable interaction buttons
        fetchEventButton.disabled = false;
        checkTicketButton.disabled = false;
        // We will enable buy button after fetching event details and checking time/supply

    } catch (error) {
        console.error("Error connecting wallet:", error);
        statusSpan.textContent = "Connection Failed";
        alert(`Connection failed: ${error.message || error}`);
        // Re-enable connect button if connection failed
        connectButton.disabled = false;
        connectButton.textContent = "Connect Wallet";
    }
}

// --- Event listener for Connect button ---
connectButton.addEventListener('click', connectWallet);
fetchEventButton.addEventListener('click', fetchEventDetails); ///
checkTicketButton.addEventListener('click', checkOwnership);  ///
buyTicketButton.addEventListener('click', buyTicket); ///

async function fetchEventDetails() {
    if (!contract) {
        alert("Please connect wallet first.");
        return;
    }
    console.log("Fetching details for Event 0...");
    eventDetailsDiv.style.opacity = '0.5'; // Indicate loading

    try {
        // Event ID 0 is hardcoded for this simple frontend
        const eventId = 1;
        // Call the contract's view function
        // Returns: address owner, string name, uint256 price, uint256 maxSupply, uint256 issuedSupply, uint256 saleStartTime, uint256 saleEndTime
        const details = await contract.getEventDetails(eventId);

        // Destructure the returned array/tuple (order matters!)
        const owner = details[0];
        const name = details[1];
        const price = details[2]; // This is a BigInt in base units
        const maxSupply = details[3];
        const issuedSupply = details[4];
        const saleStartTime = details[5];
        const saleEndTime = details[6];

        // Format for display
        // WND has 12 decimals. ethers.formatUnits handles BigInt.
        const priceInWND = ethers.formatUnits(price, 12);
        const startTime = new Date(Number(saleStartTime) * 1000).toLocaleString(); // Convert Unix timestamp to readable date
        const endTime = new Date(Number(saleEndTime) * 1000).toLocaleString();

        // Update HTML
        eventNameSpan.textContent = name;
        eventPriceSpan.textContent = priceInWND;
        buyPriceSpan.textContent = priceInWND; // Update price near buy button too
        eventSupplySpan.textContent = issuedSupply.toString(); // Convert BigInt to string
        eventMaxSupplySpan.textContent = maxSupply.toString(); // Convert BigInt to string
        eventStartSpan.textContent = startTime;
        eventEndSpan.textContent = endTime;

        console.log("Event details updated:", details);

        // Check if sale is active and supply available to enable buy button
        const now = Math.floor(Date.now() / 1000);
        if (now >= saleStartTime && now < saleEndTime && issuedSupply < maxSupply) {
             buyTicketButton.disabled = false;
             buyStatusP.textContent = "Sale is active. Click below to buy.";
        } else {
             buyTicketButton.disabled = true;
             if (now >= saleEndTime) {
                 buyStatusP.textContent = "Sale has ended.";
             } else if (issuedSupply >= maxSupply) {
                 buyStatusP.textContent = "Sold out!";
             } else {
                 buyStatusP.textContent = "Sale not yet active.";
             }
        }


    } catch (error) {
        console.error("Error fetching event details:", error);
        alert(`Failed to fetch event details: ${error.message || error}`);
        // Clear details on error?
        eventNameSpan.textContent = "Error";
        // ... clear other fields ...
        buyTicketButton.disabled = true;
        buyStatusP.textContent = "Could not fetch details.";
    } finally {
         eventDetailsDiv.style.opacity = '1'; // Restore opacity
    }
}

///

async function checkOwnership() {
    if (!contract || !userAddress) {
        alert("Please connect wallet first.");
        return;
    }
    console.log("Checking ticket ownership for Event 0 and user:", userAddress);
    ticketStatusSpan.textContent = "Checking...";

    try {
        const eventId = 1; // Hardcoded event ID
        const ownsTicket = await contract.hasTicket(eventId, userAddress);

        ticketStatusSpan.textContent = ownsTicket ? "Yes" : "No";
        console.log("Ownership status:", ownsTicket);

    } catch (error) {
        console.error("Error checking ticket ownership:", error);
        alert(`Failed to check ticket status: ${error.message || error}`);
        ticketStatusSpan.textContent = "Error";
    }
}

/////
async function buyTicket() {
    if (!contract || !signer) {
        alert("Please connect wallet first.");
        return;
    }
    console.log("Attempting to buy ticket for Event 0...");
    buyStatusP.textContent = "Preparing transaction...";
    buyTicketButton.disabled = true; // Disable button while processing

    try {
        const eventId = 1; // Hardcoded event ID

        // Get the price again to be sure (it's stored in the contract)
        // Alternatively, parse it from the displayed text, but reading from contract is safer
        const details = await contract.getEventDetails(eventId);
        const priceInBaseUnits = details[2]; // Price is the 3rd element (index 2)

        console.log(`Attempting to send ${priceInBaseUnits.toString()} base units (WND wei)...`);

        // Send the transaction
        const tx = await contract.buyTicket(eventId, {
            value: priceInBaseUnits // Send the required WND amount (as BigInt)
        });

        buyStatusP.textContent = `Transaction sent! Waiting for confirmation... Hash: ${tx.hash}`;
        console.log("Transaction submitted:", tx.hash);

        // Wait for the transaction to be mined
        const receipt = await tx.wait(); // Waits for 1 confirmation by default

        console.log("Transaction confirmed:", receipt);
        buyStatusP.textContent = `Ticket purchased successfully! Tx Hash: ${receipt.hash}`;

        // Refresh relevant UI elements after purchase
        await fetchEventDetails(); // Update supply count
        await checkOwnership(); // Update ticket status

    } catch (error) {
        console.error("Error buying ticket:", error);
        // Try to get a more specific revert reason if available
        const reason = error?.reason || error?.message || JSON.stringify(error);
        buyStatusP.textContent = `Purchase failed: ${reason}`;
        alert(`Purchase failed: ${reason}`);
        buyTicketButton.disabled = false; // Re-enable button on failure
    }
    // Note: Button remains disabled on success, as user now owns a ticket.
    // Re-enabling it would require checking ownership status before enabling.
}
