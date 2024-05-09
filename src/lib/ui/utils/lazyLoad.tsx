import { ReactNode, ComponentType, lazy, Suspense } from 'react';

/**
 * Lazy load a component with a fallback component
 * and return a component that will render the lazy loaded component
 * @param importCallback
 * @param FallbackComponent
 * @returns
 */
export function lazyLoad<T = unknown, P = unknown>(
  importCallback: () => Promise<{ default: ComponentType<any> }>,
  FallbackComponent: ReactNode = <p>Loading...</p>,
) {
  const Component = lazy(importCallback);

  return (props: P) =>
    FallbackComponent ? (
      <Suspense fallback={FallbackComponent}>
        <Component {...props} />
      </Suspense>
    ) : (
      <Component {...props} />
    );
}
