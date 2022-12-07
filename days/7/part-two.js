const { getInput } = require('./input');

function getResult(input = getInput()) {
  const tree = {};
  let currentPath = '';
  input.forEach((line) => {
    if (isCurrentDirectoryCommand(line)) {
      const currentDirectory = line.split(' ')[2];
      currentPath =
        currentDirectory == '..' ? currentPath.split('.').slice(0, -1).join('.') : `${currentPath}.${currentDirectory}`;
      tree[currentPath] = tree[currentPath] ?? 0;
    } else if (!isListCommand(line)) {
      const object = line.split(' ');
      if (object[0] !== 'dir') {
        tree[currentPath] += Number(object[0]);
      }
    }
  });

  Object.keys(tree).forEach((key) => {
    Object.keys(tree).forEach((key2) => {
      if (key !== key2) {
        if (key2.includes(key)) {
          tree[key] += tree[key2];
        }
      }
    });
  });

  const fileSystemActualFreeSpace = 70000000 - tree['./'];
  const spaceToFreeUp = 30000000 - fileSystemActualFreeSpace;

  const total = Object.entries(tree)
    .filter(([key, val]) => key.includes('.') || key === '/')
    .filter(([key, val]) => val >= spaceToFreeUp)
    .sort(([, v1], [, v2]) => v1 - v2)[0][1];
  return total;
}

function isCurrentDirectoryCommand(line) {
  return line.match(/^\$\scd/);
}

function isListCommand(line) {
  return line.match(/^\$\sls/);
}

module.exports = {
  getResult,
};
