// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { ApplicantssModel, JobsModel } = initSchema(schema);

export { ApplicantssModel, JobsModel };
