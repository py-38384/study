import socket
s = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
s.connect(("127.0.0.1",9999))
print("Connected")
print("Server sent, ",s.recv(1024))
s.close()