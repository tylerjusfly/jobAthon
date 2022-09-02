import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type GIGSMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class GIGS {
  readonly id: string;
  readonly title: string;
  readonly position: string;
  readonly location: string;
  readonly type: string;
  readonly company: string;
  readonly tags: string[];
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<GIGS, GIGSMetaData>);
  static copyOf(source: GIGS, mutator: (draft: MutableModel<GIGS, GIGSMetaData>) => MutableModel<GIGS, GIGSMetaData> | void): GIGS;
}