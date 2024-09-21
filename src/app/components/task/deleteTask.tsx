"use client"

import * as Dialog from "@radix-ui/react-dialog";
import styles from "../../styles/deleteTask.module.scss"
import { Trash } from "lucide-react"
import { Button } from "@radix-ui/themes";

interface TaskCardProps {
  task: {
    id: string;
    content: string;
    done: boolean;
  };
  onDeleteTask: (id: string) => void;
}

export default function DeleteTaskModal({ task, onDeleteTask }: TaskCardProps){
  return (
    <Dialog.Root>
      <Dialog.Trigger className={styles.btn_trigger}>
        <Trash size={24}/>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay}/>
        <Dialog.Content className={styles.modal}>
          
          <div className={styles.container}>
            <form className={styles.form}>
              <Dialog.Title className={styles.header}>
                Deletar tarefa
              </Dialog.Title>
              <div className={styles.content}>
                <span>Tem certeza que deseja deletar essa tarefa?</span>
              </div>
              <div className={styles.buttons}>
                <Dialog.Close className={styles.botaoCancelar}>
                  Cancelar
                </Dialog.Close>
                <Button type="button" className={styles.botaoDeletar} onClick={() => onDeleteTask(task.id)}>Deletar</Button>
              </div>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}