document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("introForm");

  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    displayIntroPage();
  });

  
  document.getElementById("clearBtn").addEventListener("click", () => {
    form.querySelectorAll("input, textarea").forEach(el => el.value = "");
  });

 
  document.getElementById("addCourse").addEventListener("click", () => {
    const div = document.createElement("div");
    div.classList.add("course");
    div.innerHTML = `
      <input type="text" placeholder="Department" required>
      <input type="text" placeholder="Number" required>
      <input type="text" placeholder="Course Name" required>
      <input type="text" placeholder="Reason" required>
      <button type="button" class="deleteCourse">Delete</button>
    `;
    div.querySelector(".deleteCourse").addEventListener("click", () => div.remove());
    document.getElementById("courses").appendChild(div);
  });
});

function displayIntroPage() {
  const formData = new FormData(document.getElementById("introForm"));
  const name = `${formData.get("firstName")} ${formData.get("lastName")}`;
  const statement = formData.get("statement");

  document.body.innerHTML = `
    <header id="header"></header>
    <main>
      <h2>Introduction Page</h2>
      <p><strong>${name}</strong></p>
      <p>${statement}</p>
      <a href="intro_form.html">Reset Form</a>
    </main>
    <footer id="footer"></footer>
  `;
}
