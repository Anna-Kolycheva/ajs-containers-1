import Team from '../app';

test('add', () => {
  const team = new Team();
  team.add('goose');
  team.add('gnome');
  expect([...team.members]).toEqual(['goose', 'gnome']);
});

test('toArray', () => {
  const team = new Team();
  team.add('goose');
  team.add('gnome');
  expect(team.toArray()).toEqual(['goose', 'gnome']);
});

test('addAll', () => {
  const team = new Team();
  team.addAll('goose', 'gnome', 'fairy');
  expect(team.toArray()).toEqual(['goose', 'gnome', 'fairy']);
});

test('Error', () => {
  const team = new Team();
  team.add('goose');
  team.add('gnome');
  expect(() => { team.add('goose'); }).toThrowError('Персонаж уже в команде!');
});
