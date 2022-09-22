import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ApplicantModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ApplicantssModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type JobsModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ApplicantModel {
  readonly id: string;
  readonly jobId?: string | null;
  readonly applicantMail?: string | null;
  readonly linkedIn: string;
  readonly resumePdf?: string | null;
  readonly fullname: string;
  readonly company: string;
  readonly jobPosition: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ApplicantModel, ApplicantModelMetaData>);
  static copyOf(source: ApplicantModel, mutator: (draft: MutableModel<ApplicantModel, ApplicantModelMetaData>) => MutableModel<ApplicantModel, ApplicantModelMetaData> | void): ApplicantModel;
}

export declare class ApplicantssModel {
  readonly id: string;
  readonly jobId: string;
  readonly applicantMail: string;
  readonly linkedIn: string;
  readonly resumePdf: string;
  readonly fullname: string;
  readonly company: string;
  readonly jobPosition: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ApplicantssModel, ApplicantssModelMetaData>);
  static copyOf(source: ApplicantssModel, mutator: (draft: MutableModel<ApplicantssModel, ApplicantssModelMetaData>) => MutableModel<ApplicantssModel, ApplicantssModelMetaData> | void): ApplicantssModel;
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