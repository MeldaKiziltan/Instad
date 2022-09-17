#API Key: sk-RrxHMIj8vuBDXJhjMySKzGAolQlb9DMFod2TBUQqEr2n6sDM

import getpass, os

# NB: host url is not prepended with \"https\" nor does it have a trailing slash.
os.environ['STABILITY_HOST'] = 'grpc.stability.ai:443'

# To get your API key, visit https://beta.dreamstudio.ai/membership
os.environ['STABILITY_KEY'] = getpass.getpass('sk-RrxHMIj8vuBDXJhjMySKzGAolQlb9DMFod2TBUQqEr2n6sDM')
