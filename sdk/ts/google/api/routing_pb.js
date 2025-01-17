/* eslint-disable */
/*Proudly generated by GenDocu.com*/
// source: google/api/routing.proto
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

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.google.api.RoutingParameter', null, global);
goog.exportSymbol('proto.google.api.RoutingRule', null, global);
goog.exportSymbol('proto.google.api.routing', null, global);
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
proto.google.api.RoutingRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.RoutingRule.repeatedFields_, null);
};
goog.inherits(proto.google.api.RoutingRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.RoutingRule.displayName = 'proto.google.api.RoutingRule';
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
proto.google.api.RoutingParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.RoutingParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.RoutingParameter.displayName = 'proto.google.api.RoutingParameter';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.RoutingRule.repeatedFields_ = [2];



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
proto.google.api.RoutingRule.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.RoutingRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.RoutingRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.RoutingRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    routingParametersList: jspb.Message.toObjectList(msg.getRoutingParametersList(),
    proto.google.api.RoutingParameter.toObject, includeInstance)
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
 * @return {!proto.google.api.RoutingRule}
 */
proto.google.api.RoutingRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.RoutingRule;
  return proto.google.api.RoutingRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.RoutingRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.RoutingRule}
 */
proto.google.api.RoutingRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.google.api.RoutingParameter;
      reader.readMessage(value,proto.google.api.RoutingParameter.deserializeBinaryFromReader);
      msg.addRoutingParameters(value);
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
proto.google.api.RoutingRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.RoutingRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.RoutingRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.RoutingRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoutingParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.api.RoutingParameter.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RoutingParameter routing_parameters = 2;
 * @return {!Array<!proto.google.api.RoutingParameter>}
 */
proto.google.api.RoutingRule.prototype.getRoutingParametersList = function() {
  return /** @type{!Array<!proto.google.api.RoutingParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.RoutingParameter, 2));
};


/**
 * @param {!Array<!proto.google.api.RoutingParameter>} value
 * @return {!proto.google.api.RoutingRule} returns this
*/
proto.google.api.RoutingRule.prototype.setRoutingParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.api.RoutingParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.RoutingParameter}
 */
proto.google.api.RoutingRule.prototype.addRoutingParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.api.RoutingParameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.RoutingRule} returns this
 */
proto.google.api.RoutingRule.prototype.clearRoutingParametersList = function() {
  return this.setRoutingParametersList([]);
};





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
proto.google.api.RoutingParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.RoutingParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.RoutingParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.RoutingParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pathTemplate: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.api.RoutingParameter}
 */
proto.google.api.RoutingParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.RoutingParameter;
  return proto.google.api.RoutingParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.RoutingParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.RoutingParameter}
 */
proto.google.api.RoutingParameter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPathTemplate(value);
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
proto.google.api.RoutingParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.RoutingParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.RoutingParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.RoutingParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPathTemplate();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string field = 1;
 * @return {string}
 */
proto.google.api.RoutingParameter.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.RoutingParameter} returns this
 */
proto.google.api.RoutingParameter.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path_template = 2;
 * @return {string}
 */
proto.google.api.RoutingParameter.prototype.getPathTemplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.RoutingParameter} returns this
 */
proto.google.api.RoutingParameter.prototype.setPathTemplate = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `routing`.
 * @type {!jspb.ExtensionFieldInfo<!proto.google.api.RoutingRule>}
 */
proto.google.api.routing = new jspb.ExtensionFieldInfo(
    72295729,
    {routing: 0},
    proto.google.api.RoutingRule,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.google.api.RoutingRule.toObject),
    0);

google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[72295729] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.api.routing,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.google.api.RoutingRule.serializeBinaryToWriter,
    proto.google.api.RoutingRule.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MethodOptions.extensions[72295729] = proto.google.api.routing;

goog.object.extend(exports, proto.google.api);
