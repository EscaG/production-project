import { Button } from 'shared/ui/Button/Button';

import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const [isError, setIsError] = useState(false);
  const textButton = 'Throw error';
  const myThrow = () => setIsError(true);

  useEffect(() => {
    if (isError) throw new Error();
  }, [isError]);

  return (
    <Button
      onClick={myThrow}
    >
      {textButton}
    </Button>
  );
};
