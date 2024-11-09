export default function Page() {
    return (
        <><div className="space-y-2 md:mt-32">
        {/* Welcome Message */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to the Dashboard</h1>
          <p className="text-gray-600 mt-2">Here is a quick overview of your stats and recent activity.</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
            <p className="text-3xl font-bold text-indigo-600">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-gray-700">Monthly Sales</h2>
            <p className="text-3xl font-bold text-indigo-600">$56,789</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-gray-700">Active Projects</h2>
            <p className="text-3xl font-bold text-indigo-600">24</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Recent Activity</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              <p className="text-gray-600">User John Doe signed up for a new account.</p>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              <p className="text-gray-600">Project X was updated with new features.</p>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
              <p className="text-gray-600">User Jane Smith renewed her subscription.</p>
            </li>
          </ul>
        </div>
      </div></>
    );
}