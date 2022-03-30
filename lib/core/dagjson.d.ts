import * as Block from 'multiformats/block';
import { IDataBuilder } from '../interfaces/IBuilder';
export declare class DAGJsonService implements IDataBuilder {
    build(value: object): Promise<Block.Block<unknown>>;
    loadFromCID(kvstore: any, key: string): Promise<Block.Block<unknown>>;
    loadFromKey(kvstore: any, key: string): Promise<Block.Block<unknown>>;
}
