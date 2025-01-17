/* eslint-disable */
/*Proudly generated by GenDocu.com*/
// source: google/api/context.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.google.api.Context', null, global);
goog.exportSymbol('proto.google.api.ContextRule', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.Context = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.Context.repeatedFields_, null);
};
goog.inherits(proto.google.api.Context, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.Context.displayName = 'proto.google.api.Context';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.ContextRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.ContextRule.repeatedFields_, null);
};
goog.inherits(proto.google.api.ContextRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.ContextRule.displayName = 'proto.google.api.ContextRule';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.Context.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.Context.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.Context.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.Context} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Context.toObject = function(includeInstance, msg) {
  var f, obj = {
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.google.api.ContextRule.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.Context}
 */
proto.google.api.Context.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.Context;
  return proto.google.api.Context.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.Context} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.Context}
 */
proto.google.api.Context.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.api.ContextRule;
      reader.readMessage(value,proto.google.api.ContextRule.deserializeBinaryFromReader);
      msg.addRules(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.Context.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.Context.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.Context} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Context.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.api.ContextRule.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ContextRule rules = 1;
 * @return {!Array<!proto.google.api.ContextRule>}
 */
proto.google.api.Context.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.google.api.ContextRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.ContextRule, 1));
};


/**
 * @param {!Array<!proto.google.api.ContextRule>} value
 * @return {!proto.google.api.Context} returns this
*/
proto.google.api.Context.prototype.setRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.api.ContextRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.ContextRule}
 */
proto.google.api.Context.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.api.ContextRule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.Context} returns this
 */
proto.google.api.Context.prototype.clearRulesList = function() {
  return this.setRulesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.ContextRule.repeatedFields_ = [2,3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.ContextRule.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.ContextRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.ContextRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.ContextRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    selector: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requestedList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    providedList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    allowedRequestExtensionsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    allowedResponseExtensionsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.ContextRule}
 */
proto.google.api.ContextRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.ContextRule;
  return proto.google.api.ContextRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.ContextRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.ContextRule}
 */
proto.google.api.ContextRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelector(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addRequested(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addProvided(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowedRequestExtensions(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowedResponseExtensions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.ContextRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.ContextRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.ContextRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.ContextRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelector();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequestedList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getProvidedList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getAllowedRequestExtensionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getAllowedResponseExtensionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string selector = 1;
 * @return {string}
 */
proto.google.api.ContextRule.prototype.getSelector = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.ContextRule} returns this
 */
proto.google.api.ContextRule.prototype.setSelector = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string requested = 2;
 * @return {!Array<string>}
 */
proto.google.api.ContextRule.prototype.getRequestedList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.api.ContextRule} returns this
 */
proto.google.api.ContextRule.prototype.setRequestedList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.api.ContextRule} returns this
 */
proto.google.api.ContextRule.prototype.addRequested = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.ContextRule} returns this
 */
proto.google.api.ContextRule.prototype.clearRequestedList = function() {
  return this.setRequestedList([]);
};


/**
 * repeated string provided = 3;
 * @return {!Array<string>}
 */
proto.google.api.ContextRule.prototype.getProvidedList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.api.ContextRule} returns this
 */
proto.google.api.ContextRule.prototype.setProvidedList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.api.ContextRule} returns this
 */
proto.google.api.ContextRule.prototype.addProvided = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.ContextRule} returns this
 */
proto.google.api.ContextRule.prototype.clearProvidedList = function() {
  return this.setProvidedList([]);
};


/**
 * repeated string allowed_request_extensions = 4;
 * @return {!Array<string>}
 */
proto.google.api.ContextRule.prototype.getAllowedRequestExtensionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.api.ContextRule} returns this
 */
proto.google.api.ContextRule.prototype.setAllowedRequestExtensionsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.api.ContextRule} returns this
 */
proto.google.api.ContextRule.prototype.addAllowedRequestExtensions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.ContextRule} returns this
 */
proto.google.api.ContextRule.prototype.clearAllowedRequestExtensionsList = function() {
  return this.setAllowedRequestExtensionsList([]);
};


/**
 * repeated string allowed_response_extensions = 5;
 * @return {!Array<string>}
 */
proto.google.api.ContextRule.prototype.getAllowedResponseExtensionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.api.ContextRule} returns this
 */
proto.google.api.ContextRule.prototype.setAllowedResponseExtensionsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.api.ContextRule} returns this
 */
proto.google.api.ContextRule.prototype.addAllowedResponseExtensions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.ContextRule} returns this
 */
proto.google.api.ContextRule.prototype.clearAllowedResponseExtensionsList = function() {
  return this.setAllowedResponseExtensionsList([]);
};


goog.object.extend(exports, proto.google.api);
