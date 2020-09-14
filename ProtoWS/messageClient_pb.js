var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();


proto.TestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.TestMessage.displayName = 'proto.TestMessage';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
proto.TestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.TestMessage.toObject(opt_includeInstance, this);
};
proto.TestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    sometext: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}

proto.TestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TestMessage;
  return proto.TestMessage.deserializeBinaryFromReader(msg, reader);
};
proto.TestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSometext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};
proto.TestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
proto.TestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSometext();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};
proto.TestMessage.prototype.getSometext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
proto.TestMessage.prototype.setSometext = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

goog.object.extend(exports, proto);
