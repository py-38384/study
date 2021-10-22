import socket
s = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
s.bind(("127.0.0.1",9999))
print("Waiting for connection")
s.listen(1)
while True:
	conn.addr = s.accept()
	print("Connected to, ",addr)
	conn.send("Hi from piyal Server")
	conn.close
