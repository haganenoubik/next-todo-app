// Server Actionsを使用するための宣言
"use server";

import { Task, TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { redirect } from "next/navigation";

// フォームの状態を定義するインターフェース
export interface FormState {
  // Server Actions内でエラーが発生した際にその内容を返却するための型定義
  error: string;
}

// タスクを作成する非同期関数を定義
export const createTask = async (state: FormState, formData: FormData) => {
  // フォームデータから新しいタスクを作成
  const newTask: Task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: false,
  };

  try {
    // データベースに接続
    await connectDb();
    // 新しいタスクをデータベースに保存
    await TaskModel.create(newTask);
  } catch (error) {
    // エラーが発生した場合、エラーメッセージをstateに設定
    state.error = "ToDoの作成に失敗しました";
    return state;
  }

  // 成功した場合、ホームページにリダイレクト
  redirect("/");
};
