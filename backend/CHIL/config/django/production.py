from .base import *
from config.env import env

DEBUG = env('DEBUG', default=False)

ALLOWED_HOSTS = env.list("ALLOWED_HOSTS", default=[])