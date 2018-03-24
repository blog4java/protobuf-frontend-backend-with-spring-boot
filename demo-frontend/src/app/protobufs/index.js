/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.EventPayload = (function() {
    
        /**
         * Properties of an EventPayload.
         * @exports IEventPayload
         * @interface IEventPayload
         * @property {string} paidBy EventPayload paidBy
         * @property {number} paidAmount EventPayload paidAmount
         */
    
        /**
         * Constructs a new EventPayload.
         * @exports EventPayload
         * @classdesc Represents an EventPayload.
         * @implements IEventPayload
         * @constructor
         * @param {IEventPayload=} [properties] Properties to set
         */
        function EventPayload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * EventPayload paidBy.
         * @member {string} paidBy
         * @memberof EventPayload
         * @instance
         */
        EventPayload.prototype.paidBy = "";
    
        /**
         * EventPayload paidAmount.
         * @member {number} paidAmount
         * @memberof EventPayload
         * @instance
         */
        EventPayload.prototype.paidAmount = 0;
    
        /**
         * Creates a new EventPayload instance using the specified properties.
         * @function create
         * @memberof EventPayload
         * @static
         * @param {IEventPayload=} [properties] Properties to set
         * @returns {EventPayload} EventPayload instance
         */
        EventPayload.create = function create(properties) {
            return new EventPayload(properties);
        };
    
        /**
         * Encodes the specified EventPayload message. Does not implicitly {@link EventPayload.verify|verify} messages.
         * @function encode
         * @memberof EventPayload
         * @static
         * @param {IEventPayload} message EventPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.paidBy);
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.paidAmount);
            return writer;
        };
    
        /**
         * Encodes the specified EventPayload message, length delimited. Does not implicitly {@link EventPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof EventPayload
         * @static
         * @param {IEventPayload} message EventPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EventPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an EventPayload message from the specified reader or buffer.
         * @function decode
         * @memberof EventPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {EventPayload} EventPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventPayload.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventPayload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.paidBy = reader.string();
                    break;
                case 3:
                    message.paidAmount = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("paidBy"))
                throw $util.ProtocolError("missing required 'paidBy'", { instance: message });
            if (!message.hasOwnProperty("paidAmount"))
                throw $util.ProtocolError("missing required 'paidAmount'", { instance: message });
            return message;
        };
    
        /**
         * Decodes an EventPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof EventPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {EventPayload} EventPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EventPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an EventPayload message.
         * @function verify
         * @memberof EventPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EventPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.paidBy))
                return "paidBy: string expected";
            if (typeof message.paidAmount !== "number")
                return "paidAmount: number expected";
            return null;
        };
    
        /**
         * Creates an EventPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof EventPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {EventPayload} EventPayload
         */
        EventPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.EventPayload)
                return object;
            var message = new $root.EventPayload();
            if (object.paidBy != null)
                message.paidBy = String(object.paidBy);
            if (object.paidAmount != null)
                message.paidAmount = Number(object.paidAmount);
            return message;
        };
    
        /**
         * Creates a plain object from an EventPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof EventPayload
         * @static
         * @param {EventPayload} message EventPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EventPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.paidBy = "";
                object.paidAmount = 0;
            }
            if (message.paidBy != null && message.hasOwnProperty("paidBy"))
                object.paidBy = message.paidBy;
            if (message.paidAmount != null && message.hasOwnProperty("paidAmount"))
                object.paidAmount = options.json && !isFinite(message.paidAmount) ? String(message.paidAmount) : message.paidAmount;
            return object;
        };
    
        /**
         * Converts this EventPayload to JSON.
         * @function toJSON
         * @memberof EventPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EventPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return EventPayload;
    })();
    
    $root.People = (function() {
    
        /**
         * Properties of a People.
         * @exports IPeople
         * @interface IPeople
         * @property {Array.<IPerson>|null} [person] People person
         */
    
        /**
         * Constructs a new People.
         * @exports People
         * @classdesc Represents a People.
         * @implements IPeople
         * @constructor
         * @param {IPeople=} [properties] Properties to set
         */
        function People(properties) {
            this.person = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * People person.
         * @member {Array.<IPerson>} person
         * @memberof People
         * @instance
         */
        People.prototype.person = $util.emptyArray;
    
        /**
         * Creates a new People instance using the specified properties.
         * @function create
         * @memberof People
         * @static
         * @param {IPeople=} [properties] Properties to set
         * @returns {People} People instance
         */
        People.create = function create(properties) {
            return new People(properties);
        };
    
        /**
         * Encodes the specified People message. Does not implicitly {@link People.verify|verify} messages.
         * @function encode
         * @memberof People
         * @static
         * @param {IPeople} message People message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        People.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.person != null && message.person.length)
                for (var i = 0; i < message.person.length; ++i)
                    $root.Person.encode(message.person[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified People message, length delimited. Does not implicitly {@link People.verify|verify} messages.
         * @function encodeDelimited
         * @memberof People
         * @static
         * @param {IPeople} message People message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        People.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a People message from the specified reader or buffer.
         * @function decode
         * @memberof People
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {People} People
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        People.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.People();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.person && message.person.length))
                        message.person = [];
                    message.person.push($root.Person.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a People message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof People
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {People} People
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        People.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a People message.
         * @function verify
         * @memberof People
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        People.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.person != null && message.hasOwnProperty("person")) {
                if (!Array.isArray(message.person))
                    return "person: array expected";
                for (var i = 0; i < message.person.length; ++i) {
                    var error = $root.Person.verify(message.person[i]);
                    if (error)
                        return "person." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a People message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof People
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {People} People
         */
        People.fromObject = function fromObject(object) {
            if (object instanceof $root.People)
                return object;
            var message = new $root.People();
            if (object.person) {
                if (!Array.isArray(object.person))
                    throw TypeError(".People.person: array expected");
                message.person = [];
                for (var i = 0; i < object.person.length; ++i) {
                    if (typeof object.person[i] !== "object")
                        throw TypeError(".People.person: object expected");
                    message.person[i] = $root.Person.fromObject(object.person[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a People message. Also converts values to other types if specified.
         * @function toObject
         * @memberof People
         * @static
         * @param {People} message People
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        People.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.person = [];
            if (message.person && message.person.length) {
                object.person = [];
                for (var j = 0; j < message.person.length; ++j)
                    object.person[j] = $root.Person.toObject(message.person[j], options);
            }
            return object;
        };
    
        /**
         * Converts this People to JSON.
         * @function toJSON
         * @memberof People
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        People.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return People;
    })();
    
    $root.Person = (function() {
    
        /**
         * Properties of a Person.
         * @exports IPerson
         * @interface IPerson
         * @property {string} firstName Person firstName
         * @property {string} lastName Person lastName
         * @property {string|null} [middleName] Person middleName
         */
    
        /**
         * Constructs a new Person.
         * @exports Person
         * @classdesc Represents a Person.
         * @implements IPerson
         * @constructor
         * @param {IPerson=} [properties] Properties to set
         */
        function Person(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Person firstName.
         * @member {string} firstName
         * @memberof Person
         * @instance
         */
        Person.prototype.firstName = "";
    
        /**
         * Person lastName.
         * @member {string} lastName
         * @memberof Person
         * @instance
         */
        Person.prototype.lastName = "";
    
        /**
         * Person middleName.
         * @member {string} middleName
         * @memberof Person
         * @instance
         */
        Person.prototype.middleName = "";
    
        /**
         * Creates a new Person instance using the specified properties.
         * @function create
         * @memberof Person
         * @static
         * @param {IPerson=} [properties] Properties to set
         * @returns {Person} Person instance
         */
        Person.create = function create(properties) {
            return new Person(properties);
        };
    
        /**
         * Encodes the specified Person message. Does not implicitly {@link Person.verify|verify} messages.
         * @function encode
         * @memberof Person
         * @static
         * @param {IPerson} message Person message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Person.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.firstName);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.lastName);
            if (message.middleName != null && message.hasOwnProperty("middleName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.middleName);
            return writer;
        };
    
        /**
         * Encodes the specified Person message, length delimited. Does not implicitly {@link Person.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Person
         * @static
         * @param {IPerson} message Person message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Person.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Person message from the specified reader or buffer.
         * @function decode
         * @memberof Person
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Person} Person
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Person.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Person();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.firstName = reader.string();
                    break;
                case 2:
                    message.lastName = reader.string();
                    break;
                case 3:
                    message.middleName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("firstName"))
                throw $util.ProtocolError("missing required 'firstName'", { instance: message });
            if (!message.hasOwnProperty("lastName"))
                throw $util.ProtocolError("missing required 'lastName'", { instance: message });
            return message;
        };
    
        /**
         * Decodes a Person message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Person
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Person} Person
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Person.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Person message.
         * @function verify
         * @memberof Person
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Person.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.firstName))
                return "firstName: string expected";
            if (!$util.isString(message.lastName))
                return "lastName: string expected";
            if (message.middleName != null && message.hasOwnProperty("middleName"))
                if (!$util.isString(message.middleName))
                    return "middleName: string expected";
            return null;
        };
    
        /**
         * Creates a Person message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Person
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Person} Person
         */
        Person.fromObject = function fromObject(object) {
            if (object instanceof $root.Person)
                return object;
            var message = new $root.Person();
            if (object.firstName != null)
                message.firstName = String(object.firstName);
            if (object.lastName != null)
                message.lastName = String(object.lastName);
            if (object.middleName != null)
                message.middleName = String(object.middleName);
            return message;
        };
    
        /**
         * Creates a plain object from a Person message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Person
         * @static
         * @param {Person} message Person
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Person.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.firstName = "";
                object.lastName = "";
                object.middleName = "";
            }
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                object.firstName = message.firstName;
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                object.lastName = message.lastName;
            if (message.middleName != null && message.hasOwnProperty("middleName"))
                object.middleName = message.middleName;
            return object;
        };
    
        /**
         * Converts this Person to JSON.
         * @function toJSON
         * @memberof Person
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Person.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Person;
    })();

    return $root;
});
