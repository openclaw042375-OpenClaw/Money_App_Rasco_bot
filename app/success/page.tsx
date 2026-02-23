"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function SuccessRedirectContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    const query = sessionId ? `?session_id=${sessionId}` : "";
    router.push(`/thanks${query}`);
  }, [searchParams, router]);

  return (
    <div className="flex items-center justify-center">
      <div className="animate-pulse text-gray-500">Redirecting...</div>
    </div>
  );
}

export default function SuccessRedirect() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Suspense fallback={
        <div className="animate-pulse text-gray-500">Loading...</div>
      }>
        <SuccessRedirectContent />
      </Suspense>
    </main>
  );
}
