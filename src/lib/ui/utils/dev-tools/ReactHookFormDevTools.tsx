import React from 'react';

export const ReactHookFormDevTools = import.meta.env.PROD
  ? (): null => null
  : React.lazy(() =>
      import('@hookform/devtools').then(result => ({
        default: result.DevTool,
      })),
    );
