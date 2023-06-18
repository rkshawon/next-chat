import prisma from "../libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getCoversations = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser?.id) {
    return [];
  }

  try {
    const converstaions = await prisma.conversation.findMany({
      orderBy: {
        lastMessageAt: "desc",
      },
      where: {
        userIds: {
          has: currentUser.id,
        },
      },
      include: {
        users: true,
        messages: {
          include: {
            sender: true,
            seen: true,
          },
        },
      },
    });
    return converstaions;
  } catch (error: any) {
    return [];
  }
};
export default getCoversations;
