// Find all our documentation at https://docs.near.org
import {
  NearBindgen,
  near,
  call,
  view,
  UnorderedMap,
  Vector,
} from "near-sdk-js";

@NearBindgen({})
class DIDContract {
  dids: UnorderedMap<DIDDocument>;

  constructor() {
    this.dids = new UnorderedMap<DIDDocument>("dids");
  }

  @call({})
  createDID({
    id,
    publicKey,
    serviceEndpoint,
  }: {
    id: string;
    publicKey: string;
    serviceEndpoint: string;
  }): DIDDocument {
    const sender = near.predecessorAccountId();
    if (this.dids.get(id)) {
      throw new Error("Did already Exist.");
    }

    const didDocument = new DIDDocument(id, publicKey, serviceEndpoint);
    this.dids.set(id, didDocument);
    return didDocument;
  }

  @view({})
  getDID({ id }: { id: string }): DIDDocument | null {
    return this.dids.get(id);
  }

  @call({})
  updateDID({
    id,
    publicKey,
    serviceEndpoint,
  }: {
    id: string;
    publicKey: string;
    serviceEndpoint: string;
  }): DIDDocument {
    if (!this.dids.get(id)) {
      throw new Error("DID does not exist");
    }
    const didDocument = new DIDDocument(id, publicKey, serviceEndpoint);
    this.dids.set(id, didDocument);
    return didDocument;
  }

  @view({})
  getAllDIDs(): DIDDocument[] {
    const allDIDs = this.dids.toArray();
    return allDIDs.map(([id, didDocument]) => didDocument);
  }
}

//create a class for the DID
class DIDDocument {
  id: string;
  publicKey: string;
  serviceEndpoint: string;

  constructor(id: string, publicKey: string, serviceEndpoint: string) {
    this.id = id;
    this.publicKey = publicKey;
    this.serviceEndpoint = serviceEndpoint;
  }
}
