import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="shrink-0 flex items-center">
              <Link href="/">
                <a className="text-xl font-semibold text-blue-600">Logo</a>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8 ml-10">
              <Link href="/dashboard">
                <a className="text-gray-700 hover:text-blue-500">Dashboard</a>
              </Link>
              <Link href="/internships">
                <a className="text-gray-700 hover:text-blue-500">Internships</a>
              </Link>
              <Link href="/jobs">
                <a className="text-gray-700 hover:text-blue-500">Jobs</a>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <a className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-500 rounded-md">Login</a>
            </Link>
            <Link href="/signup">
              <a className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-500 rounded-md">Sign Up</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
