// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title EventTickets_Simple
 * @dev Simplified version: Manages creation and sale for events with a single ticket type.
 * For EasyA x Polkadot Harvard Hackathon.
 */
contract EventTickets_Simple {

    // --- Struct ---
    // Simplified Event Info - NO Tiers array
    struct EventInfo {
        address owner;          // Who created the event (contract owner for simplicity)
        string name;           // Name of the event
        uint256 price;          // Price per ticket (single tier)
        uint256 maxSupply;      // Max tickets for this event
        uint256 issuedSupply;   // How many tickets issued
        uint256 saleStartTime;  // Unix timestamp when sale starts
        uint256 saleEndTime;    // Timestamp when sale ends
        // Mapping: userAddress -> ownsTicket? (Simplified)
        mapping(address => bool) userHasTicket;
        // REMOVED: userCheckedIn mapping
    }

    // --- State Variables ---

    address public contractOwner;
    uint256 public nextEventId;
    mapping(uint256 => EventInfo) public events;

    // --- Events --- (Simplified)

    event EventCreated(uint256 indexed eventId, address indexed owner, string name, uint256 price, uint256 maxSupply, uint256 saleStartTime, uint256 saleEndTime);
    event TicketBought(uint256 indexed eventId, address indexed buyer, uint256 price);
    // REMOVED: AttendeeCheckedIn event
    event FeesWithdrawn(address indexed owner, uint256 amount);

    // --- Errors --- (Simplified)

    error SaleNotActive();
    error SaleEnded();
    error SoldOut();
    error InsufficientPayment();
    error AlreadyOwnsTicket();
    error NotOwner();
    // REMOVED: AttendeeHasNoTicket, AlreadyCheckedIn, InvalidTierIndex
    error NoFeesToWithdraw();
    error EventDoesNotExist();

    // --- Modifier ---

    modifier onlyOwner() {
        if (msg.sender != contractOwner) revert NotOwner();
        _;
    }

    // --- Constructor ---

    constructor() {
        contractOwner = msg.sender;
    }

    // --- Owner Functions ---

    /**
     * @notice Creates a new event with a single ticket type.
     */
    function createEvent(
        string memory _eventName,
        uint256 _price,         // Single price
        uint256 _maxSupply,     // Single supply
        uint256 _saleStartTime,
        uint256 _saleEndTime
    ) public onlyOwner {
        require(_saleEndTime > _saleStartTime, "Sale end time must be after start time");
        require(_maxSupply > 0, "Max supply must be greater than 0");

        uint256 eventId = nextEventId;
        EventInfo storage newEvent = events[eventId];

        newEvent.owner = contractOwner;
        newEvent.name = _eventName;
        newEvent.price = _price;
        newEvent.maxSupply = _maxSupply;
        // newEvent.issuedSupply defaults to 0
        newEvent.saleStartTime = _saleStartTime;
        newEvent.saleEndTime = _saleEndTime;
        // Mappings default to false/empty

        nextEventId++;
        emit EventCreated(eventId, contractOwner, _eventName, _price, _maxSupply, _saleStartTime, _saleEndTime);
    }

    // REMOVED: checkInAttendee function

    /**
     * @notice Allows the contract owner to withdraw all accumulated WND fees.
     */
    function withdrawFees() public onlyOwner {
        uint256 balance = address(this).balance;
        if (balance == 0) revert NoFeesToWithdraw();
        (bool success, ) = contractOwner.call{value: balance}("");
        require(success, "Transfer failed");
        emit FeesWithdrawn(contractOwner, balance);
    }

    // --- Public Functions ---

    /**
     * @notice Allows a user to buy a ticket for a specific event (single tier).
     */
    function buyTicket(uint256 eventId) public payable {
        require(eventId < nextEventId, "Event does not exist");
        EventInfo storage currentEvent = events[eventId];

        // Check conditions (simplified - no tierIndex)
        if (block.timestamp < currentEvent.saleStartTime) revert SaleNotActive();
        if (block.timestamp >= currentEvent.saleEndTime) revert SaleEnded();
        if (currentEvent.issuedSupply >= currentEvent.maxSupply) revert SoldOut();
        if (msg.value != currentEvent.price) revert InsufficientPayment();
        if (currentEvent.userHasTicket[msg.sender]) revert AlreadyOwnsTicket();

        // Update state (simplified)
        currentEvent.userHasTicket[msg.sender] = true;
        currentEvent.issuedSupply++;

        // Emit event (simplified)
        emit TicketBought(eventId, msg.sender, currentEvent.price);
    }

    // --- View Functions ---

    /**
     * @notice Gets the total number of events created.
     */
    function getEventCount() public view returns (uint256) {
        return nextEventId;
    }

    /**
     * @notice Gets details for a specific event.
     */
    function getEventDetails(uint256 eventId) public view returns (
        address owner,
        string memory name,
        uint256 price,
        uint256 maxSupply,
        uint256 issuedSupply,
        uint256 saleStartTime,
        uint256 saleEndTime
    ) {
        require(eventId < nextEventId, "Event does not exist");
        EventInfo storage E = events[eventId];
        return (
            E.owner,
            E.name,
            E.price,
            E.maxSupply,
            E.issuedSupply,
            E.saleStartTime,
            E.saleEndTime
        );
    }

    /**
     * @notice Checks if a user owns a ticket for a specific event.
     */
    function hasTicket(uint256 eventId, address user) public view returns (bool) {
        // No need to check eventId validity here, non-existent events have no tickets
        return events[eventId].userHasTicket[user];
    }

    // REMOVED: isAttendeeCheckedIn function
    // REMOVED: getTierDetails function
}