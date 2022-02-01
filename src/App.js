import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import logo from './logo.svg';
import './App.css';
import Simple from './react-query-examples/Simple';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Simple />
    </QueryClientProvider>
    
  );
}

export default App;
