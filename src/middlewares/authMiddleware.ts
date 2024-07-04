import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export const authMiddleware: any = (next: any) => {
    return async(request: NextRequest, _next: NextFetchEvent) => {
        const response = NextResponse.next()
        return response
    };
};