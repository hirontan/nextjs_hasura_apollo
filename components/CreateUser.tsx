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

  return (
    <>
      {console.log('CreateUser rendered')}
      <p className="mb-3 font-bold">Custom Hook + useCallback + memo</p>
      <div className="mb-3 flex flex-col justify-center items-center">
        <label>Text</label>
        <input
          className="px-3 py-2 border border-gray-300"
          type="text"
          value={text}
          onChange={handleTextChange}
        />
      </div>
    </>
  )
}