document.addEventListener("DOMContentLoaded", () => {
    const jsonBtn = document.getElementById("jsonBtn");
    const jsonOutput = document.getElementById("jsonOutput");
    const jsonCode = document.getElementById("jsonCode");
    const form = document.getElementById("introForm");
    const h2 = document.querySelector("h2");

    jsonBtn.addEventListener("click", () => {
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
        const courses = Array.from(courseDivs).map(div => ({
            department: div.querySelector("input[placeholder='Department']").value,
            number: div.querySelector("input[placeholder='Number']").value,
            name: div.querySelector("input[placeholder='Course Name']").value,
            reason: div.querySelector("input[placeholder='Reason']").value
        }));

        // Links
        const links = Array.from(document.querySelectorAll("#introForm input[type='url']"))
            .map(input => input.value)
            .filter(url => url.trim() !== "");

        // Build JSON object
        const formData = {
            firstName,
            middleName,
            nickname,
            lastName,
            acknowledgment,
            ackDate,
            mascot: { adjective: mascotAdj, animal: mascotAnimal, divider },
            picture,
            caption,
            statement,
            background: { personal: bullet1, academic: bullet2, professional: bullet3 },
            courses,
            quote: { text: quote, author: quoteAuthor },
            funnyThing,
            share,
            links
        };

        // Convert to pretty JSON
        const jsonString = JSON.stringify(formData, null, 2);

        // Hide form and show JSON output
        form.style.display = "none";
        jsonOutput.style.display = "block";

        // Insert JSON into code block
        jsonCode.textContent = jsonString;

        // Highlight.js for JSON
        hljs.highlightElement(jsonCode);

        // Update H2
        h2.textContent = "Introduction JSON";
    });
});
