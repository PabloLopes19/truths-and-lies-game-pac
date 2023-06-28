import * as Dialog from "@radix-ui/react-dialog";

interface props {
  children?: React.ReactNode;
  open?: boolean;
  changeOpen: (e: any) => void;
}

import "../styles/Dialog.css";

export default function ContentDialog(props: props) {
  return (
    <Dialog.Root open={props.open} onOpenChange={props.changeOpen}>
      <Dialog.Trigger asChild>{props.children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay" />
        <Dialog.Content className="content">Teste</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
