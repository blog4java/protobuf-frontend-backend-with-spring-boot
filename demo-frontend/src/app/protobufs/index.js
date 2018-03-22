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
    
    $root.PersonRequest = (function() {
    
        /**
         * Properties of a PersonRequest.
         * @exports IPersonRequest
         * @interface IPersonRequest
         * @property {string} firstName PersonRequest firstName
         * @property {string} lastName PersonRequest lastName
         * @property {string|null} [middleName] PersonRequest middleName
         */
    
        /**
         * Constructs a new PersonRequest.
         * @exports PersonRequest
         * @classdesc Represents a PersonRequest.
         * @implements IPersonRequest
         * @constructor
         * @param {IPersonRequest=} [properties] Properties to set
         */
        function PersonRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PersonRequest firstName.
         * @member {string} firstName
         * @memberof PersonRequest
         * @instance
         */
        PersonRequest.prototype.firstName = "";
    
        /**
         * PersonRequest lastName.
         * @member {string} lastName
         * @memberof PersonRequest
         * @instance
         */
        PersonRequest.prototype.lastName = "";
    
        /**
         * PersonRequest middleName.
         * @member {string} middleName
         * @memberof PersonRequest
         * @instance
         */
        PersonRequest.prototype.middleName = "";
    
        /**
         * Creates a new PersonRequest instance using the specified properties.
         * @function create
         * @memberof PersonRequest
         * @static
         * @param {IPersonRequest=} [properties] Properties to set
         * @returns {PersonRequest} PersonRequest instance
         */
        PersonRequest.create = function create(properties) {
            return new PersonRequest(properties);
        };
    
        /**
         * Encodes the specified PersonRequest message. Does not implicitly {@link PersonRequest.verify|verify} messages.
         * @function encode
         * @memberof PersonRequest
         * @static
         * @param {IPersonRequest} message PersonRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PersonRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.firstName);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.lastName);
            if (message.middleName != null && message.hasOwnProperty("middleName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.middleName);
            return writer;
        };
    
        /**
         * Encodes the specified PersonRequest message, length delimited. Does not implicitly {@link PersonRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PersonRequest
         * @static
         * @param {IPersonRequest} message PersonRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PersonRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PersonRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PersonRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PersonRequest} PersonRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PersonRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PersonRequest();
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
         * Decodes a PersonRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PersonRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PersonRequest} PersonRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PersonRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PersonRequest message.
         * @function verify
         * @memberof PersonRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PersonRequest.verify = function verify(message) {
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
         * Creates a PersonRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PersonRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PersonRequest} PersonRequest
         */
        PersonRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.PersonRequest)
                return object;
            var message = new $root.PersonRequest();
            if (object.firstName != null)
                message.firstName = String(object.firstName);
            if (object.lastName != null)
                message.lastName = String(object.lastName);
            if (object.middleName != null)
                message.middleName = String(object.middleName);
            return message;
        };
    
        /**
         * Creates a plain object from a PersonRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PersonRequest
         * @static
         * @param {PersonRequest} message PersonRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PersonRequest.toObject = function toObject(message, options) {
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
         * Converts this PersonRequest to JSON.
         * @function toJSON
         * @memberof PersonRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PersonRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PersonRequest;
    })();

    return $root;
});
