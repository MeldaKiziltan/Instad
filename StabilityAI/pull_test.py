import zmq
# ZeroMQ Context
context = zmq.Context()

# Define the socket using the "Context"
sock = context.socket(zmq.PULL)
sock.connect("tcp://127.0.0.1:5690")

while True:
    message = sock.recv()
    print ("Received: {msg}".format(msg=message))
