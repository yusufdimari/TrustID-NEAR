# NEAR DID Contract

This repository contains a NEAR smart contract for managing Decentralized Identifiers (DIDs) on the NEAR blockchain.

## Overview

The contract provides functionality to:

- Create a DID for an account.
- Retrieve a DID by its ID.
- Update an existing DID.
- Retrieve all DIDs.

## Contract Methods

### `createDID`

Creates a new DID for the sender.

**Parameters:**

- `id` (string): Unique identifier for the DID.
- `publicKey` (string): Public key associated with the DID.
- `serviceEndpoint` (string): Service endpoint URL for the DID.

**Returns:**

- `DIDDocument`: The newly created DID document.

### `getDID`

Retrieves a DID by its ID.

**Parameters:**

- `id` (string): Unique identifier for the DID.

**Returns:**

- `DIDDocument | null`: The DID document if found, otherwise `null`.

### `updateDID`

Updates an existing DID.

**Parameters:**

- `id` (string): Unique identifier for the DID.
- `publicKey` (string): New public key associated with the DID.
- `serviceEndpoint` (string): New service endpoint URL for the DID.

**Returns:**

- `DIDDocument`: The updated DID document.

### `getAllDIDs`

Retrieves all DIDs.

**Returns:**

- `DIDDocument[]`: Array of all DID documents.

## Deployment

1. **Build the Contract:**
   ```bash
   npm run build
   ```
