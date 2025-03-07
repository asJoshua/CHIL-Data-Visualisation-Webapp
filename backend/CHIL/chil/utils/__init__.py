"""
Creates the views package
"""

from .auth import (
    authenticate_by_group
)

from .services import (
    model_update
)


__all__ = [
    'authenticate_by_group',
    'model_update'
]
