/* istanbul ignore file */

export { SkynetClient } from "./client";
export { HASH_LENGTH, deriveChildSeed, genKeyPairAndSeed, genKeyPairFromSeed } from "./crypto";
export { getSkylinkUrlForPortal } from "./download";
export { getEntryUrlForPortal, signEntry } from "./registry";
export { DacLibrary, mySkyDomain, mySkyDevDomain } from "./mysky";
export {
  deriveEncryptedFileKeyEntropy,
  deriveEncryptedFileSeed,
  deriveEncryptedFileTweak,
  ENCRYPTION_PATH_SEED_LENGTH,
} from "./mysky/encrypted_files";
export { deriveDiscoverableFileTweak } from "./mysky/tweak";
export { convertSkylinkToBase32, convertSkylinkToBase64 } from "./skylink/format";
export { parseSkylink } from "./skylink/parse";
export { isSkylinkV1, isSkylinkV2 } from "./skylink/sia";
export { getRelativeFilePath, getRootDirectory } from "./utils/file";
export { MAX_REVISION } from "./utils/number";
export { stringToUint8ArrayUtf8, uint8ArrayToStringUtf8 } from "./utils/string";
export {
  defaultPortalUrl,
  defaultSkynetPortalUrl,
  extractDomainForPortal,
  getFullDomainUrlForPortal,
  uriHandshakePrefix,
  uriSkynetPrefix,
} from "./utils/url";

// Re-export Permission API.
export {
  Permission,
  PermCategory,
  PermType,
  PermRead,
  PermWrite,
  PermHidden,
  PermDiscoverable,
  PermLegacySkyID,
} from "skynet-mysky-utils";

// Export types.

export type { CustomClientOptions, RequestConfig } from "./client";
export type { KeyPair, KeyPairAndSeed, Signature } from "./crypto";
export type { CustomDownloadOptions, ResolveHnsResponse } from "./download";
export type { CustomConnectorOptions, MySky } from "./mysky";
export type { CustomPinOptions, PinResponse } from "./pin";
export type { CustomGetEntryOptions, CustomSetEntryOptions, SignedRegistryEntry, RegistryEntry } from "./registry";
export type { CustomGetJSONOptions, CustomSetJSONOptions, JsonData, JSONResponse, RawBytesResponse } from "./skydb";
export type { CustomUploadOptions, UploadRequestResponse } from "./upload";
export type { ParseSkylinkOptions } from "./skylink/parse";
