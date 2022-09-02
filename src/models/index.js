// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { GIGS } = initSchema(schema);

export {
  GIGS
};