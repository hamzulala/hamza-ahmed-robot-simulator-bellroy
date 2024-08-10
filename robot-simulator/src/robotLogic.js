export const directions = ["NORTH", "EAST", "SOUTH", "WEST"];

export const moveForward = (position) => {
  const { x, y, direction } = position;
  let newX = x;
  let newY = y;

  switch (direction) {
    case "NORTH":
      newY = Math.min(4, y + 1);
      break;
    case "EAST":
      newX = Math.min(4, x + 1);
      break;
    case "SOUTH":
      newY = Math.max(0, y - 1);
      break;
    case "WEST":
      newX = Math.max(0, x - 1);
      break;
    default:
      break;
  }

  return { ...position, x: newX, y: newY };
};

export const rotateLeft = (position) => {
  const currentDirectionIndex = directions.indexOf(position.direction);
  const newDirectionIndex =
    (currentDirectionIndex + directions.length - 1) % directions.length;
  return { ...position, direction: directions[newDirectionIndex] };
};

export const rotateRight = (position) => {
  const currentDirectionIndex = directions.indexOf(position.direction);
  const newDirectionIndex = (currentDirectionIndex + 1) % directions.length;
  return { ...position, direction: directions[newDirectionIndex] };
};
