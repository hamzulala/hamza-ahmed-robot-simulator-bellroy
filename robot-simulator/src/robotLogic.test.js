import { moveForward, rotateLeft, rotateRight } from './robotLogic';

describe('Robot Logic', () => {
  describe('moveForward', () => {
    it('should move the robot north', () => {
      const initialPosition = { x: 0, y: 0, direction: 'NORTH' };
      const newPosition = moveForward(initialPosition);
      expect(newPosition).toEqual({ x: 0, y: 1, direction: 'NORTH' });
    });

    it('should move the robot east', () => {
      const initialPosition = { x: 0, y: 0, direction: 'EAST' };
      const newPosition = moveForward(initialPosition);
      expect(newPosition).toEqual({ x: 1, y: 0, direction: 'EAST' });
    });

    it('should move the robot south', () => {
      const initialPosition = { x: 0, y: 1, direction: 'SOUTH' };
      const newPosition = moveForward(initialPosition);
      expect(newPosition).toEqual({ x: 0, y: 0, direction: 'SOUTH' });
    });

    it('should move the robot west', () => {
      const initialPosition = { x: 1, y: 0, direction: 'WEST' };
      const newPosition = moveForward(initialPosition);
      expect(newPosition).toEqual({ x: 0, y: 0, direction: 'WEST' });
    });
  });

  describe('rotateLeft', () => {
    it('should rotate the robot left from NORTH to WEST', () => {
      const initialPosition = { x: 0, y: 0, direction: 'NORTH' };
      const newPosition = rotateLeft(initialPosition);
      expect(newPosition).toEqual({ x: 0, y: 0, direction: 'WEST' });
    });

    it('should rotate the robot left from EAST to NORTH', () => {
      const initialPosition = { x: 0, y: 0, direction: 'EAST' };
      const newPosition = rotateLeft(initialPosition);
      expect(newPosition).toEqual({ x: 0, y: 0, direction: 'NORTH' });
    });
  });

  describe('rotateRight', () => {
    it('should rotate the robot right from NORTH to EAST', () => {
      const initialPosition = { x: 0, y: 0, direction: 'NORTH' };
      const newPosition = rotateRight(initialPosition);
      expect(newPosition).toEqual({ x: 0, y: 0, direction: 'EAST' });
    });

    it('should rotate the robot right from WEST to NORTH', () => {
      const initialPosition = { x: 0, y: 0, direction: 'WEST' };
      const newPosition = rotateRight(initialPosition);
      expect(newPosition).toEqual({ x: 0, y: 0, direction: 'NORTH' });
    });
  });
});
