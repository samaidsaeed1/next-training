import {
    NextMiddleware,
    NextResponse
  } from "next/server";
  
  export function combineMiddleware(functions: any[] = [], index = 0): NextMiddleware {
    const current = functions[index];
    if (current) {
      const next = combineMiddleware(functions, index + 1);
      return current(next);
    }
    return () => NextResponse.next();
  }