function Header() {
  return (
    <header className="bg-green-900 h-[175px] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mokpe Language Learning</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-200">
                Home
              </a>
            </li>
            <li>
              <a href="/game" className="hover:text-blue-200">
                Quiz
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200">
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
