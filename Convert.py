from markdown import markdown

# Read the Markdown content
with open("README.md", "r") as md_file:
    markdown_content = md_file.read()

# Convert to HTML
html_content = markdown(markdown_content)

# Save the HTML content to a file
with open("README.html", "w") as html_file:
    html_file.write(html_content)

print("Conversion complete. HTML file saved as README.html.")
