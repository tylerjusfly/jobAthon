// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { JobsModel } = initSchema(schema);

export { JobsModel };
