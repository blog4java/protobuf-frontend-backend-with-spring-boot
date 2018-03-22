import * as $protobuf from "protobufjs";

export interface IEventPayload {
    paidBy: string;
    paidAmount: number;
}

export class EventPayload implements IEventPayload {
    constructor(properties?: IEventPayload);
    public paidBy: string;
    public paidAmount: number;
    public static create(properties?: IEventPayload): EventPayload;
    public static encode(message: IEventPayload, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEventPayload, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EventPayload;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EventPayload;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EventPayload;
    public static toObject(message: EventPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IPersonRequest {
    firstName: string;
    lastName: string;
    middleName?: (string|null);
}

export class PersonRequest implements IPersonRequest {
    constructor(properties?: IPersonRequest);
    public firstName: string;
    public lastName: string;
    public middleName: string;
    public static create(properties?: IPersonRequest): PersonRequest;
    public static encode(message: IPersonRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IPersonRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PersonRequest;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PersonRequest;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): PersonRequest;
    public static toObject(message: PersonRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}
