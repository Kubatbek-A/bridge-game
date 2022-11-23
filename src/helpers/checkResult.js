export default function checkResult(left, right, selected) {
  const cardsPriority = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  if (cardsPriority[left.code[0]] > cardsPriority[right.code[0]]) {
    if (selected === 'left') {
      return 'win';
    }
    return 'lose';
  } if (cardsPriority[left.code[0]] < cardsPriority[right.code[0]]) {
    if (selected === 'right') {
      return 'win';
    }
    return 'lose';
  }
  return 'draw';
}
