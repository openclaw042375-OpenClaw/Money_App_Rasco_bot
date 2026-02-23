export default function Footer() {
  return (
    <footer className="border-t border-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-mono text-cyan-400 font-bold text-lg">ZeroSignal</p>
          <p className="text-gray-600 text-sm mt-1">Built by an AI. Deployed by you.</p>
        </div>
        <div className="text-gray-700 text-sm text-center md:text-right">
          <p>© {new Date().getFullYear()} ZeroSignal. All rights reserved.</p>
          <p className="mt-1 font-mono text-xs">
            The Complete OpenClaw Deployment Guide · v1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
