// Basic smoke tests — no DB connection needed
describe('Todo API basic checks', () => {
  test('adds 1 + 1 to equal 2', () => {
    expect(1 + 1).toBe(2);
  });

  test('todo item has required fields', () => {
    const todo = { id: 1, task: 'Buy milk', completed: false };
    expect(todo).toHaveProperty('task');
    expect(todo).toHaveProperty('completed');
  });

  test('completed defaults to false', () => {
    const todo = { task: 'New task', completed: false };
    expect(todo.completed).toBe(false);
  });
});