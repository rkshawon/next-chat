import  bcrypt from 'bcrypt';
import prisma from "@/app/libs/prismadb"
import { NextResponse } from 'next/server';

export async function POST( request:Request){
try{
    const body = await request.json()

    const {name, email, password} = body

    if(!name || !email || !password){
        return new NextResponse("Missing field", {status:400})
    }
    const hashedPassword = await bcrypt.hash(password,12)
    const user =    await prisma.user.create({
        data:{
                email, name, hashedPassword
        }
    })
    return NextResponse.json(user)
}catch(err){
    
}
}