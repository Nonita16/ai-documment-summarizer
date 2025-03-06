import React, { useState } from "react";

export default function TextArea({ onSubmit }) {
  const [text, setText] = useState();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
  };

  return (
    <div>
      <form className="w-full" onSubmit={handleOnSubmit}>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="4"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Paste your text here..."
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600 border-gray-200">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-orange-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Summarize Text Now
            </button>
            <div className="flex space-x-1 rtl:space-x-reverse sm:ps-2">
              <button
                disabled
                type="button"
                className="inline-flex justify-center items-center p-2 text-gray-500 rounded-sm cursor-pointer dark:text-gray-400 disabled:opacity-50"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                  />
                </svg>
                <span className="sr-only">Attach file</span>
              </button>
            </div>
          </div>
        </div>
      </form>

      <p className="text-xs text-gray-500 dark:text-gray-400">
        Remember, this is only an alpha version of your next document summarize
        pal, Upgrade to a paid version to be able to upload documents
      </p>
    </div>
  );
}
