"use client";

import { Button, Result } from "antd";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <Result
          status={`${error.message === "404" ? "404" : "500"}`}
          title={<span className="text-white">Error</span>}
          subTitle={<span className="text-white">{error.message}</span>}
          extra={
            <Button
              type="primary"
              onClick={() => {
                reset();
                window.location.reload();
              }}
            >
              Refresh
            </Button>
          }
        />
      </body>
    </html>
  );
}
