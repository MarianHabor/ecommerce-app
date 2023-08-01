"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";


const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <div className="p-4">
<<<<<<< HEAD
        front page
=======
        main page
>>>>>>> 82024e9c61cb7478110c660e33710a000a1f64dc
    </div>
  );
};

export default SetupPage;