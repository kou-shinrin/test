class Response {
  constructor(body, statusCode = 200) {
    this.isBase64Encoded = false;
    this.headers = {
      'Content-Type': 'application/json',
    };
    this.statusCode = statusCode;
    this.body = body;
  }

  get _attributes() {
    return {
      isBase64Encoded: this.isBase64Encoded,
      headers: this.headers,
      statusCode: this.statusCode,
      body: this.body,
    }
  }

  static success(payload) {
    const body = JSON.stringify(payload);
    return new Response(body)._attributes;
  }

  static error(error, statusCode = 500) {
    const body = JSON.stringify({message: error.message});
    return new Response(body, statusCode)._attributes;
  }
}

module.exports = {Response};

