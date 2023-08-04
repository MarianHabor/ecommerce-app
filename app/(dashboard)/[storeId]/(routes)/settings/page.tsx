import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

interface SettingPageProps {
    params: {
        storeId: string;
    }
};

const SettingsPage: React.FC<SettingPageProps> = async ({
    params
}) => {
    const { userId } = auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userId,
        }
    });

    if (!store) {
        redirect("/");
    }

    return (
        <div>
            Settings
        </div>
    );
}

export default SettingsPage;