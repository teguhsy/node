// @generated by protoc-gen-es v1.3.0 with parameter "target=dts"
// @generated from file observer/params.proto (package zetachain.zetacore.observer, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Chain } from "../common/common_pb.js";

/**
 * Deprecated(v14):Moved into the authority module
 *
 * @generated from enum zetachain.zetacore.observer.Policy_Type
 */
export declare enum Policy_Type {
  /**
   * @generated from enum value: group1 = 0;
   */
  group1 = 0,

  /**
   * @generated from enum value: group2 = 1;
   */
  group2 = 1,
}

/**
 * @generated from message zetachain.zetacore.observer.ChainParamsList
 */
export declare class ChainParamsList extends Message<ChainParamsList> {
  /**
   * @generated from field: repeated zetachain.zetacore.observer.ChainParams chain_params = 1;
   */
  chainParams: ChainParams[];

  constructor(data?: PartialMessage<ChainParamsList>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.observer.ChainParamsList";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainParamsList;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainParamsList;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainParamsList;

  static equals(a: ChainParamsList | PlainMessage<ChainParamsList> | undefined, b: ChainParamsList | PlainMessage<ChainParamsList> | undefined): boolean;
}

/**
 * @generated from message zetachain.zetacore.observer.ChainParams
 */
export declare class ChainParams extends Message<ChainParams> {
  /**
   * @generated from field: int64 chain_id = 11;
   */
  chainId: bigint;

  /**
   * @generated from field: uint64 confirmation_count = 1;
   */
  confirmationCount: bigint;

  /**
   * @generated from field: uint64 gas_price_ticker = 2;
   */
  gasPriceTicker: bigint;

  /**
   * @generated from field: uint64 in_tx_ticker = 3;
   */
  inTxTicker: bigint;

  /**
   * @generated from field: uint64 out_tx_ticker = 4;
   */
  outTxTicker: bigint;

  /**
   * @generated from field: uint64 watch_utxo_ticker = 5;
   */
  watchUtxoTicker: bigint;

  /**
   * @generated from field: string zeta_token_contract_address = 8;
   */
  zetaTokenContractAddress: string;

  /**
   * @generated from field: string connector_contract_address = 9;
   */
  connectorContractAddress: string;

  /**
   * @generated from field: string erc20_custody_contract_address = 10;
   */
  erc20CustodyContractAddress: string;

  /**
   * @generated from field: int64 outbound_tx_schedule_interval = 12;
   */
  outboundTxScheduleInterval: bigint;

  /**
   * @generated from field: int64 outbound_tx_schedule_lookahead = 13;
   */
  outboundTxScheduleLookahead: bigint;

  /**
   * @generated from field: string ballot_threshold = 14;
   */
  ballotThreshold: string;

  /**
   * @generated from field: string min_observer_delegation = 15;
   */
  minObserverDelegation: string;

  /**
   * @generated from field: bool is_supported = 16;
   */
  isSupported: boolean;

  constructor(data?: PartialMessage<ChainParams>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.observer.ChainParams";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainParams;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainParams;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainParams;

  static equals(a: ChainParams | PlainMessage<ChainParams> | undefined, b: ChainParams | PlainMessage<ChainParams> | undefined): boolean;
}

/**
 * Deprecated(v13): Use ChainParamsList
 *
 * @generated from message zetachain.zetacore.observer.ObserverParams
 */
export declare class ObserverParams extends Message<ObserverParams> {
  /**
   * @generated from field: common.Chain chain = 1;
   */
  chain?: Chain;

  /**
   * @generated from field: string ballot_threshold = 3;
   */
  ballotThreshold: string;

  /**
   * @generated from field: string min_observer_delegation = 4;
   */
  minObserverDelegation: string;

  /**
   * @generated from field: bool is_supported = 5;
   */
  isSupported: boolean;

  constructor(data?: PartialMessage<ObserverParams>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.observer.ObserverParams";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObserverParams;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObserverParams;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObserverParams;

  static equals(a: ObserverParams | PlainMessage<ObserverParams> | undefined, b: ObserverParams | PlainMessage<ObserverParams> | undefined): boolean;
}

/**
 * Deprecated(v14):Moved into the authority module
 *
 * @generated from message zetachain.zetacore.observer.Admin_Policy
 */
export declare class Admin_Policy extends Message<Admin_Policy> {
  /**
   * @generated from field: zetachain.zetacore.observer.Policy_Type policy_type = 1;
   */
  policyType: Policy_Type;

  /**
   * @generated from field: string address = 2;
   */
  address: string;

  constructor(data?: PartialMessage<Admin_Policy>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.observer.Admin_Policy";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Admin_Policy;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Admin_Policy;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Admin_Policy;

  static equals(a: Admin_Policy | PlainMessage<Admin_Policy> | undefined, b: Admin_Policy | PlainMessage<Admin_Policy> | undefined): boolean;
}

/**
 * Params defines the parameters for the module.
 *
 * @generated from message zetachain.zetacore.observer.Params
 */
export declare class Params extends Message<Params> {
  /**
   * Deprecated(v13): Use ChainParamsList
   *
   * @generated from field: repeated zetachain.zetacore.observer.ObserverParams observer_params = 1;
   */
  observerParams: ObserverParams[];

  /**
   * Deprecated(v14):Moved into the authority module
   *
   * @generated from field: repeated zetachain.zetacore.observer.Admin_Policy admin_policy = 2;
   */
  adminPolicy: Admin_Policy[];

  /**
   * @generated from field: int64 ballot_maturity_blocks = 3;
   */
  ballotMaturityBlocks: bigint;

  constructor(data?: PartialMessage<Params>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zetachain.zetacore.observer.Params";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}

