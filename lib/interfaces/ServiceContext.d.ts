import { DocumentNode } from 'graphql';
import { BlockValue } from './Blockvalue';
export interface ServiceContext {
    db: unknown;
    id: string;
    state: BlockValue;
    variables: any;
    operationName: string | undefined;
    query: string | DocumentNode | undefined;
}
