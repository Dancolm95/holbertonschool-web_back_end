#!/usr/bin/env python3
"""
 type-annotated function floor which takes a float
 n as argument and returns the floor of the float.
    Arguments: n
"""


def floor(n: float) -> int:
    """
    Return int value less than or equal to n.
    """
    return int(n) if n >= 0 else int(n) - 1
