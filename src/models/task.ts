// mongooseとDocumentをimport
import mongoose, { Document } from "mongoose";

// Taskインターフェースを定義
export interface Task {
  // オプショナルな _id フィールドを追加
  _id: string;
  // タイトル
  title: string;
  // 説明
  description: string;
  // 期日
  dueDate: string;
  // 完了フラグ
  isCompleted: boolean;
}

// TaskインターフェースとmongooseのDocumentインターフェースを拡張したTaskDocumentインターフェースを定義
export interface TaskDocument extends Task, Document {
  // 作成日時
  createdAt: Date;
  // 更新日時
  updatedAt: Date;
}

// タスク用のスキーマを定義
const taskSchema = new mongoose.Schema<Document>(
  {
    // タイトルフィールドの設定
    title: {
      type: String,
      required: true, // 必須フィールド
    },
    // 説明フィールドの設定
    description: {
      type: String,
    },
    // 期日フィールドの設定
    dueDate: {
      type: String,
      required: true, // 必須フィールド
    },
    // 完了フラグフィールドの設定
    isCompleted: {
      type: Boolean,
      default: false, // デフォルト値をfalseに設定
    },
  },
  { timestamps: true }
); // スキーマオプションでtimestampsをtrueにすることで、createdAtとupdatedAtフィールドを自動生成

// Taskモデルをエクスポート。既にモデルが存在する場合はそれを使用し、存在しない場合は新しく作成
export const TaskModel =
  mongoose.models.Task || mongoose.model<TaskDocument>("Task", taskSchema);
