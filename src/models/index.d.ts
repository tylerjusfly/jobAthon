import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type JobsModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class JobsModel {
  readonly id: string;
  readonly owner: string;
  readonly position: string;
  readonly location: string;
  readonly type: string;
  readonly company: string;
  readonly tags: string[];
  readonly logo?: string | null;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<JobsModel, JobsModelMetaData>);
  static copyOf(source: JobsModel, mutator: (draft: MutableModel<JobsModel, JobsModelMetaData>) => MutableModel<JobsModel, JobsModelMetaData> | void): JobsModel;
}