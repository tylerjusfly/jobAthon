// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { ApplicantsModel, JobsModel } = initSchema(schema);

export { ApplicantsModel, JobsModel };
