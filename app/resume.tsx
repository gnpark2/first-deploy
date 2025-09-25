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

async function getprotfolioInfo() {
  const res = await fetch('https://raw.githubusercontent.com/gnpark2/first-deploy/refs/heads/main/service/resume_protfolioInfo_service.json');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function ResumePage() {
  const resumeInfo = await getResumeInfo();
  const protfolioInfo = await getprotfolioInfo();

  return (
    <main className="font-sans min-h-screen p-10 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Resume
          </h1>
          <p className="text-gray-600">안녕하세요.</p>
        </header>

        {/* 기본 정보 Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
            기본 정보
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <ul className="space-y-2 text-gray-700">
              <li>
                <span className="font-medium">이름:</span> {resumeInfo.name}
              </li>
              <li>
                <span className="font-medium">자기소개:</span> {resumeInfo.introduction}
              </li>
              <li>
                <a
                  href={resumeInfo.git_url}
                  target="_blank"
                  className="inline-block px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition"
                >
                  🔗 GitHub Link
                </a>
                &nbsp;&nbsp;
                {/* <a
                  href={resumeInfo.blog_url}
                  target="_blank"
                  className="inline-block px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition"
                >
                  🔗 Tistory Link
                </a> */}
              </li>
            </ul>
          </div>
        </section>

        {/* protfolioInfo Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
            포트폴리오
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {protfolioInfo.project_name}
            </h3>
            <p className="text-gray-700 mb-4">
              {protfolioInfo.project_introduction}
            </p>
            <a
              href={protfolioInfo.CNS_project}
              target="_blank"
              className="inline-block px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition"
            >
              📂 GitHub BE Repository
            </a>
            &nbsp;&nbsp;
            {/* <a
              href={protfolioInfo.project_fe_github_url}
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
    </main>
  );
}