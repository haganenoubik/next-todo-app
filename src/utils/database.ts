// mongooseをimport
import mongoose from 'mongoose';

// DBと接続するための非同期関数を定義
export const connectDb = async () => {
  try {
    // 環境変数からDBのURIを取得し、mongoose.connectで接続
    // process.env.DB_URIが存在しない場合は空文字列を使用
    await mongoose.connect(process.env.DB_URI || '');
    // 接続が成功した場合のメッセージをコンソールに表示
    console.log('DBに接続しました');
  } catch (error) {
    // 接続が失敗した場合のエラーメッセージをコンソールに表示
    console.log('DB接続に失敗しました');
    // 新しいエラーを投げて、呼び出し元に失敗を通知
    throw new Error();
  }
}
