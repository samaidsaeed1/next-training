import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export const locationMiddleware: any = (next: any) => {
    return async(request: NextRequest, _next: NextFetchEvent) => {
        const response = NextResponse.next()
        response.cookies.set('isUserFromUK', `${request.geo?.country === 'UK'}`);
        return response
    };
};