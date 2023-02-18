import { InteractionObject } from '@pact-foundation/pact';
import { createPactClient } from '@test/helpers/getPactClient';
import axios, { AxiosResponse } from 'axios';

describe('GET /', () => {
  const client = createPactClient({
    consumer: 'fastify-api-boilerpate-test',
    provider: 'fastify-api-boilerpate',
    port: 3000,
    log: './logs/pact.log',
    dir: './pacts',
  });

  const getContract: InteractionObject = {
    state: 'base state',
    uponReceiving: 'a request for the root path',
    withRequest: {
      method: 'GET',
      path: '/',
    },
    willRespondWith: {
      status: 200,
    },
  };

  beforeEach(() => {
    client.addInteraction(getContract);
  });

  it('should return 200 status code', async () => {
    const response: AxiosResponse = await axios.get(
      client.mockService.baseUrl + '/'
    );
    expect(response.status).toBe(200);
  });
});
