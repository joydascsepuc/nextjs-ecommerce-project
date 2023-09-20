"use clinet";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="Create Store"
      description="Create new store from here"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future create store form
    </Modal>
  );
};
