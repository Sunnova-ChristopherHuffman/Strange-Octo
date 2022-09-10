export const Response = {
  _DefineResponse(statusCode: number, data = {}) {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Origin': '*',
        'X-Frame-Options': 'DENY'
      },
      statusCode,
      body: JSON.stringify(data)
    }
  },

  _200(data = {}) {
    return this._DefineResponse(200, data)
  },

  _400(data = {}) {
    return this._DefineResponse(400, data)
  },
}