export async function GET(request: Request) {
    return Response.json({
        username: 'joe',
        firstname: 'John',
        lastname: 'Doe'
    })
}