pragma solidity ^0.5.11;

contract SimpleSample {
    uint stateVar;

    constructor (uint x) public {
	stateVar = x;
    }

    function set(uint x) public {
        stateVar = x;
    }

    function get() public view returns (uint) {
        return stateVar;
    }
    
}

