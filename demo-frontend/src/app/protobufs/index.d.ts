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

export interface IPeople {
    person?: (IPerson[]|null);
}

export class People implements IPeople {
    constructor(properties?: IPeople);
    public person: IPerson[];
    public static create(properties?: IPeople): People;
    public static encode(message: IPeople, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IPeople, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): People;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): People;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): People;
    public static toObject(message: People, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IPerson {
    firstName: string;
    lastName: string;
    middleName?: (string|null);
}

export class Person implements IPerson {
    constructor(properties?: IPerson);
    public firstName: string;
    public lastName: string;
    public middleName: string;
    public static create(properties?: IPerson): Person;
    public static encode(message: IPerson, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IPerson, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Person;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Person;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Person;
    public static toObject(message: Person, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}
