import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient({ errorFormat: "pretty" });

export const getALLMenus = async (request: Request, response: Response) => {
  try {
    const { search } = request.query;
    const ALLMenus = await prisma.menu.findMany({
      where: { name: { contains: search?.toString() || "" } },
    });
    return response
      .json({
        status: true,
        data: ALLMenus,
        message: "Tuh menu kao",
      })
      .status(200);
  } catch (error) {
    return response
      .json({
        status: false,
        message: `Error Setan. $(error)`,
      })
      .status(400);
  }
};