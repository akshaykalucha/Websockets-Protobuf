import testmessage_pb2

jack_message = testmessage_pb2.Message()

jack_message.name = "jack"
jack_message.data = "hi, this is test message"

john_message = testmessage_pb2.Message()
john_message.name = "john"
john_message.data = " hi, this is john doe"


s = (john_message.SerializeToString())
print(s)
print(john_message.ParseFromString(s)) #this gives me a integer instead of deserializing the byte data
multiple_messages = testmessage_pb2.Messages()

#multiple_messages.messages.append(jack_message) #appends one value to Messages
multiple_messages.messages.extend([jack_message, john_message]) #appends a list

#assert len(multiple_messages.messages) == 2 #checks if given statement is true or not

#assert multiple_messages.messages[0].name == "akshay"
 