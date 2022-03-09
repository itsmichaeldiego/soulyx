import { useMediaQuery } from 'react-responsive';

export const useDesktopMediaQuery = (): boolean => useMediaQuery({ minWidth: 992 });

export const useDesktopMediumMediaQuery = (): boolean => useMediaQuery({ minWidth: 1024 });

export const useTabletMediaQuery = (): boolean => useMediaQuery({ minWidth: 768, maxWidth: 991 });

export const useMobileMediaQuery = (): boolean => useMediaQuery({ maxWidth: 767 });

export function Desktop({ children }: React.PropsWithChildren<{}>): JSX.Element | null {
  const isDesktop = useDesktopMediaQuery();
  if (!isDesktop) {
    return null;
  }
  return children as JSX.Element;
}

export function DesktopMedium({ children }: React.PropsWithChildren<{}>): JSX.Element | null {
  const isDesktopMedium = useDesktopMediumMediaQuery();
  if (!isDesktopMedium) {
    return null;
  }
  return children as JSX.Element;
}

export function Tablet({ children }: React.PropsWithChildren<{}>): JSX.Element | null {
  const isTablet = useTabletMediaQuery();
  if (!isTablet) {
    return null;
  }
  return children as JSX.Element;
}

export function Mobile({ children }: React.PropsWithChildren<{}>): JSX.Element | null {
  const isMobile = useMobileMediaQuery();
  if (!isMobile) {
    return null;
  }
  return children as JSX.Element;
}

export function Default({ children }: React.PropsWithChildren<{}>): JSX.Element | null {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  if (!isNotMobile) {
    return null;
  }
  return children as JSX.Element;
}