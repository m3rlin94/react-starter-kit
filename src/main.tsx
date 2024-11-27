import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "@/pages/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  </StrictMode>,
);
