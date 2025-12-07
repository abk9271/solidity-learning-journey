// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProfileManager {
    address public owner;
    string public username;
    uint public age;

    constructor() {
        owner = msg.sender;
        username = "unregistered";
        age = 0;
    }

    function setUsername(string calldata newUsername) external {
        require(msg.sender == owner, "ProfileManager: Not owner");
        
        username = newUsername;
    }

    function setAge(uint newAge) external {
        require(msg.sender == owner, "ProfileManager: Not owner");
        
        require(newAge >= 13, "ProfileManager: Age must be 13 or older");

        age = newAge;
    }

    function transferOwnership(address newOwner) external {
        require(msg.sender == owner, "ProfileManager: Not owner");

        require(newOwner != address(0), "ProfileManager: Invalid owner address (zero address)");

        owner = newOwner;
    }
    
    function resetProfile() external {
        require(msg.sender == owner, "ProfileManager: Not owner");

        username = "";
        age = 0;
    }

    function getProfile() external view returns (string memory, uint) {
        return (username, age);
    }
}