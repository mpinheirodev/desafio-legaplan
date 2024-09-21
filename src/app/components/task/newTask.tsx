"use client"

import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@radix-ui/themes";
import { useState } from "react";
import styles from "../../styles/newTask.module.scss"

interface NewTaskCard {
  onTaskCreated: (content: string) => void;
}

export function NewTask({ onTaskCreated }: NewTaskCard){
  const [content, setContent] = useState("");

  function handleContentChange(e: React.ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value);
  }

  function handleSaveTask() {
    if (content === "") {
      return;
    }

    onTaskCreated(content);
    setContent("");
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className={styles.btn_trigger}>
        Adicionar nova tarefa
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay}/>
        <Dialog.Content className={styles.modal}>
          <div className={styles.container}>
            <form className={styles.form}>
            <Dialog.Title className={styles.header}>
                Nova tarefa
              </Dialog.Title>
              <div className={styles.content}>
                <span>Título</span>
                <input onChange={handleContentChange} placeholder="Digite"/>
              </div>
              <div className={styles.buttons}>
                <Dialog.Close className={styles.botaoCancelar}>
                  Cancelar
                </Dialog.Close>
                <Button type="button" className={styles.botaoAdicionar} onClick={handleSaveTask}>Adicionar</Button>
              </div>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}