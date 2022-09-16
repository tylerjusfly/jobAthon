import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ApplicantsModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type JobsModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ApplicantsModel {
  readonly id: string;
  readonly jobId: string;
  readonly applicantMail: string;
  readonly linkedIn: string;
  readonly resumePdf: string;
  readonly fullname: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ApplicantsModel, ApplicantsModelMetaData>);
  static copyOf(source: ApplicantsModel, mutator: (draft: MutableModel<ApplicantsModel, ApplicantsModelMetaData>) => MutableModel<ApplicantsModel, ApplicantsModelMetaData> | void): ApplicantsModel;
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