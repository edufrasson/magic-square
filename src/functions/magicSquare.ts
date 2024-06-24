export const resolveMagicSquare = (square: number[]) => {
  const baseSum = square.slice(0, 3).reduce((a: number, b: number) => a + b);

  // Linhas
  for (let i = 0; i < 3; i++) {
    if (
      square.slice(i * 3, i * 3 + 3).reduce((a: number, b: number) => a + b) !==
      baseSum
    ) {
      return false;
    }
  }

  // Colunas
  for (let i = 0; i < 3; i++) {
    if (square[i] + square[i + 3] + square[i + 6] !== baseSum) {
      return false;
    }
  }

  // Diagonais
  if (square[0] + square[4] + square[8] !== baseSum) {
    return false;
  }

  if (square[2] + square[4] + square[6] !== baseSum) {
    return false;
  }

  return true;
};

export const setArray = () => {
  return Array.from({ length: 9 }, (_, i) =>
    parseInt(
      (document.getElementById(`cell-${i}`) as HTMLInputElement).value,
      10
    )
  );
};

export const hasRepeteadValues = (array: Array<any>) => {
    for (let i = 0; i < array.length; i++) {
      if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
        return true
      }
    }
    return false
  }
  
