
import { ClerkProvider } from "@clerk/nextjs";
export default function ContextProviders({ children, pageProps }) {
    return (
            <ClerkProvider {...pageProps} publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
              {children}
            </ClerkProvider>

    )

}