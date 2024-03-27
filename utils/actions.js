'use server'

import prisma from "./db"
import { revalidatePath } from 'next/cache';
import { redirect } from "next/navigation";
import {z} from 'zod'
export const getAllTasks = async () => {
    return await prisma.task.findMany({
        orderBy: {
            createdAt: 'desc',
        }
    })
};

export const createTask = async (formData) => {
    "use server"
    const content = formData.get('content');

    await prisma.task.create({
        data: {
            content,
        },

    })
    revalidatePath('/tasks')
};

export const deleteTask = async (formData) => {
   const id= formData.get('id');
    await prisma.task.delete({
        where: {
            id,
        },
    })
    revalidatePath('/tasks');
}

export const getTask = async (id) => {

    return prisma.task.findUnique({
        where: {
            id,
        },
    })

}

export const editTask = async (formData) => {
    const id= formData.get('id');
    const content = formData.get('content');
    const completed = formData.get('completed');

    await prisma.task.update({
        where: {
            id,
        },
        data: {
            content,
            completed: completed==='on'?true:false,
        },
    })
   redirect('/tasks')
};


export const createTaskCustom = async ( prevState,formData) => {

    const Task=z.object({
        content:z.string().min(5)
    })
   // await new Promise((resolve)=>setTimeout(resolve, 2000))
    const content = formData.get('content');
    try{
        Task.parse({content})
        await prisma.task.create({
            data: {
                content,
            },
    
        })
        revalidatePath('/tasks')
        return{message:"sucess"}
    }
    catch(error){
        return{message:"error"}
    }
};