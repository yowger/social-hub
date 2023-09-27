"use client"

import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

export function TanstackProvider({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {process.env.NODE_ENV === "development" && (
                <ReactQueryDevtools
                    initialIsOpen={false}
                    position="bottom-right"
                />
            )}
        </QueryClientProvider>
    )
}
