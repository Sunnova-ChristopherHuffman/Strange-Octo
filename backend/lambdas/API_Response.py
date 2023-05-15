import json

class API_Response:
    @staticmethod
    def _200(data={}):
        return {
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*',
            },
            'statusCode': 200,
            'body': json.dumps(data),
        }

    @staticmethod
    def _400(data={}):
        return {
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*',
            },
            'statusCode': 400,
            'body': json.dumps(data),
        }