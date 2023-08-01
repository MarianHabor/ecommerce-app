"use client";

import { StoreModal } from "@/components/modals/store-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
    const [isMounted, setIsMounten] = useState(false);

    useEffect(() => {
        setIsMounten(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <StoreModal />
        </>
    );
};