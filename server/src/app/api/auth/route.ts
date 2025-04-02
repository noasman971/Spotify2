import {NextResponse} from "next/server";

export const POST = async (req: Request) => {
    const {email, password, pseudo} = await req.json();

    console.log(email, password, pseudo);



    return new NextResponse("User created successfully", {
        status: 201,

    })
}