describe('CI failing scenario', () => {
  it('should fail on purpose for CI demo', () => {
    expect(1 + 1).toBe(3);
  });
});
