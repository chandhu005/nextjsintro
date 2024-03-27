"use client";

import React, { useEffect } from "react";
import { useFormStatus,useFormState } from "react-dom";
import { createTaskCustom } from "@/utils/actions";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn  btn-outline btn-warning join-item w-1/4"
      disabled={pending}
    >
      {pending ? "please wait..." : "create task"}
    </button>
  );
};
const intialState={
  message:null,
};
const TaskFormCustom = () => {
  const [state,formAction]=useFormState(createTaskCustom, intialState);
  useEffect(()=>{
  if(state.message==='error'){
    toast.error('there was an error')
    return 
  }
  if(state.message==='success'){
    toast.success('task created successfully')
    return
  }}
  ,[state])
  return (
    <form action={formAction}>
     
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full bg-white"
          placeholder="type here"
          name="content"
          required
        />
         <SubmitBtn />
      </div>
     
    </form>
  );
};

export default TaskFormCustom;
