import { APIGatewayProxyEvent } from 'aws-lambda'
import { Response } from '../lib/Response'

export async function handler(event: APIGatewayProxyEvent) {
  console.log(event.pathParameters);
  return Response._200({
    message: 'Hello World'
  })
}