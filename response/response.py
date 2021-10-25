import json

from starlette.responses import JSONResponse


def msg(code: int = 0, message: str = None, data: [str | int | list | dict | tuple] = None):
    _content = {
        'code': code
    }
    if message is not None:
        _content['message'] = message
    if data is not None:
        _content['data'] = data
    """
    if data is not None:
        if isinstance(data, dict) or isinstance(data, list) or isinstance(data, tuple):
            _content['data'] = json.dumps(data)
        elif isinstance(data, int):
            _content['data'] = str(data)
        else:
            _content['data'] = data
    """
    return JSONResponse(
        status_code=200,
        content=_content
    )
