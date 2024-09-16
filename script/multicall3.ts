// Multicall3
// https://etherscan.io/address/0xcA11bde05977b3631167028862bE2a173976CA11#writeContract

// args of etherscan call funtion aggregate
// [{ "target": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", "callData": "0x095ea7b3000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4800000000000000000000000000000000000000000000000000038d7ea4c68000" }]

import { Interface } from "ethers";
import * as ABI from "./abi";

export function getFunctionCalldata(
  abi: Array<string>,
  funcName: string,
  callFuncParams: any[],
): string {
  const func = new Interface(abi);
  return func.encodeFunctionData(funcName, callFuncParams);
  console.log(
    getFunctionCalldata(
      [
        "function approve(address spender, uint256 amount) external returns (bool)",
      ],
      "approve",
      ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", 1000000000000000],
    ),
  );
}

function main() {
  const funcName = "approve";
  const callFuncParams = [
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    1000000000000000,
  ];
  console.log(getFunctionCalldata(ABI.ERC20ABI, funcName, callFuncParams));
  return;

  console.log(
    getFunctionCalldata(ABI.ERC20ABI, "transferFrom", [
      "", // from
      "", // to
      1000000000000000,
    ]),
  );
}

main();
