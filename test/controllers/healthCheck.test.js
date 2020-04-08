const request = require('supertest');

const app = require('../../app');

describe('GET /health', () => {
  let response = null;
  beforeAll(async done => {
    response = await request(app).get('/health');
    return done();
  });

  it('status is 200', () => {
    expect(response.status).toBe(200);
  });
  it('response has uptime property', () => {
    expect(response.body).toHaveProperty('uptime');
  });
  it('uptime property is a number', () => {
    expect(typeof response.body.uptime).toBe('number');
  });
});

describe('GET redis_health', () => {
  let response = null;
  beforeAll(async done => {
    response = await request(app).get('/redis_health');
    return done();
  });

  it('status is 200', () => {
    expect(response.status).toBe(200);
  });
  it('response has result property', () => {
    expect(response.body).toHaveProperty('result');
  });
  it('result property has ok value', () => {
    expect(response.body.result).toBe('ok');
  });
});