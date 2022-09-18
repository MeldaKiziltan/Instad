import zmq
import time

# ZeroMQ Context
context = zmq.Context()

# Define the socket using the "Context"
sock = context.socket(zmq.PUSH)
sock.bind("tcp://127.0.0.1:5690")

id = 0

while True:
    time.sleep(1)

    # Message [id] - [message]
    message = "hello"

    sock.send_string(message)
