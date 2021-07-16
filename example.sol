pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";

contract MyTokenExample is ERC20PresetMinterPauser {
    constructor (string memory name, string memory symbol) ERC20PresetMinterPauser(name, symbol) {
        _mint(msg.sender, 1000000000 * 10 ** uint(decimals()));
    }
}
