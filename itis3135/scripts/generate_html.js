document.addEventListener("DOMContentLoaded", () => {
    const htmlBtn = document.getElementById("htmlBtn");
    const htmlOutput = document.getElementById("htmlOutput");
    const htmlCode = document.getElementById("htmlCode");
    const form = document.getElementById("introForm");
    const h2 = document.querySelector("h2");

    htmlBtn.addEventListener("click", () => {
        // Collect form values
        const firstName = document.getElementById("firstName").value;
        const middleName = document.getElementById("middleName").value;
        const nickname = document.getElementById("nickname").value;
        const lastName = document.getElementById("lastName").value;
        const acknowledgment = document.getElementById("acknowledgment").value;
        const ackDate = document.getElementById("ackDate").value;
        const mascotAdj = document.getElementById("mascotAdj").value;
        const mascotAnimal = document.getElementById("mascotAnimal").value;
        const divider = document.getElementById("divider").value;
        const pictureInput = document.getElementById("picture");
        const picture = pictureInput.files[0] ? pictureInput.files[0].name : "images/default.png";
        const caption = document.getElementById("caption").value;
        const statement = document.getElementById("statement").value;
        const bullet1 = document.getElementById("bullet1").value;
        const bullet2 = document.getElementById("bullet2").value;
        const bullet3 = document.getElementById("bullet3").value;
        const quote = document.getElementById("quote").value;
        const quoteAuthor = document.getElementById("quoteAuthor").value;
        const funnyThing = document.getElementById("funnyThing").value;
        const share = document.getElementById("share").value;

        // Courses
        const courseDivs = document.querySelectorAll("#courses .course");
        let coursesHTML = "";
        courseDivs.forEach(div => {
            const dept = div.querySelector("input[placeholder='Department']").value;
            const num = div.querySelector("input[placeholder='Number']").value;
            const name = div.querySelector("input[placeholder='Course Name']").value;
            const reason = div.querySelector("input[placeholder='Reason']").value;
            coursesHTML += `<li><strong>${dept} ${num} - ${name}:</strong> ${reason}</li>\n`;
        });

        // Links
        const links = Array.from(document.querySelectorAll("#introForm input[type='url']"))
            .map(input => input.value)
            .filter(url => url.trim() !== "");
        let linksHTML = links.map(url => `<li><a href="${url}" target="_blank">${url}</a></li>`).join("\n");

        // Generate HTML string
        const generatedHTML = `
<h3>${firstName}${middleName ? " " + middleName : ""}${nickname ? ' "' + nickname + '"' : ""} ${lastName}</h3>
<figure>
    <img src="${picture}" alt="Headshot of ${firstName} ${lastName}" />
    <figcaption>${caption}</figcaption>
</figure>

<p><strong>Statement:</strong> ${statement}</p>

<ul>
    <li><strong>Personal Background:</strong> ${bullet1}</li>
    <li><strong>Academic Background:</strong> ${bullet2}</li>
    <li><strong>Professional Background:</strong> ${bullet3}</li>
</ul>

<h4>Courses</h4>
<ul>
${coursesHTML}
</ul>

<blockquote>
    "${quote}" — ${quoteAuthor}
</blockquote>

${funnyThing ? `<p><strong>Funny Thing:</strong> ${funnyThing}</p>` : ""}
${share ? `<p><strong>Shared:</strong> ${share}</p>` : ""}

<p><strong>Mascot:</strong> ${mascotAdj} ${mascotAnimal} ${divider}</p>
<p><strong>Acknowledgment:</strong> ${acknowledgment} (${ackDate})</p>

<h4>Links</h4>
<ul>
${linksHTML}
</ul>
`;

        // Hide form and display output
        form.style.display = "none";
        htmlOutput.style.display = "block";

        // Insert HTML as text for highlighting
        htmlCode.textContent = generatedHTML;

        // Highlight.js
        hljs.highlightElement(htmlCode);

        // Change H2
        h2.textContent = "Introduction HTML";
    });
});
