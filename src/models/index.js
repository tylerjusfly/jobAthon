// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { ApplicantModel, ApplicantssModel, JobsModel } = initSchema(schema);

export { ApplicantModel, ApplicantssModel, JobsModel };
