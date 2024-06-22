const NewTaskForm = () => {
  return (
    <div className="mt-10 mx-auto w-full max-w-sm">
      <form action="">
        <div>
          {/* htmlForの値とinputのidを一致させることでlabelクリック時に対応する入力フォームがフォーカスされる */}
          <label htmlFor="title" className="block text-sm font-medium">
            タイトル
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="block mt-2 py-1.5 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="description" className="block text-sm font-medium">
            説明
          </label>
          <input
            type="text"
            id="description"
            name="description"
            required
            className="block mt-2 py-1.5 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="dueDate" className="block text-sm font-medium">
            期限
          </label>
          <input
            //　type属性にdateを指定することで日付選択になる
            type="date"
            id="dueDate"
            name="dueDate"
            min="2020-01-01"
            max="2999-12-31"
            // フィールドが必須入力とする
            required
            className="block mt-2 py-1.5 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <button
          type="submit"
          className="mt-8 p-1 w-full rounded-md text-white bg-sky-700 hover:bg-sky-600 text-sm font-semibold shadow-sm"
          >
            作成
        </button>
      </form>
    </div>
  );
};

export default NewTaskForm;
