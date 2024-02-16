// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Erc20contract {
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    address public constant ZERO_ADDRESS = address(0);
    uint256 public constant FEE_PERCENT = 10;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    constructor(string memory _name, string memory _symbol, uint8 _decimals, uint256 _initialSupply) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        totalSupply = _initialSupply * (10 ** uint256(_decimals));
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint256 _value) external returns (bool) {
        require(_to != ZERO_ADDRESS, "Transfer to the zero address");
        require(_value <= balanceOf[msg.sender], "Balance not enough");

        uint256 fee = (_value * FEE_PERCENT) / 100;
        uint256 amountAfterFee = _value - fee;

        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += amountAfterFee;
        balanceOf[ZERO_ADDRESS] += fee;

        emit Transfer(msg.sender, _to, amountAfterFee);
        emit Transfer(msg.sender, ZERO_ADDRESS, fee);

        return true;
    }

    function approve(address _spender, uint256 _value) external returns (bool) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) external returns (bool) {
        require(_to != ZERO_ADDRESS, "Transfer to the zero address");
        require(_value <= balanceOf[_from], "Balance not enough");
        require(_value <= allowance[_from][msg.sender], "Not Allowed");

        uint256 fee = (_value * FEE_PERCENT) / 100;
        uint256 amountAfterFee = _value - fee;

        balanceOf[_from] -= _value;
        balanceOf[_to] += amountAfterFee;
        balanceOf[ZERO_ADDRESS] += fee;

        allowance[_from][msg.sender] -= _value;

        emit Transfer(_from, _to, amountAfterFee);
        emit Transfer(_from, ZERO_ADDRESS, fee);

        return true;
    }
}