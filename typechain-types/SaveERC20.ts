/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface SaveERC20Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "checkContractBalance"
      | "checkUserBalance"
      | "deposit"
      | "ownerWithdraw"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "SavingSuccessful" | "WithdrawSuccessful"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "checkContractBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkUserBalance",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerWithdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkContractBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkUserBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownerWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace SavingSuccessfulEvent {
  export type InputTuple = [sender: AddressLike, amount: BigNumberish];
  export type OutputTuple = [sender: string, amount: bigint];
  export interface OutputObject {
    sender: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawSuccessfulEvent {
  export type InputTuple = [receiver: AddressLike, amount: BigNumberish];
  export type OutputTuple = [receiver: string, amount: bigint];
  export interface OutputObject {
    receiver: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SaveERC20 extends BaseContract {
  connect(runner?: ContractRunner | null): SaveERC20;
  waitForDeployment(): Promise<this>;

  interface: SaveERC20Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  checkContractBalance: TypedContractMethod<[], [bigint], "view">;

  checkUserBalance: TypedContractMethod<[_user: AddressLike], [bigint], "view">;

  deposit: TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;

  ownerWithdraw: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdraw: TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "checkContractBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "checkUserBalance"
  ): TypedContractMethod<[_user: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "ownerWithdraw"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "SavingSuccessful"
  ): TypedContractEvent<
    SavingSuccessfulEvent.InputTuple,
    SavingSuccessfulEvent.OutputTuple,
    SavingSuccessfulEvent.OutputObject
  >;
  getEvent(
    key: "WithdrawSuccessful"
  ): TypedContractEvent<
    WithdrawSuccessfulEvent.InputTuple,
    WithdrawSuccessfulEvent.OutputTuple,
    WithdrawSuccessfulEvent.OutputObject
  >;

  filters: {
    "SavingSuccessful(address,uint256)": TypedContractEvent<
      SavingSuccessfulEvent.InputTuple,
      SavingSuccessfulEvent.OutputTuple,
      SavingSuccessfulEvent.OutputObject
    >;
    SavingSuccessful: TypedContractEvent<
      SavingSuccessfulEvent.InputTuple,
      SavingSuccessfulEvent.OutputTuple,
      SavingSuccessfulEvent.OutputObject
    >;

    "WithdrawSuccessful(address,uint256)": TypedContractEvent<
      WithdrawSuccessfulEvent.InputTuple,
      WithdrawSuccessfulEvent.OutputTuple,
      WithdrawSuccessfulEvent.OutputObject
    >;
    WithdrawSuccessful: TypedContractEvent<
      WithdrawSuccessfulEvent.InputTuple,
      WithdrawSuccessfulEvent.OutputTuple,
      WithdrawSuccessfulEvent.OutputObject
    >;
  };
}