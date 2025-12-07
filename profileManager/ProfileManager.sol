// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ProfileManager {
    address public owner;
    string  public username;
    uint256 public age;

    constructor() {
        owner = msg.sender;
        username = "unregistered";
        age = 0;
    }

    function setUsername(string calldata newUsername) external {
        require(msg.sender == owner, "Not owner");
        username = newUsername;
    }

    function setAge(uint256 newAge) external {
        require(msg.sender == owner, "Not owner");
        require(newAge >= 13, "Age must be >= 13");
        age = newAge;
    }

    function transferOwnership(address newOwner) external {
        require(msg.sender == owner, "Not owner");
        require(newOwner != address(0), "Invalid owner");
        owner = newOwner;
    }

    function resetProfile() external {
        require(msg.sender == owner, "Not owner");
        username = "";
        age = 0;
    }

    function getProfile() external view returns (string memory, uint256) {
        return (username, age);
    }
}




