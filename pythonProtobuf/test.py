import todolist_pb2

my_list = todolist_pb2.TodoList()
my_list.owner_id = 1234
my_list.owner_name = "Akshay"

first_item = my_list.todos.add()
first_item.state = todolist_pb2.TaskState.Value("TASK_DONE")
first_item.task = "Test ProtoBuf for Python"
first_item.due_date = "31.10.2019"


with open("./serializedFile", "wb") as fd:
    fd.write(my_list.SerializeToString())


my_list = todolist_pb2.TodoList()
with open("./serializedFile", "rb") as fd:
    print(my_list.ParseFromString(fd.read()))