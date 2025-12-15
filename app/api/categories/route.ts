import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect"

export async function Get(req:NextRequest) {
    
    try {
        const categories = await prisma.category.findMany({})

        return NextResponse.json(categories)
        
    } catch (error) {
        console.log("there was an error getting categories", error);
        return NextResponse.json({ error: "there was an error " },
            {
                status: 500,
                
            }
        );

    }
    
}