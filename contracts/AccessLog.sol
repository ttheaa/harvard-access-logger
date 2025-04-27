// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title AccessLog
 * @dev A simple contract to log which addresses have accessed a file, identified by its hash.
 * For EasyA x Polkadot Harvard Hackathon.
 */
contract AccessLog {
    // Mapping: fileHash => array of addresses that accessed it
    mapping(bytes32 => address[]) public accessLog;

    // Event emitted when access is logged
    event Accessed(bytes32 indexed fileHash, address indexed accessor);

    /**
     * @dev Logs that the caller (msg.sender) has accessed the file with the given hash.
     * Does not prevent duplicate entries for simplicity in hackathon scope.
     * @param fileHash The bytes32 hash of the file (e.g., IPFS CID hash).
     */
    function logAccess(bytes32 fileHash) public {
        accessLog[fileHash].push(msg.sender);
        emit Accessed(fileHash, msg.sender);
    }

    /**
     * @dev Retrieves the list of addresses that logged access for a given file hash.
     * @param fileHash The bytes32 hash of the file.
     * @return An array of accessor addresses.
     */
    function getAccessors(bytes32 fileHash) public view returns (address[] memory) {
        return accessLog[fileHash];
    }
}