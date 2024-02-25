#!/usr/bin/env python3
"""
"""


from time import time
from asyncio import run
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    """
    time_0 = time()
    run(wait_n(n, max_delay))
    time_1 = time ()
    elapsed_time = time_1 - time_0
    return elapsed_time / n
