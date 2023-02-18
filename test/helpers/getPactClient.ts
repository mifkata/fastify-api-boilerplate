import { Pact, PactOptions } from '@pact-foundation/pact';

export function createPactClient(options: PactOptions) {
  const client = new Pact(options);

  beforeAll(() => client.setup());
  afterEach(() => client.verify());
  afterAll(() => client.finalize());

  return client;
}
