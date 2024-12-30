import os

files = [f for f in os.listdir('.') if f.endswith('.md') and '-' in f]
files.sort(key=lambda x: int(x.split('-')[0]))

for i, fn in enumerate(files):
    with open(fn, "a") as f:
        f.write("\n\n")
        if i > 0:
            prevfn = files[i - 1].replace('.md', '.html')
            f.write(f"[&laquo; Go to previous chapter]({prevfn})&nbsp;&nbsp;&nbsp;&nbsp;")

        f.write(f"[Return to table of contents](LearningT3Lite.html)&nbsp;&nbsp;&nbsp;&nbsp;")

        if i < len(files) - 1:
            nextfn = files[i + 1].replace('.md', '.html')
            f.write(f"[Go to next chapter &raquo;]({nextfn})")
