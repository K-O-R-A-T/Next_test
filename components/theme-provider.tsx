// @ts-ignore
import { ThemeProvider as NextThemesProvider } from "next-themes";

const AnyNextThemesProvider = NextThemesProvider as React.ComponentType<any>;

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <AnyNextThemesProvider {...props} suppressHydrationWarning>
      {children}
    </AnyNextThemesProvider>
  );
}