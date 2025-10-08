"use client";

import { useState } from "react";
import { testServerAction } from "./actions/server_action";

export default function Page() {
  const [serverResult, setServerResult] = useState<string | null>(null);
  const [apiResult, setApiResult] = useState<string | null>(null);

  async function handleServerAction() {
    const result = await testServerAction();
    setServerResult(result);
  }

  async function handleApiRoute() {
    const res = await fetch("/api/api-route");
    const data = await res.json();
    setApiResult(data.message);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 dark:bg-[#0f1117] dark:text-gray-100 px-6">
      <div className="w-full max-w-md bg-white dark:bg-[#1a1d27] rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-blue-400">
          Next.js Test Dashboard! Test.
        </h1>

        {/* Server Action Section */}
        <div className="flex flex-col items-center space-y-2">
          <button
            onClick={handleServerAction}
            className="w-full rounded-lg bg-blue-600 text-white font-medium py-2.5 transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Call Server Action
          </button>
          {serverResult && (
            <p className="text-sm text-green-600 dark:text-green-400 font-medium">
              {serverResult}
            </p>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 dark:bg-gray-700 my-10" />

        {/* API Route Section */}
        <div className="flex flex-col items-center space-y-2">
          <button
            onClick={handleApiRoute}
            className="w-full rounded-lg bg-indigo-600 text-white font-medium py-2.5 transition hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Call API Route
          </button>
          {apiResult && (
            <p className="text-sm text-green-600 dark:text-green-400 font-medium">
              {apiResult}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
