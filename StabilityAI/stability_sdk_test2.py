
import io
import os
import warnings

from PIL import Image
from stability_sdk import client
import stability_sdk.interfaces.gooseai.generation.generation_pb2 as generation


stability_api = client.StabilityInference(
    key='sk-RrxHMIj8vuBDXJhjMySKzGAolQlb9DMFod2TBUQqEr2n6sDM', 
    verbose=True,
)

# the object returned is a python generator
answers = stability_api.generate(
    prompt="complex crystal",
    #seed=34567, # if provided, specifying a random seed makes results deterministic
    steps=100, # defaults to 50 if not specified
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
            img = img.save("/Users/shabana/Coding/Instad/StabilityAI/pre_ad.jpg");

# the object returned is a python generator
answers = stability_api.generate(
    prompt="complex crystal, lab-made, translucent, multi-faceted",
    init_image=img,
    #seed=34567, # if provided, specifying a random seed makes results deterministic
    start_schedule=0.6,
    steps=100, # defaults to 50 if not specified
)

for resp in answers:
    for artifact in resp.artifacts:
        if artifact.finish_reason == generation.FILTER:
            warnings.warn(
                "Your request activated the API's safety filters and could not be processed."
                "Please modify the prompt and try again.")
        if artifact.type == generation.ARTIFACT_IMAGE:
            img2 = Image.open(io.BytesIO(artifact.binary))
            img2.show()
            img2 = img2.save("/Users/shabana/Coding/Instad/StabilityAI/ad.jpg");
