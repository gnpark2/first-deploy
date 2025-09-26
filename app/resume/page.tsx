import Link from "next/link";

// 서버 컴포넌트에서 직접 API 호출
async function getResumeInfo() {
  const res = await fetch('https://raw.githubusercontent.com/gnpark2/first-deploy/refs/heads/main/service/resume_general_info_service.json');
  // API 응답이 성공적인지 확인
  if (!res.ok) {
    // 응답이 실패하면 오류를 던져 Next.js가 오류 페이지를 보여주도록 함
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function getportfolioInfo() {
  const res = await fetch('https://raw.githubusercontent.com/gnpark2/first-deploy/refs/heads/main/service/resume_portfolio_service.json');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function ResumePage() {
  const resumeInfo = await getResumeInfo();
  const portfolioInfo = await getportfolioInfo();

  return (
    <main className="font-sans min-h-screen p-10 bg-gradient-to-b bg-blue-200">
      <div className="relative max-w-3xl mx-auto bg-white shadow-xl p-10 overflow-hidden">
        {/* 오른쪽 위 접힌 모서리 */}
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-l-[60px] border-t-blue-200 border-l-transparent"></div>

      <div className="max-w-3xl mx-auto bg-white shadow-xl p-10">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Resume
          </h1>
        </header>

        {/* 기본 정보 Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
            📝기본 정보
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition flex items-start gap-6">
            {/* 프로필 이미지 */}
            <img
              src="/jam.jpg"
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover shadow-md"
            />
            {/* 텍스트 정보 */}
            <div className="flex-1">
              <ul className="space-y-3 text-gray-700">
                <li>
                  <span className="font-medium">이름 :</span> {resumeInfo.name}
                </li>
                <li>
                  <span className="font-medium">자기소개 :</span>{" "}
                  {resumeInfo.introduction}
                </li>
                <li className="text-right">
                  <a
                    href={resumeInfo.git_url}
                    target="_blank"
                    className="inline-block px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-500 transition"
                  >
                    🔗 GitHub
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href={resumeInfo.git_url}
                    target="_blank"
                    className="inline-block px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-500 transition"
                  >
                    🔗 Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* portfolioInfo Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
            📑프로젝트
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <ul>
              <li>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {portfolioInfo.CNS_title}
                </h3>
              </li>
              <li>
                <p className="text-gray-700 mb-4">
                  {portfolioInfo.CNS_sub_title}
                </p>
              </li>
              <li>
                <a
                  href={portfolioInfo.CNS_project}
                  target="_blank"
                  className="inline-block px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-500 transition"
                >
                  📂 WeFit
                </a>
              </li>
            </ul>
            &nbsp;&nbsp;
            {/* <a
              href={portfolioInfo.project_fe_github_url}
              target="_blank"
              className="inline-block px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition"
            >
              📂 GitHub FE Repository
            </a> */}
          </div>
        </section>

        {/* Educations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
            🎓Educations
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <ul>
              <li>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {portfolioInfo.educations}
                </h3>
              </li>
            </ul>
            &nbsp;&nbsp;
            {/* <a
              href={portfolioInfo.project_fe_github_url}
              target="_blank"
              className="inline-block px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition"
            >
              📂 GitHub FE Repository
            </a> */}
          </div>
        </section>

        {/* Footer - Back Button */}
        <footer className="text-center">
          <Link
            href="/"
            className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            ⬅ 메인으로 돌아가기
          </Link>
        </footer>
      </div>
      </div>
    </main>
  );
}