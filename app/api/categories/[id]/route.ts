import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = Promise<{
    id: string;
}>;

export async function GET(
    request: Request,
    { params }: { params: Params }
) {
    const { id } = await params;

    const category = await prisma.category.findUnique({
        where: {
            id,
        },
    });

    if (!category) {
        return NextResponse.json(
            {
                message: "Category not found",
            },
            {
                status: 404,
            }
        );
    }

    return NextResponse.json(category);
}

export async function PUT(
    request: Request,
    { params }: { params: Params }
) {
    const { id } = await params;

    const body = await request.json();

    const category = await prisma.category.update({
        where: {
            id,
        },
        data: {
            name: body.name,
        },
    });

    return NextResponse.json(category);
}

export async function DELETE(
    request: Request,
    { params }: { params: Params }
) {
    const { id } = await params;

    await prisma.category.delete({
        where: {
            id,
        },
    });

    return NextResponse.json({
        message: "Category deleted",
    });
}