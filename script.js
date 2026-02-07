// NOTE:
// AI response is mocked because this is a frontend-only application.
// In a real-world setup, OpenAI API would be called from a secure backend.

function searchInvestors() {
  const sector = document.getElementById("sector").value;
  const country = document.getElementById("country").value;
  const resultDiv = document.getElementById("result");

  if (!sector || !country) {
    resultDiv.innerHTML = "Please enter both sector and country.";
    return;
  }

  resultDiv.innerHTML = "🔍 Searching investors using AI...";

  // Mocked AI response
  setTimeout(() => {
    resultDiv.innerHTML = `
      <h3>Top Investors</h3>
      <ul>
        <li>Sequoia Capital – Actively invests in ${sector} startups in ${country}</li>
        <li>Accel – Known for early-stage ${sector} investments in ${country}</li>
        <li>Tiger Global – Focuses on growth-stage ${sector} companies in ${country}</li>
      </ul>
    `;
  }, 800);
}


