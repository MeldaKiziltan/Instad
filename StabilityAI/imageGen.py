import zmq
import io
import os
import warnings
import json

from PIL import Image
from stability_sdk import client
import stability_sdk.interfaces.gooseai.generation.generation_pb2 as generation

# ZeroMQ Context
context = zmq.Context()

# Define the socket using the "Context"
sock = context.socket(zmq.PULL)
sock.connect("tcp://127.0.0.1:5690")
sock1 = context.socket(zmq.PUSH)
sock1.connect("tcp://127.0.0.1:5600")

stability_api = client.StabilityInference(
    key='sk-RrxHMIj8vuBDXJhjMySKzGAolQlb9DMFod2TBUQqEr2n6sDM', 
    verbose=True,
)


while True:
    p_genre = sock.recv()
    p_type = sock.recv()
    p_keys = sock.recv()
    print ("%s " % (p_genre))

    #genre type, keywords
    # the object returned is a python generator
    answers = stability_api.generate(
        #prompt= "%s %s, %s" % (p_genre, p_type, p_keys),
        prompt = str("%s %s, %s" % (p_genre, p_type, p_keys)).encode("utf-8").decode("utf-8"),
        #seed=34567, # if provided, specifying a random seed makes results deterministic
        steps=50, # defaults to 50 if not specified
    )
    # iterating over the generator produces the api response
    for resp in answers:
        for artifact in resp.artifacts:
            if artifact.finish_reason == generation.FILTER:
                warnings.warn(
                    "Your request activated the API's safety filters and could not be processed."
                    "Please modify the prompt and try again.")
            if artifact.type == generation.ARTIFACT_IMAGE:
                img = Image.open(io.BytesIO(artifact.binary))
                img.show()
                img = img.save("/Users/shabana/Coding/Instad/StabilityAI/ad.jpg");


    sock1.send_string("ad.jpg")
    print("done")