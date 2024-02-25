#!/usr/bin/env python3
"""
Description: Import async_comprehension from the previous file
and write a measure_runtime coroutine that will execute
async_comprehension four times in parallel using asyncio.gather.
measure_runtime should measure the total runtime and return it.
"""


from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> list[float]:
    """
    return list of values yielded by async_generator
    """
    return [value async for value in async_generator()]
