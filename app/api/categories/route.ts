import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const categories = await prisma.category.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    return NextResponse.json(categories);
}

export async function POST(request: Request) {
    const body = await request.json();

    if (!body.name) {
        return NextResponse.json(
            {
                message: "Name is required",
            },
            {
                status: 422,
            }
        );
    }

    const category = await prisma.category.create({
        data: {
            id: crypto.randomUUID(),
            name: body.name,
        },
    });

    return NextResponse.json(category, {
        status: 201,
    });
}