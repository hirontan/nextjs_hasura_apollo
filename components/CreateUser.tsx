import { VFC } from "react";
import { useCreateForm } from "../hooks/useCreateForm";

export const CreateUser: VFC = () => {
  const {
    handleSubmit,
    username,
    usernameChange,
    printMessage,
    text,
    handleTextChange
  } = useCreateForm()
}
